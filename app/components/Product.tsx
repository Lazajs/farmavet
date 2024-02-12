'use client'

import ProductImage from './ProductImage'
import { IProduct } from '@/interfaces/Product.interface'
import Image from 'next/image'
import useCart from '@/hooks/useCart'
import useNotification from '@/hooks/useNotification'

export default function Product ({ ARTICULO, PROVEEDOR, TIPO, IMAGE, CODIGO }: Omit<IProduct, '_id'>) {
  const { isInCart, addToCart } = useCart()
  const SELF = { ARTICULO, PROVEEDOR, TIPO, IMAGE, CODIGO, _id: '' }
  const inCart = isInCart(SELF)
  const { displayNotification } = useNotification()

  const add = () => {
    displayNotification('ADDED_TO_CART')
    addToCart(SELF)
  }

  return (
    <article className='max-w-[500px] min-h-[140px] w-[350px] flex md:flex-col md:border md:rounded-xl md:w-[280px] md:h-[480px] gap-4 border-b p-6 py-0 relative md:items-center text-textBlack'>
      <figure className='min-w-[140px] self-center md:max-w-full md:h-[270px] md:grid md:place-content-center md:border-[creamy]'>
        <ProductImage styles={'h-auto max-h-[200px]'} CODIGO={CODIGO} />
      </figure>
      <div className='w-full max-w-[180px] md:max-w-full'>
        <small className='text-tiny font-medium mb-[10px]'>{PROVEEDOR}</small>
        <h6 className='font-bold text-xs mb-[10px]'>{TIPO}</h6>
        <p className='font-medium text-small'>{ARTICULO}</p>
      </div>
      <button onClick={add} disabled={inCart} className='md:hidden shadow-common disabled:opacity-50 rounded-full bg-primary p-4 absolute right-[10px] bottom-[10px]'>
        <Image src='/article-cart.svg' className='' width={20} height={20} alt='Add to cart' />
      </button>
      <button onClick={add} disabled={inCart} className='hidden shadow-common absolute bottom-[20px] disabled:opacity-50 md:block bg-primary text-textWhite text-sm font-bold rounded-3xl px-6 py-2'>{inCart ? 'En el carrito' : 'Añadir al carrito'}</button>
    </article>
  )
}
