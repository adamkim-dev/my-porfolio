import { NextResponse } from "next/server"
import { OpenAI } from "openai"
import { buildAiPrompt } from "@/lib/ai"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const question = String(body.question ?? "").trim()

    if (!question) {
      return NextResponse.json({ error: "Question is required." }, { status: 400 })
    }

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "OpenAI API key is not configured." }, { status: 500 })
    }

    const client = new OpenAI({ apiKey })
    const prompt = buildAiPrompt(question)

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
      max_output_tokens: 500,
    })

    const answer = response.output_text?.trim() || "I couldn't find an answer based on the portfolio data."
    return NextResponse.json({ answer })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
