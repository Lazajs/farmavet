'use client'
import { useEffect, useState, useRef } from 'react'
import dynamic from 'next/dynamic'
const Image = dynamic(() => import('next/image'), { ssr: false })
export default function ImageCarousel () {
  const ref: React.Ref<HTMLDivElement> = useRef(null)

  const headerImages = [
    'https://res.cloudinary.com/dfdxnfa6j/image/upload/v1704702240/page/cmp1_b0ccmx.png',
    'https://res.cloudinary.com/dfdxnfa6j/image/upload/v1704702233/page/cmp5_bmjllg.png',
    'https://res.cloudinary.com/dfdxnfa6j/image/upload/v1704702223/page/cmp2_e8l7fb.png',
    'https://res.cloudinary.com/dfdxnfa6j/image/upload/v1704702220/page/cmp4_qfjs4h.png',
    'https://res.cloudinary.com/dfdxnfa6j/image/upload/v1704702201/page/cmp6_yta6g3.png',
    'https://res.cloudinary.com/dfdxnfa6j/image/upload/v1704702197/page/cmp3_z99d39.png'

  ]

  const [currentImage, setCurrentImage] = useState(Math.floor(Math.random() * headerImages.length))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImg) => prevImg === headerImages.length - 1 ? 0 : prevImg + 1)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={ref}>
      <Image priority src={headerImages[currentImage]} alt='Animal' width={1343} height={720} className='aspect-video w-full'/>
    </div>

  )
}
