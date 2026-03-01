import { cn } from '@/lib/utils'

interface SectionLabelProps {
  label: string
  className?: string
}

export function SectionLabel({ label, className = '' }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'mb-11 border-b border-border pb-[0.9rem] text-[10px] tracking-[0.18em] text-muted-foreground uppercase',
        className
      )}
    >
      {label}
    </div>
  )
}
