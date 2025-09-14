"use client"
import React from 'react'
import { useState } from 'react';

export default function Profile() {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className='border-2 border-blue-600 p-[1em] m-[1em]'>
      <h1>This is profile page</h1>
      <form action="">
          <input
            type="email"
            placeholder="Type your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 mb-3 rounded border-[#D87C7A] text-[#D87C7A]"
          />
          <input
            type="text"
            placeholder="Type your name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 mb-3 rounded border-[#D87C7A] text-[#D87C7A]"
          />
          <input
            type="tel"
            placeholder="Type your phone here"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-2 mb-3 rounded border-[#D87C7A] text-[#D87C7A]"
          />

        {/* Password */}
        <input
          type="password"
          placeholder="Type your password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-3 rounded border-[#D87C7A] text-[#D87C7A]"
        />

        {/* Submit button */}
        <button className="bg-[#D87C7A] w-full text-white py-2 rounded-xl cursor-pointer">
          Change
        </button>
      </form>
    </div>
  )
}
