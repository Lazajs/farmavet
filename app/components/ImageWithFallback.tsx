'use client'
import { useState } from 'react'

interface Props {
  styles: string
  src: string
  fallbacks: string[]
}

const ImageWithFallbacks = (props: Props) => {
  const { styles } = props
  const [src, setSrc] = useState(props.src)
  const [fallbackIndex, setFallbackIndex] = useState(0)

  const onError = () => {
    if (fallbackIndex >= props.fallbacks.length) {
      return
    }
    setSrc(props.fallbacks[fallbackIndex])
    setFallbackIndex((prevIndex) => prevIndex + 1)
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={styles} src={src} onError={onError} width={200} height={200} alt="Farmavet placeholder" />
}

export default ImageWithFallbacks
