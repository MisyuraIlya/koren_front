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
import { ModalProvider } from '@/modules/modal/provider/ModalProvider'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
// const inter = Inter({ subsets: ['latin'] })
import 'moment/locale/he';
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
          <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale='he'>
              <ModalProvider>
                <AuthProvider>
                  <CssBaseline />
                  {children}
                </AuthProvider>
              </ModalProvider>
            </LocalizationProvider>
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
