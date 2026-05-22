import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Untitled UI — Banking for digital creators",
  description: "Designed by creators, for creators. Banking and finance tools for digital businesses.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
