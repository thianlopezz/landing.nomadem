import type { Metadata } from 'next'
import RootLayout from '../layout'

export const metadata: Metadata = {
  title: 'Nomadem | Política de privacidad',
  description: 'Política de privacidad',
}

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout>
      {children}
    </RootLayout>
  )
}
