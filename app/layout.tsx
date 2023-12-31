'use client';

import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../styles/root.css'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

import React, { useState, useEffect } from 'react';


export default function RootLayout({ children }: { children: React.ReactNode}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>
        {mounted ? children : null}
        <Script src="/uv/uv.bundle.js"></Script>
        <Script src="/uv/uv.config.js"></Script>
      </body>
    </html>
  )
}