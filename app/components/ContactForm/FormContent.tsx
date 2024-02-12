'use client'

import { Icons } from '@/components/Icons'
const { User, Letter, Pencil } = Icons

export default function FormContent ({ errors }: {errors: string[]}) {
  const hasError = (name: string) => errors.includes(name)

  return (
    <>
      <span className='relative'>
        <User className='absolute top-1/2 -translate-y-1/2 left-[10px] w-[22px] h-[22px]'/>
        <input name="name" placeholder='Nombre *' className={`${hasError('name') ? 'border-red-500 border-[2px] border-solid' : 'border-none'} h-[65px] w-full max-w-[680px] bg-softWhite outline-none placeholder:text-textGray rounded-[15px] py-[20px] px-[42px] text-xs md:text-base font-normal`} />
      </span>

      <span className='relative'>
        <Letter className='absolute top-1/2 -translate-y-1/2 left-[10px] w-[22px] h-[22px]'/>
        <input name="email" placeholder='Correo electronico *' className={`${hasError('email') ? 'border-red-500 border-[2px] border-solid' : 'border-none'} h-[65px] w-full max-w-[680px] bg-softWhite outline-none placeholder:text-textGray rounded-[15px] py-[20px] px-[42px] text-xs md:text-base font-normal`} />
      </span>

      <span className='relative'>
        <Pencil className='absolute top-[20px] md:top-[25px] left-[10px] w-[22px] h-[22px]'/>
        <textarea name="message" placeholder='Mensaje *' className={`${hasError('message') ? 'border-red-500 border-[2px] border-solid' : 'border-none'} w-full py-[20px] px-[42px] max-w-[680px] h-[240px] md:h-[290px] bg-softWhite outline-none placeholder:text-textGray rounded-[15px] resize-none text-xs md:text-base font-normal`}></textarea>
      </span>
    </>
  )
}
