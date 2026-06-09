import { notFound } from "next/navigation"
import { getDictionary, hasLocale } from "./dictionaries"
import { NavBar } from "@/components/ui/nav-bar"
import { HeroSection } from "@/components/sections/hero-section"
import { ExpertiseSection } from "@/components/sections/expertise-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer-section"
import { ChatAssistant } from "@/components/chat/ChatAssistant"
import { experiences } from "@/data/experiences"
import { profile } from "@/data/profile"

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  const navItems = [
    { label: dict.nav.home, href: "#home" },
    { label: dict.nav.expertise, href: "#expertise" },
    { label: dict.nav.work, href: "#work" },
    { label: dict.nav.experience, href: "#experience" },
    { label: dict.nav.contact, href: "#contact" },
  ]

  return (
    <>
      <NavBar lang={lang} items={navItems} />
      <main className="bg-background text-foreground">
        <div className="mx-auto w-full max-w-screen-xl px-4 pb-8 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          <HeroSection t={dict.hero} profile={dict.profile} lang={lang} />
          <ExpertiseSection t={dict.expertise} />
          <ProjectsSection t={dict.projects} lang={lang} />
          <ExperienceSection t={dict.experience} experiences={experiences} />
          <ContactSection t={dict.contact} profile={profile} />
          <ChatAssistant />
          <FooterSection t={dict.footer} />
        </div>
      </main>
    </>
  )
}
