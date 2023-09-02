import './globals.css'
import type { Metadata } from 'next'
import { Inter, Quicksand } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', })
const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand', })

export const metadata: Metadata = {
  title: 'Nomadem | Reservas Galapagos',
  description: 'Tu operadora de turismo en la nube',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${inter.variable} ${quicksand.variable} `}>{children}</body>
    </html>
  )
}
