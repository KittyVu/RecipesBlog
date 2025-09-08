import React from 'react'
import Link from 'next/link'
import Category from '@/components/Category'

export default function Detail({ params }: { params: { id: string } }) {
  return (
    <div className='m-[2em]'>
      {/* big photo */}
      <div className='flex gap-[.5em] justify-center items-center text-[#A44A3F] text-xl '>
        <img className='w-[40px]' src="/back-icon.png" alt="back" />
        <Link href="/"><p>Back to main page</p></Link>
      </div>
      <div className='flex flex-col items-center'>
        <img className='w-full lg:w-[45%] p-4' src="/cate-cake.png" alt="" />
        <h1 className={`font-extrabold text-4xl m-4 {playfair2.className}`}>Strawberry Cheesecake</h1>
      </div>

      {/* date and tag */}
      <div className='flex flex-col p-8 w-full lg:w-[63%] mx-auto'>
      <div className="flex justify-between items-center m-2">
        <div className="flex items-center gap-[0.5em]">
          <img className="w-[25px]" src="/date.png" alt="date" />
          <p className="text-sm md:text-base">20.08.2025</p>
        </div>
        <img className="w-[40px] md:w-[50px]" src="/heart.png" alt="like" />
      </div>
      <div className="flex flex-wrap items-center gap-2 text-white m-2">
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

      {/* introduction */}  
      <p className='flex flex-col p-8 w-full lg:w-[63%] mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi a nisi nulla hic aspernatur. Aliquid magni dolorum, maiores modi maxime nisi laboriosam quibusdam accusantium? Itaque id fuga explicabo qui, inventore minima aliquam ex asperiores nostrum, ab unde! Dicta exercitationem fuga eos atque quibusdam deleniti, accusantium eius inventore veritatis beatae!</p>

      {/* ingredients */}
      <div className='flex flex-col p-8 w-full lg:w-[63%] mx-auto'>
        <h2 className='text-2xl font-bold'>Ingredients</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nemo, consequatur rerum exercitationem porro quam commodi et aut ullam iste laudantium facilis. Excepturi placeat minima iure quia ex fugiat voluptate?</p>
      </div>

      {/* intructions */}
      <div className='flex flex-col p-8 w-full lg:w-[63%] mx-auto'>
        <h2 className='text-2xl font-bold'>Intructions</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vitae veritatis impedit voluptate. Quas, dignissimos sed voluptates rem saepe molestias laudantium fugit iure maiores, quos suscipit facere inventore, dolorem ipsa.</p>
      </div>

      {/* Tips */}
      <div className='flex flex-col items-center bg-[#D87C7A] text-white p-8 w-full lg:w-[60%] mx-auto'>
        <h2 className='text-2xl font-bold text-center m-4'>Baking Tips</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati ullam similique architecto iusto at sequi, voluptates accusantium voluptatem dolor et.</p>
      </div>

      {/* the same category */}
      <Category />

       <div className='flex gap-[.5em] justify-center items-center text-[#A44A3F] text-xl m-8 '>
        <img className='w-[40px]' src="/back-icon.png" alt="back" />
        <Link href="/"><p>Back to main page</p></Link>
      </div>
    </div>
  )
}
