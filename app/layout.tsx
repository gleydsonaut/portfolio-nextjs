import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Preloader } from '@/components/preloader'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Gleydson Rodrigues | Analista Pleno de Automação e IA',
  description:
    'Portfólio de Gleydson Rodrigues, Analista Pleno de Automação e IA. Atuação com n8n, WhatsApp API, agentes de IA, APIs REST, HubSpot, Pipefy, Pipedrive, Kommo e automação de processos.',
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
