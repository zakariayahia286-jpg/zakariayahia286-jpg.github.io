import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Widdy Arfiansyah',
  description: 'Widdy Arfiansyah | Software Engineer Backend',
  generator: 'https://mywiddyarfian.social',
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
