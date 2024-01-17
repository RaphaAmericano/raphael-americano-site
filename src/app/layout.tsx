import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainFooter from './_components/MainFooter'
import MainNavbar from './_components/MainNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raphael Americano',
  description: 'Software Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <MainNavbar />
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </main>
          <MainFooter />
      </body>
    </html>
  )
}
