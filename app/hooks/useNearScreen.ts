import { useEffect, useRef, useState } from 'react'

export default function useNearScreen () {
  const element = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  const onChange = (entries: any, observer: any) => {
    const el = entries[0]
    setIsIntersecting(el.isIntersecting)
  }

  useEffect(() => {
    if (element.current) {
      const observer = new IntersectionObserver(onChange, {
        rootMargin: '100px'
      })

      observer.observe(element.current)

      return () => observer.disconnect()
    }
  }, [element])

  return { element, isIntersecting }
}
