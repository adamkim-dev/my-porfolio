import { notFound } from "next/navigation"
import { getDictionary, hasLocale } from "./dictionaries"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { DesignSystemSection } from "@/components/sections/design-system-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { FooterSection } from "@/components/sections/footer-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { QualitySection } from "@/components/sections/quality-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ChatAssistant } from "@/components/chat/ChatAssistant"
import { experiences } from "@/data/experiences"
import { projects } from "@/data/projects"
import { skillCategories } from "@/data/skills"
import { profile } from "@/data/profile"

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-screen-xl flex-col px-4 py-8 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <HeroSection t={dict.hero} profile={dict.profile} lang={lang} />
        <AboutSection t={dict.about} highlights={dict.profile.highlights} />
        <SkillsSection
          t={dict.skills}
          categories={skillCategories}
        />
        <ExperienceSection
          t={dict.experience}
          experiences={experiences}
        />
        <ProjectsSection t={dict.projects} lang={lang} />
        <DesignSystemSection t={dict.design_system} />
        <QualitySection t={dict.quality} />
        <ChatAssistant />
        <ContactSection t={dict.contact} profile={profile} />
        <FooterSection t={dict.footer} />
      </div>
    </main>
  )
}
