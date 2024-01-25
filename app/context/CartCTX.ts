'use client'
import { createContext } from 'react'
import { IOrder } from '@/interfaces/Order.interface'
import { IProduct } from '@/interfaces/Product.interface'

interface CTX {
  cart: IOrder[] | null
  addToCart: (item: IProduct) => IProduct
  isInCart: (item: IProduct) => boolean
  updateQuantity: (item: IProduct, operation: 'add' | 'minus') => void
  removeFromCart: (item: IProduct) => IProduct
}

export const CartCTX = createContext({} as CTX)
