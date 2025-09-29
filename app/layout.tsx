
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Best Cut Barber - Barbearia Premium em Porto Alegre',
  description: 'A melhor barbearia de Porto Alegre. Cortes masculinos modernos, barba profissional e estilo incomparável. Agende seu horário!',
  keywords: 'barbearia, corte masculino, barba, Porto Alegre, barbeiro profissional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
