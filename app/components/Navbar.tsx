'use client'
import { Icons } from './Icons'
import Search from './Search'

const { Burger, LogoWhite, Cart } = Icons

export default function Navbar () {
  return (
    <nav className="bg-primary h-[80px] w-full flex items-center p-4 shadow-xl">
      <Burger className='md:hidden' />
      <LogoWhite className='scale-[50%] sm:scale-[60%] shrink-0' />
      <Search />
      <span className='hidden md:flex justify-center w-fit mr-2 lg:ml-auto'>
        <a href='#' className='text-white font-medium w-fit text-xs lg:text-base ml-[30px]'>Productos</a>
        <a href='#' className='text-white font-medium w-fit text-xs lg:text-base ml-[30px]'>Servicios</a>
        <a href='#' className='text-white font-medium w-fit text-xs lg:text-base ml-[30px]'>Contacto</a>
      </span>
      <Cart className='ml-auto mr shrink-0'/>
    </nav>
  )
}
