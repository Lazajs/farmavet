'use client'

import { Icons } from './Icons'
import Link from 'next/link'

const { LocationFooter, PhoneFooter, FLogo, InstagramFooter, LetterFooter } = Icons

export default function Footer () {
  return (
    <footer className='bg-primary w-full h-[300px] md:h-[220px] mt-4 overflow-hidden flex flex-col items-center text-textWhite text-small justify-between md:justify-around p-5 md:flex-row'>
      <div className='flex flex-col items-center md:items-start gap-1 md:gap-4'>
        <p className='flex gap-2 font-bold'>
          <LocationFooter />
          Córdoba, Argentina
        </p>

        <p className='flex gap-2 font-bold'>
          <PhoneFooter />
          +54 9 3825 58-9558
        </p>

        <p className='flex gap-2 font-bold'>
          <LetterFooter />
          farmavettt@gmail.com
        </p>

        <p className='flex gap-2 font-bold'>
          <InstagramFooter />
          @servicios_veterinarios_ok
        </p>
      </div>

      <div className='flex flex-col items-center md:items-start gap-1 md:gap-4'>
        <FLogo />
        <Link href={'#'} className='underline cursor-pointer'>Política de privacidad</Link>
        <p>FARMAVET © Copyright 2024</p>
      </div>
    </footer>
  )
}
