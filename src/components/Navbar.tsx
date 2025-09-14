"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import {playfair} from "../lib/fonts"

export default function Navbar() {
    const pathname = usePathname();
  return (
    <nav>
        <ul className={`flex justify-center items-center gap-[1.5em] font-bold cursor-pointer ${playfair.className}`}>
            <li><Link href="/" className={pathname==="/" ? "text-blue-300 font-bold" : "text-white"}>Home</Link></li>
            <li><Link href="/recipes" className={pathname==="/recipes" ? "text-blue-300 font-bold" : "text-white"}>Recipes</Link></li>
            <li><Link href="/about" className={pathname==="/about" ? "text-blue-300 font-bold" : "text-white"}>About</Link></li>
            <li><Link href="/contact" className={pathname==="/contact" ? "text-blue-300 font-bold" : "text-white"}>Contact</Link></li>
        </ul>
    </nav>
  )
}
