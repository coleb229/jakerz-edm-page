"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jakerz EDM',
  description: 'Jakerz is a DJ residing in the United States.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
