import { cn } from '@/lib/utils'

interface TagProps {
  label: string
  className?: string
}

export function Tag({ label, className = '' }: TagProps) {
  return (
    <span
      className={cn(
        'inline-block border border-destructive bg-(--bg2) px-[0.55rem] py-[0.2rem] text-[10px] tracking-[0.04em] text-(--text)',
        className
      )}
    >
      {label}
    </span>
  )
}
