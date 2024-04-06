import { Outfit } from 'next/font/google'
import './globals.css'

// components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// theme provider
import { ThemeProvider } from '@/components/ThemeProvider'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Teerakan Otklan | Portfolio',
  description:
    'This website is created to display related works by Teerakarn Otklan.',
  authors: [{ name: 'Teerakan', url: 'https://teerakanotklan.github.io' }],
  keywords: ['Teerakan', 'Portfolio'],
  creator: 'Teerakan',
  publisher: 'Teerakan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
