'use client'

import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    const htmlTheme = document.documentElement.getAttribute(
      'data-theme'
    ) as Theme | null
    const current = stored || htmlTheme || 'dark'

    setTheme(current)
    document.documentElement.setAttribute('data-theme', current)
    setMounted(true)
  }, [])

  const toggle = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', newTheme)
      localStorage.setItem('theme', newTheme)
      return newTheme
    })
  }

  return { theme, toggle, mounted }
}
