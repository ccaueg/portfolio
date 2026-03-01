import { ExternalLink } from 'lucide-react'
import { Fade } from '@/components/shared/fade'
import { SectionLabel } from '@/components/shared/section-label'
import { Tag } from '@/components/shared/tag'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  return (
    <section className="pt-28" id="projetos">
      <Fade delay={0.07}>
        <SectionLabel label="projetos" />
      </Fade>

      <div className="flex flex-col">
        {projects.map(project => (
          <Fade key={project.name} delay={0.14}>
            <article className="border-b border-border py-[2.2rem] first:border-t">
              <div className="mb-3 flex items-baseline justify-between gap-4">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir repositório ${project.name} em nova aba`}
                  className="group inline-flex items-center gap-1 text-[13px] text-foreground hover:text-muted-foreground"
                >
                  {project.name}
                  <ExternalLink className="h-3 w-3" />
                  <span className="ml-1 hidden text-[9px] tracking-[0.04em] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 min-[561px]:inline">
                    abrir repositório
                  </span>
                </a>
                <span className="whitespace-nowrap text-[10px] text-muted-foreground">
                  {project.date}
                </span>
              </div>

              <p className="mb-5 max-w-140 text-[11.5px] leading-[1.85] text-muted-foreground">
                {project.description}
              </p>

              <div>
                {project.tags.map(tag => (
                  <Tag
                    key={`${project.name}-${tag}`}
                    label={tag}
                    className="mr-[0.2rem] mb-[0.2rem]"
                  />
                ))}
              </div>
            </article>
          </Fade>
        ))}
      </div>
    </section>
  )
}
