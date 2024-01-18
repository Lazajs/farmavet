'use client'

import { dmSerif } from '@/utils/fonts'
import { IType, IProvider } from '@/interfaces/Product.interface'
import { useState } from 'react'

export default function MobileFilterWrapper ({ types, providers }: {types: IType[], providers: IProvider[]}) {
  const [value, setValue] = useState('')
  return (
    <div className='absolute bg-white md:hidden w-full h-full'>
      <h1 className={`${dmSerif.className} text-xl2 font-normal text-textBlack mb-10 text-center md:text-left md:text-xl3`}>Productos</h1>
      <span className='w-full h-[45px] relative max-w-[475px] shrink-2 block z-10'>
        <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Buscar' className='border-[1px] pl-12 lg:text-base text-sm border-softWhite bg-transparent rounded-[50px] py-[10px] pr-[90px] w-full h-full sm:placeholder:text-sm lg:placeholder:text-base placeholder:text-white outline-none text-black placeholder:font-medium'/>
        <svg className='absolute left-[20px] w-[20px] h-[20px]  top-1/2 -translate-y-1/2' xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23" fill="none">
          <path d="M20.2993 20.1967L15.7051 15.2405C16.8112 13.652 17.4083 11.7185 17.4062 9.73173C17.4062 4.657 13.5791 0.52832 8.875 0.52832C4.1709 0.52832 0.34375 4.657 0.34375 9.73173C0.34375 14.8065 4.1709 18.9351 8.875 18.9351C10.7166 18.9373 12.509 18.2932 13.9814 17.0999L18.5757 22.0561C18.8082 22.2804 19.1116 22.4001 19.4234 22.3907C19.7352 22.3813 20.0318 22.2435 20.2524 22.0055C20.473 21.7676 20.6007 21.4476 20.6094 21.1112C20.6182 20.7748 20.5072 20.4476 20.2993 20.1967ZM2.78125 9.73173C2.78125 8.43154 3.13864 7.16055 3.80823 6.07949C4.47782 4.99842 5.42954 4.15583 6.54302 3.65827C7.65651 3.16071 8.88176 3.03053 10.0638 3.28418C11.2459 3.53783 12.3317 4.16393 13.1839 5.08331C14.0362 6.00268 14.6165 7.17403 14.8517 8.44923C15.0868 9.72444 14.9661 11.0462 14.5049 12.2474C14.0437 13.4487 13.2626 14.4754 12.2605 15.1977C11.2584 15.92 10.0802 16.3056 8.875 16.3056C7.25943 16.3035 5.71059 15.6102 4.56821 14.3778C3.42583 13.1455 2.78319 11.4746 2.78125 9.73173Z" fill="#888888"/>
        </svg>
      </span>
    </div>
  )
}
