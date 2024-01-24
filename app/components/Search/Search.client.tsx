'use client'
import { useState, useEffect } from 'react'
import { Icons } from '../Icons'
import { useDebounce } from '@/hooks/useDebounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const { Lupa } = Icons

export default function Search ({ children } : {children: React.ReactNode}) {
  const searchParams = useSearchParams()
  const [value, setValue] = useState(() => {
    const params = new URLSearchParams(searchParams)
    return params.get('text') || ''
  })
  const debouncedValue = useDebounce<string>(value, 500)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/' && !debouncedValue) return
    const params = new URLSearchParams(searchParams)
    if (debouncedValue) {
      params.set('text', debouncedValue)
    } else {
      params.delete('text')
    }

    router.push(`/products?${params.toString()}`)
  }, [debouncedValue])

  return (
    <>
      <span className='w-full h-[45px] relative md:static max-w-[475px] shrink-2 hidden md:block'>
        <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Busca entre más de 1000 productos' className='border-[1px] lg:text-base text-sm border-white bg-transparent rounded-[50px] py-[10px] pl-[14px] pr-[90px] w-full h-full sm:placeholder:text-sm lg:placeholder:text-base placeholder:text-white outline-none text-white placeholder:font-medium'/>
        <Lupa className='absolute right-[20px] top-1/2 -translate-y-1/2'/>
        {children}
      </span>
    </>
  )
}
