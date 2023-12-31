import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import AdminNavbar from '@/components/Admin/AdminNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function EmptyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  
     
      <body className={inter.className}>
     <AdminNavbar/>
        {children}
      
        </body>
     
    </html>
  )
}
