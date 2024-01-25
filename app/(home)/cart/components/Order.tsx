'use client'

import CartCard from './CartCard'
import Link from 'next/link'
import useCart from '@/hooks/useCart'
import { type IOrder } from '@/interfaces/Order.interface'

const Arrow = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#545454" d="M16.0613 21.546a1.5001 1.5001 0 0 0 0-2.121L8.6363 12l7.425-7.425a1.5002 1.5002 0 0 0-.0183-2.1027 1.5 1.5 0 0 0-2.1027-.0183l-8.4855 8.4855a1.5 1.5 0 0 0 0 2.121l8.4855 8.4855a1.5001 1.5001 0 0 0 2.121 0Z"/></svg>)

export default function Order () {
  const { cart } = useCart()

  const sortedCart = cart ? cart.sort((a: IOrder, b: IOrder) => +a.CODIGO - +b.CODIGO) : null

  return (
    <section className='lg:grid lg:grid-cols-2 lg:gap-[20px] w-full h-full' style={{ gridTemplateColumns: 'minmax(0, 800px) 1fr', gridAutoRows: 'auto' }}>
      {
       !sortedCart
         ? (
        <span className='bg-white rounded-[15px] h-[180px] w-[280px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <p className='text-base text-primary text-center mt-10 font-bold'>No hay productos en el carrito.</p>
          <Link href='/products' className='block m-auto w-fit mt-2 rounded-[50px] px-[30px] py-[15px] bg-primary text-textWhite font-bold'>Buscar</Link>
        </span>
           )
         : (
            <article className='flex flex-col mx-[16px] gap-[16px] md:m-0 m-auto'>
             { sortedCart.map(product => <CartCard key={product.CODIGO} {...product} />) }
            <Link href={'/products'}>
              <span className='flex my-10 mx-4'>
                <Arrow/>
                <p className='text-textGray font-bold text-xs'>Volver a la tienda</p>
              </span>
            </Link>
            </article>
           )
      }

      {
        sortedCart && <div className='bg-white py-[10px] px-[30px] md:h-[180px] m-auto md:m-0 rounded-[15px] max-w-[390px]'>
        <p className='text-center md:text-g text-base font-bold text-textBlack'>Resumen de mi pedido</p>
        <span className='text-textBlack md:text-sm mt-[12px] font-medium text-xs flex justify-between'>
          <p>Productos</p>
          <p>x {cart?.length}</p>
        </span>
        <button className='w-[200px] md:w-[350px] block mt-[30px] m-auto py-[15px] px-[30px] text-white bg-primary whitespace-nowrap rounded-[50px] text-sm font-medium'>Solicitar pedido</button>
      </div>}
    </section>
  )
}
