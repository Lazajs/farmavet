'use client'
import Link from 'next/link'
import { Icons } from '@/components/Icons'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const { Cart, CloseBurger, Burger, LogoWhite } = Icons

interface Props {
  Mobile: React.ReactNode
  Desktop: React.ReactNode
}

export default function Navbar ({ Mobile, Desktop } : Props) {
  const allowedSearchPaths = ['/', '/products']
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='h-fit bg-primary w-full shadow-common'>
        <nav className="h-[80px] w-full flex m-auto items-center max-w-[1440px] p-4">
          {
            isOpen
              ? <CloseBurger className='md:hidden min-w-[40px]' onClick={() => setIsOpen(!isOpen)}/>
              : <Burger className='md:hidden min-w-[40px]' onClick={() => setIsOpen(!isOpen)}/>
          }
          <Link href={'/'}>
            <LogoWhite className='scale-[50%] sm:scale-[60%] shrink-0' />
          </Link>
          { allowedSearchPaths.includes(pathname) ? Desktop : '' }
          {
            allowedSearchPaths.includes(pathname) && isOpen
              ? Mobile
              : ''
          }
          <span className='hidden md:flex justify-center w-fit mr-2 lg:mr-0 lg:ml-auto'>
            <Link href='/products' className='text-white font-medium w-fit text-xs lg:text-base ml-[30px]'>Productos</Link>
            <a href='#services' className='text-white font-medium w-fit text-xs lg:text-base ml-[30px]'>Servicios</a>
            <a href='#contact' className='text-white font-medium w-fit text-xs lg:text-base ml-[30px]'>Contacto</a>
          </span>
          <Cart className='ml-auto lg:ml-20 mr shrink-0'/>
        </nav>
      </div>
    </>
  )
}
