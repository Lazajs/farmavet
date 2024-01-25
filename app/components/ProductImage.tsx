'use client'
import { useState } from 'react'

interface Props {
  styles: string
  CODIGO: string
}

const ProductImage = (props: Props) => {
  const { styles } = props
  const [src, setSrc] = useState(`https://esperanzadistri.com.ar/medicamentos/uploads/${props.CODIGO}.jpg`)
  const [fallbackIndex, setFallbackIndex] = useState(0)

  const IMAGE_FALLBACKS = [
    `https://esperanzadistri.com.ar/instrumental/uploads/${props.CODIGO}.jpg`,
    `https://esperanzadistri.com.ar/balanceados/uploads/${props.CODIGO}.jpg`,
    '/placeholder-article.svg'
  ]

  const onError = () => {
    if (fallbackIndex >= IMAGE_FALLBACKS.length) {
      return
    }
    setSrc(IMAGE_FALLBACKS[fallbackIndex])
    setFallbackIndex((prevIndex) => prevIndex + 1)
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={styles} src={src} onError={onError} width={200} height={200} alt="Farmavet placeholder" />
}

export default ProductImage
