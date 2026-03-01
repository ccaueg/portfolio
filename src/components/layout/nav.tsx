'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { IconMoon } from '@/components/icons/icon-moon'
import { IconSun } from '@/components/icons/icon-sun'
import { useTheme } from '@/hooks/use-theme'
import { cn } from '@/lib/utils'

export function Nav() {
  const { theme, toggle, mounted } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const mobileLinks = [
    { href: '#sobre', label: 'sobre' },
    { href: '#stack', label: 'conhecimentos' },
    { href: '#projetos', label: 'projetos' },
    { href: '#contato', label: 'contato' },
  ]

  if (!mounted) {
    return null
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
      <div className="flex items-center justify-between px-10 py-[1.3rem] max-[560px]:px-[1.4rem] max-[560px]:py-[1.1rem]">
        <Link
          href="#hero"
          className="text-[11.5px] tracking-[0.04em] text-foreground hover:text-muted-foreground"
        >
          {'cauê gomes'}
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex list-none items-center gap-8 text-[10.5px] tracking-[0.06em] text-muted-foreground max-[560px]:hidden">
            <li>
              <a href="#sobre" className="hover:text-foreground">
                sobre
              </a>
            </li>
            <li>
              <a href="#stack" className="hover:text-foreground">
                conhecimentos
              </a>
            </li>
            <li>
              <a href="#projetos" className="hover:text-foreground">
                projetos
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-foreground">
                contato
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={toggle}
            aria-label="Alternar tema"
            className={cn(
              'flex h-7.5 w-7.5 items-center justify-center border border-input text-muted-foreground',
              'hover:border-muted hover:text-foreground'
            )}
          >
            {theme === 'dark' ? (
              <IconSun className="h-3.25 w-3.25" />
            ) : (
              <IconMoon className="h-3.25 w-3.25" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(previous => !previous)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            className="hidden h-7.5 w-7.5 items-center justify-center border border-input text-muted-foreground hover:border-muted hover:text-foreground max-[560px]:inline-flex"
          >
            {mobileOpen ? (
              <X className="h-3.5 w-3.5" />
            ) : (
              <Menu className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="hidden border-t border-border px-[1.4rem] py-3 max-[560px]:block">
          <ul className="space-y-2 text-[10.5px] tracking-[0.06em] text-muted-foreground">
            {mobileLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1 hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  )
}
