'use client'
import { Icons } from '@/components/Icons'
import { useState } from 'react'
/* eslint-disable @typescript-eslint/no-explicit-any */
const { User, Letter, Pencil } = Icons

// Used any because of the SVGs
export default function FormContent () {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = ({ target }: {target: HTMLInputElement | HTMLTextAreaElement}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  return (
    <>
    <span className='relative'>
        <User className='absolute top-1/2 -translate-y-1/2 left-[10px] w-[22px] h-[22px]'/>
        <input name="name" value={formValues.name} onChange={handleChange} placeholder='Nombre *' className='h-[65px] w-full max-w-[680px] bg-softWhite border-none outline-none placeholder:text-textGray rounded-[15px] py-[20px] px-[42px] text-xs md:text-base font-normal' />
      </span>

      <span className='relative'>
        <Letter className='absolute top-1/2 -translate-y-1/2 left-[10px] w-[22px] h-[22px]'/>
        <input name="email" value={formValues.email} onChange={handleChange} placeholder='Correo electronico *' className='h-[65px] w-full max-w-[680px] bg-softWhite border-none outline-none placeholder:text-textGray rounded-[15px] py-[20px] px-[42px] text-xs md:text-base font-normal' />
      </span>

      <span className='relative'>
        <Pencil className='absolute top-[20px] md:top-[25px] left-[10px] w-[22px] h-[22px]'/>
        <textarea name="message" value={formValues.message} onChange={handleChange} placeholder='Mensaje *' className='w-full py-[20px] px-[42px] max-w-[680px] h-[240px] md:h-[290px] bg-softWhite border-none outline-none placeholder:text-textGray rounded-[15px] resize-none text-xs md:text-base font-normal'></textarea>
      </span>
    </>
  )
}
