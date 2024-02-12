import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Poppins } from 'next/font/google'
const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
})

export const Navbar = () => {
  return (
    <div className={`h-20  flex align-middle  justify-around w-full items-center p-4 ${poppins.className}`} >
      <h1 className='text-2xl font-serif text-white font-bold'>Leet Rank</h1>
      <div className='flex justify-end'>
      <Link href="/login" className='font-semibold text-md text-white hover:text-gray-400 transition-all duration-500 ease-in-out'>Login</Link>
      <Link href="/Sign Up" className='font-semibold text-md ml-4 text-white hover:text-gray-400 transition-all duration-500 ease-in-out'>Sign Up</Link>
      </div>
    </div>

  )
}
