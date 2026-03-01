import { Fade } from '@/components/shared/fade'
import { SectionLabel } from '@/components/shared/section-label'

export function AboutSection() {
  return (
    <section className="pt-28" id="sobre">
      <Fade delay={0.07}>
        <SectionLabel label="sobre" />
      </Fade>

      <Fade delay={0.14}>
        <p className="max-w-150 text-[12px] leading-loose text-(--text)">
          Sou um desenvolvedor web com foco em backend. Possuo experiência
          prática na construção de APIs RESTful utilizando Java, trabalhando com
          modelagem de dados, integração com banco de dados e organização de
          camadas da aplicação para garantir clareza, manutenção e
          escalabilidade.
        </p>
      </Fade>

      <Fade delay={0.21}>
        <p className="mt-[1.1rem] max-w-150 text-[12px] leading-loose text-(--text)">
          Também tenho experiência no desenvolvimento de aplicações utilizando
          TypeScript e Node.js, além de familiaridade com frameworks modernos.
          Participo ativamente da estruturação de projetos desde o levantamento
          de requisitos até a implementação das funcionalidades, mantendo
          atenção à qualidade do código, versionamento e documentação técnica.
        </p>
      </Fade>
    </section>
  )
}
