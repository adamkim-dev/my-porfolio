import { experiences } from "@/data/experiences"
import { profile } from "@/data/profile"
import { projects } from "@/data/projects"
import { skillCategories } from "@/data/skills"

function formatExperience(experience: { company: string; role: string; date: string; location: string; description: string; technologies: string[] }) {
  return `- ${experience.company} (${experience.date}) — ${experience.role} in ${experience.location}. ${experience.description} Technologies: ${experience.technologies.join(", ")}.`
}

function formatProject(project: { title: string; summary: string; highlights: string[]; technologies: string[]; status: string }) {
  return `- ${project.title}: ${project.summary} Highlights: ${project.highlights.join("; ")} Technologies: ${project.technologies.join(", ")}. Status: ${project.status}.`
}

export function buildPortfolioKnowledge() {
  const skillText = skillCategories
    .map((category) => `${category.title}: ${category.items.map((item) => `${item.name} (${item.level})`).join(", ")}`)
    .join("\n")

  return [`Profile: ${profile.name} — ${profile.title} based in ${profile.location}.`,
    `Summary: ${profile.summary}`,
    `Highlights: ${profile.highlights.join("; ")}`,
    `Skills:\n${skillText}`,
    `Work Experience:\n${experiences.map(formatExperience).join("\n")}`,
    `Projects:\n${projects.map(formatProject).join("\n")}`,
  ].join("\n\n")
}

export function buildAiPrompt(question: string) {
  const knowledge = buildPortfolioKnowledge()

  return `You are a concise recruitment assistant. Answer the question using only the portfolio knowledge provided below. Do not invent facts or mention anything not contained in the knowledge.

Portfolio Knowledge:
${knowledge}

Question: ${question}

Answer the recruiter in a clear, professional tone. If the question cannot be answered from the portfolio data, say: "I don't have enough information in this portfolio to answer that question."`
}
