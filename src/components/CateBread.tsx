import React from 'react'
import { playfair2 } from "../lib/fonts"
import Link from 'next/link'

export default function CateBread() {
  const id = 3;
  return (
    <div className="m-[2em]">
      <h1
        className={`text-center text-5xl m-[1em] font-extrabold ${playfair2.className}`}>
        Bread
      </h1>

      <div className="flex flex-col lg:flex-row justify-between gap-[2em] p-4">
        {/* Left column (list of smaller cakes) */}
        <div className="flex flex-col gap-[2em] flex-1">
          {/* Single item */}
          {[
            { img: "cate-bread1.png", title: "Caramel Cake" },
            { img: "cate-bread2.png", title: "Fig Cake" },
            { img: "cate-bread3.png", title: "Lemon Cake" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-[1em]">
              <img src={item.img} alt={item.title} className="w-full sm:w-[30%]" />
              <div className="flex flex-col justify-between">
                <h2
                  className={`text-center sm:text-left text-2xl md:text-3xl font-extrabold ${playfair2.className}`}
                >
                  {item.title}
                </h2>
                <hr className="hidden lg:block border-t-2 border-[#D87C7A] my-4" />

                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-[0.5em]">
                    <img className="w-[25px]" src="/date.png" alt="date" />
                    <p className="text-sm md:text-base">20.08.2025</p>
                  </div>
                  <img className="w-[40px] md:w-[50px]" src="/heart.png" alt="like" />
                </div>
                <div className="flex flex-wrap items-center gap-2 text-white mt-2">
                  <img className="w-[25px]" src="/tag.png" alt="tag" />
                  {["Cake", "Strawberry", "Cheese"].map((tag, j) => (
                    <i
                      key={j}
                      className="bg-[#A44A3F] px-4 py-1 rounded-3xl text-sm md:text-base"
                    >
                      {tag}
                    </i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right column (big featured cake) */}
        <div className="flex-1">
          <Link href={`/recipes/${id}`}><img src="/cate-bread.png" alt="featured cake" className="w-full" /></Link>
          <div className="flex flex-col sm:flex-row gap-[1em] items-center justify-between">
            <Link href={`/recipes/${id}`}><h1 className={`text-2xl md:text-3xl font-extrabold m-4 ${playfair2.className}`}>Cinnamon roll</h1></Link>
            <button className="bg-[#D87C7A] px-6 py-2 text-white rounded-2xl">New!</button>
          </div>
          
          <hr className="hidden lg:block border-t-2 border-[#D87C7A] my-4" />

          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-[0.5em]">
              <img className="w-[25px]" src="/date.png" alt="date" />
              <p className="text-sm md:text-base">20.08.2025</p>
            </div>
            <img className="w-[40px] md:w-[50px]" src="/heart.png" alt="like" />
          </div>

          <div className="flex flex-wrap items-center gap-2 text-white mt-2">
            <img className="w-[25px]" src="/tag.png" alt="tag" />
            {["Cake", "Strawberry", "Cheese"].map((tag, i) => (
              <i
                key={i}
                className="bg-[#A44A3F] px-4 py-1 rounded-3xl text-sm md:text-base"
              >
                {tag}
              </i>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}
