'use client'

import { IProduct } from '@/interfaces/Product.interface'
import { dmSerif } from '@/utils/fonts'
import dynamic from 'next/dynamic'
import { useState, useMemo, useEffect } from 'react'
import useNearScreen from '@/hooks/useNearScreen'
import Spinner from '@/components/Spinner'

const Product = dynamic(() => import('@/components/Product'), { ssr: false }) // Avoid prerender

export default function Page ({ products }: {products: IProduct[]}) {
  const [currentProducts, setCurrentProducts] = useState(products)
  const offset = useMemo(() => currentProducts.length, [currentProducts.length])
  const { element, isIntersecting } = useNearScreen()

  useEffect(() => {
    const updateState = async () => {
      const response = await fetch(`/api/products/search?offset=${offset}`)
      const data = await response.json()
      setCurrentProducts((prod) => prod.concat(data))
    }

    if (isIntersecting) updateState()
  }, [isIntersecting])

  return (
    <main className="max-w-[1440px] m-auto mt-10 p-4 lg:p-[120px] pt-0 lg:pt-0">
      <h1 className={`${dmSerif.className} text-xl2 font-normal text-textBlack mb-10 md:mt-20 text-center md:text-left md:text-xl3`}>Productos</h1>
      <section className='flex flex-col md:flex-row md:flex-wrap relative min-h-screen md:gap-[22px] gap-2 w-full items-center'>
        {
          currentProducts.map((product: IProduct) => {
            return <Product key={product.CODIGO} CODIGO={product.CODIGO} IMAGE={product.IMAGE} ARTICULO={product.ARTICULO} PROVEEDOR={product.PROVEEDOR} TIPO={product.TIPO} />
          })
        }
        <div ref={element} className='relative bottom-0 pt-20 w-full h-10 rounded-3xl'>
          <Spinner center={true} />
        </div>
      </section>
    </main>
  )
}
