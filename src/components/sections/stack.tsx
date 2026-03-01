import { Fade } from '@/components/shared/fade'
import { SectionLabel } from '@/components/shared/section-label'
import { Tag } from '@/components/shared/tag'
import { stack } from '@/data/stack'

export function StackSection() {
  return (
    <section className="pt-28" id="stack">
      <Fade delay={0.07}>
        <SectionLabel label="conhecimentos" />
      </Fade>

      <Fade delay={0.14}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              {stack.map(category => (
                <tr
                  key={category.label}
                  className="border-b border-border first:border-t"
                >
                  <th className="w-46.25 py-4 pr-5 text-left align-top text-[10px] tracking-[0.07em] text-muted-foreground max-[560px]:w-27.5">
                    {category.label}
                  </th>
                  <td className="py-4 align-top">
                    {category.items.map(item => (
                      <Tag
                        key={`${category.label}-${item.name}`}
                        label={item.name}
                        className="mr-[0.2rem] mb-[0.2rem]"
                      />
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fade>
    </section>
  )
}
