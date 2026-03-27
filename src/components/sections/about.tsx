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
          Sou um técnico em informática e desenvolvedor em formação, com
          experiência prática na construção de softwares escaláveis e bem
          estruturados. Ao longo de 5 anos de estudo, desenvolvi APIs completas
          utilizando ferramentas como Spring Boot e Node.js, aplicando design
          patterns e boas práticas de desenvolvimento.
        </p>
      </Fade>

      <Fade delay={0.21}>
        <p className="mt-[1.1rem] max-w-150 text-[12px] leading-loose text-(--text)">
          Atualmente, mantenho uma rotina constante de estudos para aprimorar
          minhas habilidades, buscando sempre me atualizar com as últimas
          tendências e tecnologias do mercado. Estou buscando minha primeira
          oportunidade profissional, onde possa aplicar meus conhecimentos e
          contribuir para a perfomance do time, ao mesmo tempo em que continuo a
          aprender e evoluir como desenvolvedor.
        </p>
      </Fade>
    </section>
  )
}
