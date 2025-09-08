import React from 'react'
import Link from 'next/link'

export default function UserNavBar() {
    return (
        <div className='w-[30%] p-[1em]'>
            <Link href="/users"><img className='w-[100px] h-[100px] rounded-[50%] object-cover' src="/vinhhalong.jpeg" alt="avatar" /></Link>
            <Link href="/users"><p>Username</p></Link>
            <ul>
                <li><Link href="/users/members">Members</Link></li>
                <li><Link href="/users/recipes">My Recipes</Link></li>
                <li><Link href="/users/messages">Contact's messages</Link></li>
                <li><Link href="/users/favourites">Favourite</Link></li>
            </ul>
        </div>
    )
}
