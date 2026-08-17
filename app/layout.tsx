import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: "Zakaria Alkhani | Portfolio",
  description: "Information Systems & E-Business Management student showcasing enterprise software and full-stack development projects.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
