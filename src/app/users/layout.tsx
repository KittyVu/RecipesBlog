import UserNavBar from '@/components/UserNavBar'
import React from 'react'

export default function UserLayout({children}:{children: React.ReactNode}) {
  return (
    <div className='flex items-center gap-[2em]'>
        <UserNavBar />
        {children}
    </div>    
  )
}
