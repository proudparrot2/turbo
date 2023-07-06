'use client';

import 'animate.css'
import '../styles/page.css'

import { Montserrat } from 'next/font/google'
import Script from 'next/script'

const montserrat = Montserrat({
  weight: "700",
  subsets: ["latin"]
})

import { useRouter } from 'next/navigation'

export default function Home() {

  addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      //router.push(`/${__uv$config.encodeURL()}`)
    }
  })

  if ('serviceWorker' in navigator) {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js', {scope: '/service'});
    }
  }
  const router = useRouter()
  return (
    <>
      <section className="animate__animated animate__fadeIn">
        <h1 className={`title ${montserrat.className}`}>Turbo</h1>
        <p>The next generation of web browsing</p>
        <input type="text" />
      </section>
    </>
  )
}
