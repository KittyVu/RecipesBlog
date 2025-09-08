import React from 'react'
import { playfair2, playwrite } from "../lib/fonts"
import Search from '@/components/Search'

export default function HomePage() {
  return (
    <>
      {/* Section 1: image + text */}
      <div className="flex flex-col md:flex-row">
        <img
          src="/cake1.png"
          alt="cake"
          className="w-full md:w-1/2 h-auto cursor-pointer"
        />
        <div className="flex flex-col justify-center items-center p-6 md:p-8 text-lg md:text-2xl w-full gap-4 text-center md:text-left">
          <p className={playwrite.className}>The art of Baking</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, dolorum.</p>
        </div>
      </div>

      {/* Section 2: overlay card on image */}
      <div className="relative">
        <img
          className="cursor-pointer w-full h-auto"
          src="/cake2.png"
          alt="cake"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 w-[90%] md:w-1/2 text-center shadow-lg rounded-lg">
            <h2 className={`${playfair2.className} text-xl md:text-2xl font-extrabold`}>
              Your favourite Notes
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam modi
              repellendus corporis quas tempora pariatur?
            </p>
            <button className="bg-[#A44A3F] hover:bg-[#82372d] transition text-white px-6 py-3 font-extrabold rounded-xl mt-6 cursor-pointer">
              Create your account
            </button>
          </div>
        </div>
      </div>
      <Search />
    </>
  )
}
