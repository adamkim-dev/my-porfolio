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

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10 sm:px-8 lg:px-12">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <DesignSystemSection />
        <QualitySection />
        <ChatAssistant />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  )
}
