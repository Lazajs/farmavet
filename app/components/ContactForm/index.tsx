'use client'

import FormContent from './FormContent'
import { sendContactMail } from './actions'
import { useFormState, useFormStatus } from 'react-dom'
import { useMemo } from 'react'

export default function ContactForm () {
  const [state, formAction] = useFormState(sendContactMail, null)

  const errors = useMemo(() => {
    if (!state) return ['']
    // @ts-expect-error
    if (state && !state._errors) return ['']
    else return Object.keys(state)
  }, [state])

  return (
    <form action={formAction} className='flex m-auto flex-col gap-[16px] md:gap-[24px] lg:min-w-[500px]'>
      <FormContent errors={errors} />
      {
        state && errors[0] === '' ? <p className='text-primary font-bold text-2xl text-center'>Gracias por contactarte!</p> : <Submit />
      }
    </form>
  )
}

function Submit () {
  const { pending } = useFormStatus()

  return <button className={`${pending ? 'opacity-75' : ''} bg-primary w-[190px] h-[50px] rounded-[50px] text-xs font-medium text-textWhite block m-auto`}>
    {
      pending ? 'Procesando...' : 'ENVIAR MENSAJE'
    }
  </button>
}
