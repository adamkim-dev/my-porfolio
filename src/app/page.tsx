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
    <main className="relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.16),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_35%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col gap-16 px-6 py-10 sm:px-8 lg:px-12">
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
