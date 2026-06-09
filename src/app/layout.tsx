import type { Metadata } from "next"
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google"
import { Providers } from "@/components/providers"
import "./globals.css"

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Kim Van Ha — Senior Fullstack Developer",
  description:
    "Personal portfolio for Kim Van Ha showcasing React, Next.js, design systems, QA, and AI assistant features.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${notoSansMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
