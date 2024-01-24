/* eslint-disable no-unused-vars */
'use client'
import { useState, useRef } from 'react'
import MobileSearch from '@/components/Search/MobileSearch'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

enum Options {
  TYPES,
  PROVIDERS
}

function ArrowDown () {
  return (
    <svg className='hidden md:inline-block' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M21.5459 7.93943C21.2646 7.65822 20.8832 7.50025 20.4854 7.50025C20.0877 7.50025 19.7062 7.65822 19.4249 7.93943L11.9999 15.3644L4.57493 7.93943C4.29202 7.66619 3.91312 7.515 3.51982 7.51842C3.12653 7.52183 2.75031 7.67959 2.4722 7.9577C2.19409 8.23581 2.03633 8.61203 2.03292 9.00533C2.0295 9.39862 2.18069 9.77752 2.45393 10.0604L10.9394 18.5459C11.2207 18.8271 11.6022 18.9851 11.9999 18.9851C12.3977 18.9851 12.7791 18.8271 13.0604 18.5459L21.5459 10.0604C21.8271 9.77914 21.9851 9.39767 21.9851 8.99993C21.9851 8.60218 21.8271 8.22072 21.5459 7.93943Z" fill="white"/>
    </svg>
  )
}

export default function ClientFilters ({ types, providers }: {types: Record<string, string[]>, providers: Record<string, string[]>}) {
  const [option, setOption] = useState<Options>(Options.TYPES)
  const fromSelection = option === Options.TYPES ? types : providers
  const filterBox = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleClick = (option: Options) => {
    setOption(option)

    if (filterBox.current) {
      filterBox.current.classList.toggle('show')
    }
  }

  const handleMouseLeave = () => {
    if (filterBox.current) {
      filterBox.current.classList.remove('show')
    }
  }

  const handleSelection = (value: string) => {
    const params = new URLSearchParams(searchParams)
    const keyToSearch = option === Options.TYPES ? 'type' : 'provider'

    params.set(keyToSearch, value)
    router.push(`/products?${params.toString()}`)
  }

  return (
    <>
        {pathname === '/'
          ? <div className='md:hidden w-full absolute left-0 top-[80px] p-4 pt-[40px] block bg-white h-[200px]'>
          <MobileSearch />
        </div>
          : ''}
      <div className='w-full md:bg-primary bg-white absolute left-0 md:top-[80px] top-[270px] shadow-common z-40'>
        <span className='bg-softWhite md:max-w-[1440px] md:bg-primary border md:w-full md:rounded-none md:h-[44px] md:block md:border-none md:text-white md:text-base w-[360px] h-[60px] m-auto md:pl-[120px] flex rounded-3xl text-sm font-bold'>
          <button className={`${option === Options.PROVIDERS && 'bg-white md:bg-primary'} md:mr-[60px] rounded-3xl md:rounded-none flex-1 uppercase md:lowercase md:first-letter:uppercase basis-1/2`} onMouseEnter={() => setOption(Options.PROVIDERS)} onClick={() => handleClick(Options.PROVIDERS)}>proveedores <ArrowDown /></button>
          <button className={`${option === Options.TYPES && 'bg-white md:bg-primary'} rounded-3xl md:rounded-none flex-1 uppercase md:lowercase md:first-letter:uppercase basis-1/2`} onMouseEnter={() => setOption(Options.TYPES)} onClick={() => handleClick(Options.TYPES)}>tipo <ArrowDown /></button>
        </span>

        <div id='box-filter' ref={filterBox} onMouseLeave={handleMouseLeave} className='text-[#3A3A3A] md:bg-white md:py-[30px] md:px-[30px] lg:px-[120px] xl:px-[180px] md:m-auto text-sm md:flex-wrap md:gap-[25px] md:text-base font-bold mt-[20px] md:hidden'>
          {
            Object.keys(fromSelection).map((key) => (
              <div key={key} className='md:bg-white gap-x-[2px] gap-y-[4px] md:w-[180px]'>
                <h3 className='h-[57px] md:p-0 md:h-fit bg-softWhite md:bg-white p-[16px]'>{key.toUpperCase()}</h3>
                <ul className='p-[18px] md:p-0 md:bg-white'>
                  {fromSelection[key].map((value) => (
                    <li className='md:font-medium cursor-pointer' onClick={() => handleSelection(value)} key={value}>{value}</li>
                  ))}
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
