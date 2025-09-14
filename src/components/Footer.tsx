import React from 'react'
import Navbar from './Navbar'
import {playwrite, playfair} from "../lib/fonts"

export default function Footer() {
  return (
    <footer className='flex flex-col gap-[1.5em] bg-[#A44A3F] text-white p-[2em] text-center text-xl'>
      <p className={`text-3xl ${playwrite.className}`}>The art of Baking</p>
      <p className={playfair.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quam.</p>
      <Navbar />
      <p className={playfair.className}>Copyright @ 2025</p>
    </footer>
  )
}
