'use client'

import { type IOrder } from '@/interfaces/Order.interface'
import ProductImage from '@/components/ProductImage'
import { Icons } from '@/components/Icons'
import useCart from '@/hooks/useCart'

const { Trash } = Icons

const Minus = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g clipPath="url(#a)"><circle cx="12" cy="12" r="12" fill="#D9D9D9"/><path stroke="#545454" strokeLinecap="round" strokeWidth="2" d="M6 12h12"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>)
const Plus = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g clipPath="url(#a)"><circle cx="12" cy="12" r="12" fill="#D9D9D9"/><path fill="#545454" d="M18 12.998h-5v5a1.0001 1.0001 0 0 1-2 0v-5H6a1.0002 1.0002 0 0 1-.7071-1.7071A1.0002 1.0002 0 0 1 6 10.998h5v-5a1.0002 1.0002 0 0 1 1.7071-.7071c.1875.1875.2929.4419.2929.7071v5h5a1.0001 1.0001 0 0 1 0 2Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>)
const DisabledMinus = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g stroke="#D9D9D9" clipPath="url(#a)"><circle cx="12" cy="12" r="11" fill="#fff" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="1.7" d="M7 12h10"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>)

export default function CartCard ({ CODIGO, ARTICULO, quantity, TIPO, PROVEEDOR }: IOrder) {
  const SELF = { CODIGO, ARTICULO, quantity, TIPO, PROVEEDOR, _id: '' }
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className='flex rounded-[15px] relative bg-white p-[10px] max-w-[790px] md:h-[180px]'>
      <figure className='self-center w-[130px] h-[130px] md:w-[180px] md:h-[180px] md:max-w-full grid place-content-center'>
        <ProductImage styles={'h-auto w-auto max-h-[180px] rounded-[15px]'} CODIGO={CODIGO} />
      </figure>
      <span className='md:block md:absolute md:top-1/2 md:-translate-y-1/2 md:left-[25%]'>
        <p className='text-textBlack text-small md:text-sm font-bold'>{TIPO}</p>
        <p className='text-textBlack text-small md:text-sm font-medium'>{ARTICULO}</p>
        <p className='text-textBlack text-tiny md:text-xs font-medium'>{PROVEEDOR}</p>
      </span>

      <span className='flex absolute md:top-1/2 md:-translate-y-1/2 md:right-[20%] bottom-[15px] bg-white w-fit text-black text-sm font-bold right-[15px] rounded-lg p-1 max-w-[100px] h-fit gap-[16px]'>
        <button onClick={() => updateQuantity(SELF, 'minus')}>
          {quantity === 1 ? <DisabledMinus /> : <Minus />}
        </button>
        <p>{quantity}</p>
        <button onClick={() => updateQuantity(SELF, 'add')}>
          <Plus />
        </button>
      </span>

      <Trash onClick={() => removeFromCart(SELF)} className='absolute md:top-1/2 md:-translate-y-1/2 md:right-[20px] cursor-pointer top-[10px] right-[10px]' />
    </div>
  )
}
