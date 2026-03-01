import { IconEmail } from '@/components/icons/icon-email'
import { IconGithub } from '@/components/icons/icon-github'
import { IconLinkedin } from '@/components/icons/icon-linkedin'
import { IconPhone } from '@/components/icons/icon-phone'
import { Fade } from '@/components/shared/fade'
import { SectionLabel } from '@/components/shared/section-label'
import { contactLinks } from '@/data/contact'
import type { ContactLink } from '@/types'

interface ContactItemProps {
  link: ContactLink
}

function ContactIcon({ icon }: Pick<ContactLink, 'icon'>) {
  if (icon === 'email') {
    return <IconEmail className="h-3.75 w-3.75" />
  }

  if (icon === 'linkedin') {
    return <IconLinkedin className="h-3.75 w-3.75" />
  }

  if (icon === 'github') {
    return <IconGithub className="h-3.75 w-3.75" />
  }

  return <IconPhone className="h-3.75 w-3.75" />
}

function ContactItem({ link }: ContactItemProps) {
  const isExternal = link.href.startsWith('https://')

  return (
    <a
      href={link.href}
      className="flex items-center gap-6 border-b border-border py-[0.9rem] text-inherit"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={
        isExternal ? `Abrir ${link.key} em nova aba` : `Contato por ${link.key}`
      }
    >
      <span className="shrink-0 opacity-[0.38] transition-opacity [a:hover_&]:opacity-[0.85]">
        <ContactIcon icon={link.icon} />
      </span>
      <span className="w-20 shrink-0 text-[10px] tracking-[0.08em] text-muted-foreground uppercase max-[560px]:w-16.25">
        {link.key}
      </span>
      <span className="text-[11.5px] text-(--text) transition-colors [a:hover_&]:text-foreground">
        {link.value}
      </span>
    </a>
  )
}

export function ContactSection() {
  return (
    <section className="pt-28" id="contato">
      <Fade delay={0.07}>
        <SectionLabel label="contato" />
      </Fade>

      <Fade delay={0.14}>
        <div className="flex flex-col border-t border-border">
          {contactLinks.map(link => (
            <ContactItem key={link.key} link={link} />
          ))}
        </div>
      </Fade>
    </section>
  )
}
