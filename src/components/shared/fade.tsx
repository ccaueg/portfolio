'use client'

import type { ReactNode } from 'react'
import { useIntersection } from '@/hooks/use-intersection'

interface FadeProps {
  children: ReactNode
  delay?: number
}

export function Fade({ children, delay = 0 }: FadeProps) {
  const [ref, isVisible] = useIntersection({ rootMargin: '0px 0px -50px 0px' })

  return (
    <div
      ref={ref}
      className={`transition-all duration-550 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
      style={{
        transitionDelay: isVisible ? `${delay}s` : '0s',
      }}
    >
      {children}
    </div>
  )
}
