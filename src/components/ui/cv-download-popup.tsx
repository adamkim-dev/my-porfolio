"use client"

import { AnimatePresence, motion } from "framer-motion"
import { FileText, FileDown, X, Download } from "lucide-react"
import { useEffect, useRef } from "react"

const CV_FILES = [
    {
        label: "PDF",
        ext: "pdf",
        mime: "application/pdf",
        icon: FileText,
        href: "/cv/FPT_CV_Dev_Kim_Van_Ha.pdf",
    },
    {
        label: "DOCX",
        ext: "docx",
        mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        icon: FileDown,
        href: "/cv/FPT_CV_Dev_Kim_Van_Ha.docx",
    },
] as const

type Props = {
    isOpen: boolean
    onClose: () => void
    /** Positioning anchor — "corner" = bottom-right floating, "inline" = centered above trigger */
    variant?: "corner" | "inline"
}

export function CVDownloadPopup({ isOpen, onClose, variant = "inline" }: Props) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!isOpen) return
        function handler(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) onClose()
        }
        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [isOpen, onClose])

    const positionClass =
        variant === "corner"
            ? "absolute bottom-full right-0 mb-3"
            : "absolute bottom-full left-1/2 -translate-x-1/2 mb-3"

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.92, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 8 }}
                    transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
                    className={`${positionClass} z-50 w-52 overflow-hidden rounded-2xl border border-border bg-card/95 shadow-2xl shadow-black/20 backdrop-blur-md`}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
                        <div className="flex items-center gap-2">
                            <Download className="h-3.5 w-3.5 text-primary" />
                            <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-foreground">
                                Download CV
                            </span>
                        </div>
                        <button
                            onClick={onClose}
                            className="flex h-5 w-5 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
                            aria-label="Close"
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </div>

                    {/* Format options */}
                    <div className="p-2">
                        {CV_FILES.map(({ label, ext, icon: Icon, href }) => (
                            <a
                                key={ext}
                                href={href}
                                download={`Kim_Van_Ha_CV.${ext}`}
                                onClick={onClose}
                                className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-muted group no-underline"
                            >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition group-hover:bg-primary/20">
                                    <Icon className="h-4 w-4 text-primary" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-mono text-xs font-semibold text-foreground">
                                        {label} Format
                                    </span>
                                    <span className="font-mono text-[10px] text-muted-foreground">
                                        .{ext} file
                                    </span>
                                </div>
                                <Download className="ml-auto h-3.5 w-3.5 text-muted-foreground opacity-0 transition group-hover:opacity-100" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
