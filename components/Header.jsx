import React from 'react'
import Link from 'next/link'

const navLink = [
  {
    path: '/',
    display: 'Home'
  },
  {
    path: '/design',
    display: 'Design'
  },
  {
    path: '/web',
    display: 'Web'
  }
]

const Header = () => {
  return (
        <header className='font-Roboto h-14 bg-black text-white flex items-center justify-between px-4 sm:px-8'>
            <div className='font-extrabold text-2xl'>Creative.Dev</div>
            <div className='flex gap-4 sm:gap-10 font-normal text-sm'>
                {
                    navLink.map((item, index) => (
                        <Link href={item.path} key={index}>{item.display}</Link>
                    ))
                }
            </div>
        </header>
  )
}

export default Header
