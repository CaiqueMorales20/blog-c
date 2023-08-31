// Imports
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'

// Styles
import './globals.css'

// Fonts
const inter = Inter({ subsets: ['latin'] })

// SEO
export const metadata: Metadata = {
  title: 'Dev Trick - Dicas para Melhorar seu CSS, React e Next ',
  robots: 'index, follow',
  description:
    'Aprenda dicas valiosas para aprimorar suas habilidades em CSS, React e Next.js. Este blog oferece insights e orientações para melhorar sua prática de desenvolvimento web.',
  authors: [{ name: 'Caique Morales', url: 'https://caiquemorales.com/' }],
  publisher: 'Vercel',
  keywords:
    'dicas, programaçãp, css, react, next, javascript, nextjs, reactjs, nextjs,',
  alternates: {
    canonical: 'https://blog-c-five.vercel.app/',
  },
}
// Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="">{children}</div>
      </body>
    </html>
  )
}
