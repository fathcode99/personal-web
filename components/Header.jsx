import React from 'react'
import Link from 'next/link'

const navLink = [
  {
    path: '/',
    display: 'Home'
  },
  {
    path: '/design',
    display: 'Design Logo'
  },
  {
    path: '/web',
    display: 'Web'
  },
  {
    path: '/product',
    display: 'Product'
  }
]

const Header = () => {
  return (
        <header className='font-Roboto h-14 bg-black text-white flex items-center justify-between md:px-16 sm:px-8'>
            <div className='font-extrabold text-2xl'>Creative.Dev</div>
            <div className='flex md:gap-20 sm:gap-10 font-normal text-sm'>
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
