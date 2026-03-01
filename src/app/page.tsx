import { AboutSection } from '@/components/sections/about'
import { ContactSection } from '@/components/sections/contact'
import { HeroSection } from '@/components/sections/hero'
import { ProjectsSection } from '@/components/sections/projects'
import { StackSection } from '@/components/sections/stack'

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-175 px-8 max-[560px]:px-[1.4rem]">
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
