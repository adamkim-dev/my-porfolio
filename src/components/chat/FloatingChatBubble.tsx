"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query"
import { Sparkles, X, Send } from "lucide-react"

const QUICK_PROMPTS = [
    "Who is Kim Van Ha?",
    "What projects has he led?",
    "Tell me about the Changi Airport work.",
    "What testing experience does he have?",
]

type Message = { role: "user" | "assistant"; text: string }

export function FloatingChatBubble() {
    const [queryClient] = useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            <FloatingChatBubbleInner />
        </QueryClientProvider>
    )
}

function FloatingChatBubbleInner() {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", text: "Ask me about Kim Van Ha's skills, experience, or featured projects." },
    ])
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const mutation = useMutation({
        mutationFn: async (question: string) => {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question }),
            })
            if (!res.ok) {
                const err = await res.json()
                throw new Error(err.error || "Unable to get answer")
            }
            const data = await res.json()
            return data.answer as string
        },
        onSuccess(answer) {
            setMessages((prev) => [...prev, { role: "assistant", text: answer }])
        },
    })

    const submit = () => {
        const trimmed = input.trim()
        if (!trimmed) return
        setMessages((prev) => [...prev, { role: "user", text: trimmed }])
        setInput("")
        mutation.mutate(trimmed)
    }

    useEffect(() => {
        if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages, isOpen])

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Chat popup */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.88, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.88, y: 12 }}
                        transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                        className="w-[340px] overflow-hidden rounded-[1.5rem] border border-border bg-card/95 shadow-2xl shadow-black/20 backdrop-blur-md sm:w-[400px]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-border/50 px-5 py-4">
                            <div className="flex items-center gap-2.5">
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15">
                                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">
                                        AI Assistant
                                    </p>
                                    <p className="text-[11px] text-muted-foreground">Ask about Kim Van Ha</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
                                aria-label="Close chat"
                            >
                                <X className="h-3.5 w-3.5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="h-[260px] space-y-2.5 overflow-y-auto p-3">
                            <AnimatePresence initial={false}>
                                {messages.map((msg, i) => (
                                    <motion.div
                                        key={`${msg.role}-${i}`}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                                            msg.role === "assistant"
                                                ? "bg-muted text-foreground"
                                                : "ml-6 bg-primary/10 text-foreground"
                                        }`}
                                    >
                                        {msg.text}
                                    </motion.div>
                                ))}
                                {mutation.isPending && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex gap-1 rounded-2xl bg-muted px-4 py-3"
                                    >
                                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/60 [animation-delay:0ms]" />
                                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/60 [animation-delay:150ms]" />
                                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/60 [animation-delay:300ms]" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick prompts */}
                        <div className="flex flex-wrap gap-1.5 px-3 pb-2">
                            {QUICK_PROMPTS.map((p) => (
                                <button
                                    key={p}
                                    onClick={() => setInput(p)}
                                    className="rounded-full border border-border/60 bg-muted/50 px-2.5 py-1 text-[11px] text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                                >
                                    {p}
                                </button>
                            ))}
                        </div>

                        {/* Input row */}
                        <div className="flex gap-2 border-t border-border/40 px-3 pb-3 pt-2">
                            <input
                                className="flex-1 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-foreground outline-none ring-primary/20 transition focus:border-primary focus:ring-2"
                                placeholder="Ask a question…"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault()
                                        submit()
                                    }
                                }}
                            />
                            <button
                                onClick={submit}
                                disabled={mutation.isPending || !input.trim()}
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:opacity-90 disabled:opacity-40"
                                aria-label="Send"
                            >
                                <Send className="h-4 w-4" />
                            </button>
                        </div>

                        {mutation.isError && (
                            <p className="mx-3 mb-3 rounded-xl border border-destructive/40 bg-destructive/10 px-3 py-2 text-[11px] text-destructive">
                                {(mutation.error as Error)?.message ?? "Unable to process your question."}
                            </p>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating trigger button */}
            <motion.button
                onClick={() => setIsOpen((v) => !v)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-shadow hover:shadow-xl hover:shadow-primary/40"
                aria-label="Open AI assistant"
            >
                {/* Animated pulse rings when closed */}
                {!isOpen && (
                    <>
                        <span
                            className="absolute inset-0 rounded-full bg-primary opacity-20 animate-ping"
                            style={{ animationDuration: "2s" }}
                        />
                        <span className="absolute -inset-1 rounded-full border border-primary/25 animate-pulse" />
                    </>
                )}

                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.span
                            key="x"
                            initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                            transition={{ duration: 0.18 }}
                        >
                            <X className="h-6 w-6" />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="sparkles"
                            initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                            transition={{ duration: 0.18 }}
                        >
                            <Sparkles className="h-6 w-6" />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    )
}
