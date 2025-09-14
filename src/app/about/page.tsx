import React from 'react'
import { playfair2, playwrite } from "../../lib/fonts"

export default function About() {
  return (
    <div className="mt-[2em] mb-[10em]">
      <h1
        className={`text-center text-4xl md:text-6xl font-extrabold p-4 ${playfair2.className}`}
      >
        About Me
      </h1>

      <p className="m-4 text-center max-w-3xl mx-auto text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sapiente
        quod debitis. Eos molestiae odit excepturi possimus, aliquam expedita
        aperiam aliquid sit, libero id consequatur. Exercitationem maiores fugit
        corporis magnam.
      </p>

      <div className="flex flex-col mt-8">
        {[
          {
            img: "/cate-cake3.png",
            bg: "bg-[#D87C7A]",
            border: "border-[#D87C7A]",
            reverse: false,
          },
          {
            img: "/cate-cake2.png",
            bg: "bg-[#A44A3F]",
            border: "border-[#A44A3F]",
            reverse: true,
          },
          {
            img: "/cate-cake1.png",
            bg: "bg-[#6B2B2B]",
            border: "border-[#6B2B2B]",
            reverse: false,
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row ${item.reverse ? "md:flex-row-reverse" : ""
              } gap-[2em] border ${item.border} ${item.bg} text-white`}
          >
            <img
              src={item.img}
              alt="about section"
              className="w-full md:w-1/5 object-cover"
            />
            <div className="flex flex-col justify-center p-6 md:p-10">
              <h2
                className={`text-2xl md:text-3xl font-bold mb-4 ${playwrite.className}`}
              >
                Xuyen Vu – The Innovator
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sequi
                eaque dolorum doloribus? Veniam possimus nihil officia facilis
                corrupti totam. Consectetur alias soluta totam labore illum similique
                et ullam ipsa!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
