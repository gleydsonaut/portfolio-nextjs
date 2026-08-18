import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Preloader } from '@/components/preloader'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Gleydson Rodrigues | Gestor de Automação & IA',
  description:
    'Portfólio de Gleydson Rodrigues, Gestor de Automação & IA especializado em n8n, APIs REST e agentes inteligentes para negócios digitais.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-white">
      <body className="font-sans antialiased text-slate-900">
        <Preloader />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
