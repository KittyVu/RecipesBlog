import React from 'react'
import { playfair2 } from "../lib/fonts"

export default function Search() {
  return (
    <div className="m-4 mt-[3em]">
      {/* Title */}
      <h1
        className={`text-center text-6xl font-extrabold ${playfair2.className}`}
      >
        Recipes
      </h1>

      {/* Search bar */}
      <div className="flex flex-col sm:flex-row justify-center items-center m-4 gap-4">
        <input
          className="border-4 border-[#A44A3F] w-full sm:w-[400px] p-2"
          type="text"
          placeholder="Type something here..."
        />
        <img
          className="w-[40px] sm:w-[50px] cursor-pointer"
          src="/search-icon.png"
          alt="search"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-[4em] m-4">
        <div className="flex flex-col items-center cursor-pointer">
          <img className="w-[140px] sm:w-[180px] m-4" src="/cake-cate1.png" alt="cakes" />
          <span className="text-[#A44A3F] text-xl sm:text-2xl font-bold">Cakes</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <img className="w-[140px] sm:w-[180px] m-4" src="/cake-cate2.png" alt="breads" />
          <span className="text-[#A44A3F] text-xl sm:text-2xl font-bold">Breads</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <img className="w-[140px] sm:w-[180px] m-4" src="/cake-cate3.png" alt="others" />
          <span className="text-[#A44A3F] text-xl sm:text-2xl font-bold">Others</span>
        </div>
      </div>
    </div>

  )
}
