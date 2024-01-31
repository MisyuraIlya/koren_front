"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { CacheProvider, ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import rtlPlugin from "stylis-plugin-rtl"
import { prefixer } from "stylis"
import createCache from "@emotion/cache"
import theme from "@/styles/mui"
import { AuthProvider } from '@/modules/auth/provider/AuthProvider'

// const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  })

  return (
    <html lang="he" dir='rtl'>
      <head></head>
      <body>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <CssBaseline />
              {children}
            </AuthProvider>
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
