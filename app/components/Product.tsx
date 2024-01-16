'use client'

import { IProduct } from '@/interfaces/Product.interface'
import { useState } from 'react'
import Image from 'next/image'

export default function Product ({ PRECIO, ARTICULO, PROVEEDOR, TIPO }: IProduct) {
  const [isInCart, setIsInCart] = useState(() => {
    const cart = localStorage.getItem('cart')

    if (cart) {
      const cartParsed = JSON.parse(cart)
      const itemInCart = cartParsed.find((item: IProduct) => item.ARTICULO === ARTICULO)
      if (itemInCart) return true
      return false
    }
  })

  const addToCart = () => {
    const dataToAdd = {
      ARTICULO,
      quantity: 1
    }

    const cart = localStorage.getItem('cart')

    if (cart) {
      const cartParsed = JSON.parse(cart)
      const itemInCart = cartParsed.find((item: IProduct) => item.ARTICULO === ARTICULO)
      if (itemInCart) return
      const cartUpdated = [...cartParsed, dataToAdd]
      localStorage.setItem('cart', JSON.stringify(cartUpdated))
    } else {
      localStorage.setItem('cart', JSON.stringify([dataToAdd]))
    }

    setIsInCart(true)
  }

  return (
    <article className='max-w-[500px] min-h-[140px] w-[350px] flex md:flex-col md:border md:rounded-xl md:w-[280px] md:h-[480px] gap-4 border-b p-6 py-0 relative md:items-center text-textBlack'>
      <figure className='max-w-[140px] self-center md:max-w-full md:h-[270px] md:grid md:place-content-center md:border-[creamy]'>
        <Image className='object-contain object-center' src="/placeholder-article.svg" width={200} height={200} alt="Farmavet placeholder" />
      </figure>
      <div className='w-full max-w-[180px] md:max-w-full'>
        <small className='text-tiny font-medium mb-[10px]'>{PROVEEDOR}</small>
        <h6 className='font-bold text-xs mb-[10px]'>{TIPO}</h6>
        <p className='font-medium text-small'>{ARTICULO}</p>
      </div>
      <button onClick={addToCart} disabled={isInCart} className='md:hidden shadow-common disabled:opacity-50 rounded-full bg-primary p-4 absolute right-[10px] bottom-[10px]'>
        <Image src='/article-cart.svg' className='' width={20} height={20} alt='Add to cart' />
      </button>
      <button onClick={addToCart} disabled={isInCart} className='hidden shadow-common disabled:opacity-50 md:block bg-primary text-textWhite text-sm font-bold rounded-3xl px-6 py-2'>{isInCart ? 'En el carrito' : 'Añadir al carrito'}</button>
    </article>
  )
}
