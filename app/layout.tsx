import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Miller Acencio SG-SST | Especialista en Seguridad y Salud en el Trabajo',
  description: 'Psicólogo especialista en SG-SST con amplia experiencia en INPEC, docencia y consultoría. Cursos online certificados en seguridad y salud ocupacional.',
  keywords: 'psicólogo, SG-SST, seguridad laboral, salud ocupacional, INPEC, cursos online, consultoría',
  authors: [{ name: 'Miller Acencio SG-SST' }],
  creator: 'Miller Acencio SG-SST',
  publisher: 'Miller Acencio SG-SST',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://milleracencio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Miller Acencio SG-SST | Especialista en Seguridad y Salud en el Trabajo',
    description: 'Psicólogo especialista en SG-SST con amplia experiencia en INPEC, docencia y consultoría.',
    url: 'https://milleracencio.com',
    siteName: 'Miller Acencio SG-SST',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Miller Acencio SG-SST',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miller Acencio SG-SST | Especialista en Seguridad y Salud en el Trabajo',
    description: 'Psicólogo especialista en SG-SST con amplia experiencia en INPEC, docencia y consultoría.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
} 