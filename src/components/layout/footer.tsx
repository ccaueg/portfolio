import { Fade } from '@/components/shared/fade'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <Fade delay={0.07}>
      <footer className="mx-auto w-full max-w-175 px-8 pt-20 pb-12 text-[10px] tracking-[0.06em] text-muted-foreground max-[560px]:px-[1.4rem]">
        <div>
          <p>{`cauê gomes prieto · ${year}`}</p>
        </div>
      </footer>
    </Fade>
  )
}
