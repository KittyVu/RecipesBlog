import React from 'react'
import { playfair2 } from "../../lib/fonts"

export default function Contact() {
  return (
    <div className='mt-[2em] mb-[10em]'>
      <h1 className={`text-center text-5xl font-extrabold pb-[1em] ${playfair2.className}`}>Contact</h1>
      <p className='text-center text-2xl'>Email: as_through@yahoo.com</p>
      <div className='mt-[2em] mb-[4em] flex justify-center items-center gap-[1em]'>
        <img className='w-[50px]' src="/facebook.png" alt="facebook" />
        <img className='w-[50px]' src="/twitter.png" alt="twitter" />
        <img className='w-[50px]' src="/telegram.png" alt="telegram" />
      </div>
      <form className="m-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl lg:mx-auto">
        {/* First Name */}
        <div className="flex flex-col">
          <label htmlFor="fname" className="font-semibold mb-2">First Name</label>
          <input
            id="fname"
            name="fname"
            type="text"
            placeholder="Type your first name"
            className="border-b-2 border-[#A44A3F] focus:outline-none focus:border-[#82372d] p-2"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label htmlFor="lname" className="font-semibold mb-2">Last Name</label>
          <input
            id="lname"
            name="lname"
            type="text"
            placeholder="Type your last name"
            className="border-b-2 border-[#A44A3F] focus:outline-none focus:border-[#82372d] p-2"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold mb-2">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Type your email"
            className="border-b-2 border-[#A44A3F] focus:outline-none focus:border-[#82372d] p-2"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="font-semibold mb-2">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Type your phone"
            className="border-b-2 border-[#A44A3F] focus:outline-none focus:border-[#82372d] p-2"
          />
        </div>

        {/* Message (full width) */}
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="message" className="font-semibold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Type something here..."
            className="border-b-2 border-[#A44A3F] focus:outline-none focus:border-[#82372d] p-2"
          ></textarea>
        </div>

        {/* Button (centered) */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button type="submit" className="bg-[#A44A3F] hover:bg-[#82372d] transition text-white px-8 py-3 rounded-3xl font-semibold shadow-lg cursor-pointer">
            Send
          </button>
        </div>
      </form>

    </div>
  )
}
