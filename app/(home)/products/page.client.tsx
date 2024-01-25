'use client'

import { IProduct } from '@/interfaces/Product.interface'
import { dmSerif } from '@/utils/fonts'
import dynamic from 'next/dynamic'
import { useState, useMemo, useEffect } from 'react'
import useNearScreen from '@/hooks/useNearScreen'
import Spinner from '@/components/Spinner'
import MobileSearch from '@/components/Search/MobileSearch'
import { useRouter } from 'next/navigation'

const Product = dynamic(() => import('@/components/Product'), { ssr: false }) // Avoid prerender

interface Props {
  products: IProduct[]
  prevParams: { text?: string | undefined; provider?: string | undefined; type?: string | undefined; }
}

export default function Page ({ products, prevParams }: Props) {
  const [currentProducts, setCurrentProducts] = useState(products)
  const offset = useMemo(() => currentProducts.length, [currentProducts.length])
  const { element, isIntersecting } = useNearScreen()
  const [isAll, setIsAll] = useState(false)
  const router = useRouter()
  const queryParams = useMemo(() => {
    const params = new URLSearchParams(prevParams).toString()
    const query = params ? `&${params}` : ''
    return query
  }, [prevParams])

  useEffect(() => {
    const updateState = async () => {
      const response = await fetch(`/api/products/search?${queryParams}`)
      const data = await response.json()
      setCurrentProducts(data)
    }

    updateState()
  }, [prevParams])

  useEffect(() => {
    const params = new URLSearchParams(prevParams).toString()
    const query = params ? `&${params}` : ''

    const updateState = async () => {
      const response = await fetch(`/api/products/search?offset=${offset}${query}`)
      const data = await response.json()
      setCurrentProducts((prod) => {
        if (data.length === 0) setIsAll(true)
        return !prod.length ? data : prod.concat(data)
      })
    }

    if (isIntersecting) updateState()
  }, [isIntersecting])

  const clearFilters = () => {
    router.push('/products')
  }
  return (
    <main className="max-w-[1440px] m-auto mt-10 p-4 lg:p-[120px] pt-0 lg:pt-0">
      <h1 className={`${dmSerif.className} text-xl2 font-normal text-textBlack mb-10 md:mt-20 hidden md:block text-center md:text-left md:text-xl3`}>Productos</h1>

      {queryParams && <button className='rounded-xl bg-primary text-base text-white font-bold p-2 mb-10' onClick={clearFilters}> ❌ Quitar filtros</button>}

      <MobileSearch />
      <section className={`flex flex-col md:flex-row md:flex-wrap relative ${!isAll && 'min-h-screen'} md:gap-[22px] gap-2 w-full items-center`}>
          {
            currentProducts.map((product: IProduct) => {
              return <Product key={product.CODIGO} CODIGO={product.CODIGO} IMAGE={product.IMAGE} ARTICULO={product.ARTICULO} PROVEEDOR={product.PROVEEDOR} TIPO={product.TIPO} />
            })
          }

        {
          !isAll &&
            (
            <div ref={element} className='relative bottom-0 pt-20 w-full h-10 rounded-3xl'>
             <Spinner center={true} />
            </div>
            )
        }

      </section>
      {
      isAll &&
        (
            <div className='text-primary font-bold text-xl md:text-3xl mt-20 block text-center'>
              <h1>No hay más resultados. ¡Intenta con otra búsqueda!</h1>
            </div>
        )
      }
    </main>
  )
}
