'use client';

import '../styles/styles.css'

import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <section>
      <h1>Turbo</h1>
      <p>The next generation of web browsing</p>
      <input type="text" />
    </section>
  )
}
