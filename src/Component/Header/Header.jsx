"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { array } from './array'
const Header = () => {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <>
<div className="mx-auto fixed top-0 w-full z-[1000]">
  <div
 
  className="shadow-lg bg-[#0d48a1d8] ">
  <nav
  className='flex items-center py-[5px] justify-between w-[90%] m-auto '>
          <Link href="/">
            <Image 
              src={require("../../Images/me.jpeg")} 
              className='w-[70px] border-[3px] border-[--main-color] transition-all hover:scale-[1.1] h-[70px] rounded-full' 
              alt="Logo" 
            />
          </Link>
          <div 
            id='menu' 
            onClick={() => setOpen(!open)} 
            className='relative flex flex-col gap-1 cursor-pointer lg:hidden group'  
          >
            <span 
              className={`w-[40px] bg-[--main-color] h-[4px] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}
            ></span>
            <span 
              className={`w-[20px] group-hover:w-[40px] bg-[--main-color] h-[3px] transition-all duration-300 ${open ? 'opacity-0' : ''}`}
            ></span>
            <span 
              className={`w-[40px] bg-[--main-color] h-[4px] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}
            ></span>
          </div>

          <ul 
            className={`lg:flex lg:flex-row lg:gap-[20px]  items-center bg-white lg:bg-transparent shadow-lg lg:shadow-none rounded-md ${open ? '  flex flex-col gap-3 mt-3 absolute after:content-[""] after:w-[30px] after:h-[30px] after:bg-white after:absolute after:top-[-14px] after:right-3 after:rotate-[45deg] top-[76px] right-[30px] w-[60%] border border-gray-200 p-4' : 'hidden'} lg:mt-0`}
          >
            {array.map((item, index) => (
              <li key={index} className='relative w-full text-white'>
                <Link 
                  className={`relative flex gap-2 items-center text-[20px] hover:after:w-full font-bold w-full  py-2 capitalize rounded after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[5px] after:rounded-lg ${open?'w-[50%] text-[--main-color] items-start ':'w-full'} after:bg-[--main-color] after:transition-all after:duration-300 ${activeIndex === index ? 'after:w-full' : ''}`} 
                  href={item.href}
                  onClick={() => handleClick(index)}
                >
                  {item.icon} {item.content}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
  </div>

      </div>
    </>
  )
}

export default Header