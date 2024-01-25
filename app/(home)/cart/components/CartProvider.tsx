'use client'
import { useState, useEffect } from 'react'
import { CartCTX } from '@/context/CartCTX'
import { IOrder } from '@/interfaces/Order.interface'
import { IProduct } from '@/interfaces/Product.interface'

type CartOps = 'add' | 'minus'

export default function CartProvider ({ children } : {children: React.ReactNode}) {
  const [cart, setCart] = useState<IOrder[] | null>(() => {
    const prevOrder = localStorage.getItem('cart')
    return prevOrder ? JSON.parse(prevOrder) : null
  })

  useEffect(() => {
    if (cart && cart.length > 0) {
      const localStorageCart = localStorage.getItem('cart')
      const stringifiedCart = JSON.stringify(cart)
      if (localStorageCart !== stringifiedCart) localStorage.setItem('cart', stringifiedCart)
    } else if (Array.isArray(cart) && cart.length === 0) {
      setCart(null)
    } else if (!cart) localStorage.removeItem('cart')
  }, [cart])

  const isInCart = (item: IProduct) => {
    if (!cart) return false
    const found = cart.find(cartItem => cartItem.CODIGO === item.CODIGO)
    return !!found
  }

  const addToCart = (item: IProduct, quantity?: number): IProduct => {
    if (!isInCart(item)) {
      const toAddItem: IOrder = {
        CODIGO: item.CODIGO,
        quantity: quantity || 1,
        ARTICULO: item.ARTICULO,
        TIPO: item.TIPO,
        PROVEEDOR: item.PROVEEDOR
      }

      setCart(prevCart => prevCart ? prevCart.concat(toAddItem) : [toAddItem])
    }

    return item
  }

  const removeFromCart = (item: IProduct): IProduct => {
    if (isInCart(item) && cart) {
      const withoutItem = cart.filter(cartItem => cartItem.CODIGO !== item.CODIGO)
      setCart(withoutItem)
    }
    return item
  }

  const getFromCart = (item: IProduct): IOrder => cart!.find(cartItem => cartItem.CODIGO === item.CODIGO) as IOrder // Check if isInCart before usage

  const updateQuantity = (item: IProduct, operation: CartOps) => {
    if (isInCart(item) && cart) {
      switch (operation) {
        case 'add': {
          const product = getFromCart(item)
          const withoutItem = cart.filter(cartItem => cartItem.CODIGO !== product.CODIGO)
          setCart([...withoutItem, { ...product, quantity: product.quantity + 1 }])
          break
        }
        case 'minus': {
          const product = getFromCart(item)
          const withoutItem = cart.filter(cartItem => cartItem.CODIGO !== product.CODIGO)
          const updatedQuantity = product.quantity === 1 ? 1 : product.quantity - 1

          setCart([...withoutItem, { ...product, quantity: updatedQuantity }])

          break
        }
      }
    }
  }

  return (
    <CartCTX.Provider value={{ cart, updateQuantity, isInCart, removeFromCart, addToCart }}>
      {children}
    </CartCTX.Provider>
  )
}
