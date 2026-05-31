"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const prompts = [
    "Who is Kim Van Ha?",
    "What projects has he led?",
    "Tell me about the Changi Airport work.",
    "What testing experience does he have?",
]

type Message = {
    role: "user" | "assistant"
    text: string
}

export function ChatAssistant() {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <ChatAssistantInner />
        </QueryClientProvider>
    )
}

function ChatAssistantInner() {
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            text: "Ask me about Kim Van Ha's skills, experience, or featured projects.",
        },
    ])

    const mutation = useMutation({
        mutationFn: async (question: string) => {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question }),
            })
            if (!response.ok) {
                const error = await response.json()
                throw new Error(error.error || "Unable to get answer")
            }
            const data = await response.json()
            return data.answer as string
        },
        onSuccess(answer) {
            setMessages((current) => [...current, { role: "assistant", text: answer }])
        },
    })

    const submit = async () => {
        const trimmed = input.trim()
        if (!trimmed) return
        setMessages((current) => [...current, { role: "user", text: trimmed }])
        setInput("")
        mutation.mutate(trimmed)
    }

    return (
        <section className="mt-24" id="ai-assistant">
            <div className="rounded-[2rem] border border-border bg-card/85 p-8 shadow-sm">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">AI assistant</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                            Ask about me and previous projects.
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {prompts.map((prompt) => (
                            <Button key={prompt} variant="outline" size="sm" onClick={() => {
                                setInput(prompt)
                            }}>
                                {prompt}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
                    <div className="space-y-4">
                        <div className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-muted p-4">
                            <div className="space-y-4">
                                <AnimatePresence initial={false}>
                                    {messages.map((message, index) => (
                                        <motion.div
                                            key={`${message.role}-${index}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className={`rounded-3xl p-4 ${message.role === "assistant" ? "bg-background" : "bg-primary/10 text-foreground"}`}
                                        >
                                            <p className="text-xs uppercase tracking-[0.24em] text-secondary">{message.role}</p>
                                            <p className="mt-2 text-sm leading-7 text-foreground">{message.text}</p>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                            <input
                                className="rounded-3xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none ring-primary/20 transition focus:border-primary focus:ring-2"
                                placeholder="Ask a question about the portfolio"
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        event.preventDefault()
                                        submit()
                                    }
                                }}
                            />
                            <Button onClick={submit} disabled={mutation.isPending}>
                                {mutation.isPending ? "Thinking…" : "Send"}
                            </Button>
                        </div>
                        {mutation.isError ? (
                            <p className="rounded-3xl border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                                {(mutation.error as Error)?.message ?? "Unable to process your question."}
                            </p>
                        ) : null}
                    </div>
                    <div className="rounded-[1.75rem] border border-border/70 bg-muted p-6 text-sm leading-7 text-muted-foreground">
                        <div className="flex items-center gap-3 text-foreground">
                            <Sparkles className="h-5 w-5" />
                            <p className="font-semibold">Recruiter prompt suggestions</p>
                        </div>
                        <ul className="mt-4 space-y-3">
                            <li>Ask how I delivered the Changi Airport project.</li>
                            <li>Learn which frontend stacks I specialize in.</li>
                            <li>Check my testing and engineering quality practices.</li>
                            <li>Ask what makes my design system mindset different.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
