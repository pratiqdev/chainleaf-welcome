import './globals.css'
import truth from '@/lib/truth'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: truth.meta.title,
  description: truth.meta.description
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " relative max-w-50"}>{children}</body>
    </html>
  )
}
