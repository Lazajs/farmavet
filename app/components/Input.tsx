'use client'

interface Props {
  name: string
  placeholder: string
}

export function Input ({ name, placeholder }: Props) {
  return (
    <input name={name} placeholder={placeholder} className='border-red-600 border-[2px]' />
  )
}
