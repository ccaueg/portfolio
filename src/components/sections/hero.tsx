import { Download } from 'lucide-react'
import { IconEmail } from '@/components/icons/icon-email'
import { IconGithub } from '@/components/icons/icon-github'
import { IconLinkedin } from '@/components/icons/icon-linkedin'
import { IconPhone } from '@/components/icons/icon-phone'
import { Fade } from '@/components/shared/fade'
import { siteConfig } from '@/config/site'
import { contactLinks } from '@/data/contact'

function HeroContactIcon({
  icon,
}: {
  icon: (typeof contactLinks)[number]['icon']
}) {
  if (icon === 'email') {
    return <IconEmail className="h-4 w-4" />
  }

  if (icon === 'linkedin') {
    return <IconLinkedin className="h-4 w-4" />
  }

  if (icon === 'github') {
    return <IconGithub className="h-4 w-4" />
  }

  return <IconPhone className="h-4 w-4" />
}

export function HeroSection() {
  return (
    <section
      className="flex min-h-screen items-center justify-center pt-20 pb-16 max-[560px]:pt-24 max-[560px]:pb-10"
      id="hero"
    >
      <div className="w-full text-center">
        <Fade delay={0.07}>
          <p className="mb-5 text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
            desenvolvedor backend
          </p>
        </Fade>

        <Fade delay={0.14}>
          <h1 className="mb-5 text-[clamp(2.5rem,8vw,4.5rem)] leading-[1.02] font-light tracking-[-0.05em] text-foreground max-[560px]:text-[clamp(2.1rem,11vw,2.8rem)]">
            {siteConfig.name}
          </h1>
        </Fade>

        <Fade delay={0.21}>
          <p className="mx-auto mb-10 max-w-120 text-[12px] leading-[1.9] text-[color-mix(in_oklab,var(--muted)_60%,var(--fg)_40%)] max-[560px]:mb-8 max-[560px]:max-w-[92%] max-[560px]:text-[11px] max-[560px]:leading-[1.8]">
            {siteConfig.description}
          </p>
        </Fade>

        <Fade delay={0.24}>
          <div className="mb-10 flex items-start justify-center gap-4 max-[560px]:hidden">
            {contactLinks.map(link => {
              const isExternal = link.href.startsWith('https://')

              return (
                <a
                  key={link.key}
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  aria-label={link.value}
                  className="group relative inline-flex min-h-8 min-w-8 flex-col items-center justify-center border border-input px-1 text-[color-mix(in_oklab,var(--muted)_60%,var(--fg)_40%)] transition-colors hover:border-muted hover:text-foreground"
                >
                  <HeroContactIcon icon={link.icon} />
                  <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap border border-input bg-background px-2 py-0.5 text-[9.5px] tracking-[0.03em] text-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100 max-[560px]:static max-[560px]:mt-1 max-[560px]:translate-x-0 max-[560px]:border-0 max-[560px]:bg-transparent max-[560px]:p-0 max-[560px]:text-[9px] max-[560px]:opacity-100">
                    {link.value}
                  </span>
                </a>
              )
            })}
          </div>
        </Fade>

        <Fade delay={0.28}>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] tracking-[0.05em]">
            <a
              href="#projetos"
              className={`border border-input px-3.5 py-[0.4rem] text-[color-mix(in_oklab,var(--muted)_60%,var(--fg)_40%)] hover:border-muted hover:text-foreground`}
            >
              ver projetos
            </a>
            <a
              href={siteConfig.resume}
              download="caue-gomes-curriculo.pdf"
              className={`inline-flex items-center gap-1 border border-input px-3.5 py-[0.4rem] text-[color-mix(in_oklab,var(--muted)_60%,var(--fg)_40%)] hover:border-muted hover:text-foreground`}
            >
              <Download className="h-3 w-3" />
              baixar currículo
            </a>
          </div>
        </Fade>
      </div>
    </section>
  )
}
