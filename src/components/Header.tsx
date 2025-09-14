"use client"
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { playwrite } from "../lib/fonts"
import Link from 'next/link'
import AuthModal from './AuthModal'
import { UserSessionType } from '@/lib/type'

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
   const [user, setUser] = useState<UserSessionType | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const res = await fetch(`/api/users/session?u=${user}`, {
        method: "GET",
        credentials: "include", // ensure cookies are sent
      });
      const data = await res.json();
      console.log("At Header page has Session response:", data);
      if (data.loggedIn) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    };

    checkSession();
  }, []);

  return (
    <header className='bg-[#A44A3F] flex flex-col md:flex-row gap-[1em] justify-between text-white p-[2em] text-xl items-center'>
      <Link href="/"><p className={`text-4xl ${playwrite.className} cursor-pointer`}>The art of Baking</p></Link>
      <div className='flex justify-between items-center gap-[1em]'>
        <Navbar />
        {user ? (
          <>
            <Link href="/users"><span className='cursor-pointer'>Welcome, {user.username}</span></Link>
            <button
              onClick={async () => {
                await fetch("/api/users/logout", { method: "POST" });
                setUser(null);
              }}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setShowLogin(true)} className='bg-white text-black p-[.4em] rounded-md w-[5em] cursor-pointer'>Login</button>
            <AuthModal open={showLogin} onClose={() => setShowLogin(false)} onLoginSuccess={(user) => setUser(user)}/>
          </>
        )
        }

      </div>
    </header>
  )
}
