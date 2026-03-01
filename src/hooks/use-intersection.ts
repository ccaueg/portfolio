'use client'

import { useEffect, useRef, useState } from 'react'

interface UseIntersectionOptions {
  threshold?: number | number[]
  rootMargin?: string
}

export function useIntersection(
  options: UseIntersectionOptions = {}
): readonly [React.RefObject<HTMLDivElement | null>, boolean] {
  const { threshold = 0.06, rootMargin = '0px 0px -50px 0px' } = options
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      return
    }

    const element = ref.current

    if (!element) {
      return
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [isVisible, rootMargin, threshold])

  return [ref, isVisible] as const
}
