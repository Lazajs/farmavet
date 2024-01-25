'use client'

import { CartCTX } from '@/context/CartCTX'
import { useContext } from 'react'

export default function useCart () {
  return useContext(CartCTX)
}
