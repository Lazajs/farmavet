'use client'

import { useMemo } from 'react'
import { requestPricing } from '../actions'
import { useFormState } from 'react-dom'
import FormaData from './FormData'

export function OrderForm () {
  const [state, formAction] = useFormState(requestPricing, null)

  const errors = useMemo(() => {
    if (!state) return ['']
    if (state && !state._errors) return ['']
    else return Object.keys(state)
  }, [state])

  return (
    <form action={formAction} className='max-w-[700px] block m-auto xl:m-0 xl:inline-block'>
      <FormaData errors={errors} />
    </form>
  )
}
