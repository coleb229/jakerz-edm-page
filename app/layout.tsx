import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jakerz EDM',
  description: 'Jakerz is a DJ residing in the United States.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)
  const user = session?.user
return (
    <html lang="en">
      <Navbar user={user} />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
