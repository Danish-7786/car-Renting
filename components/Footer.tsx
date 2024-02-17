import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {footerLinks} from "../constants"
const Footer = () => {
  return (
    <footer >
      <div className="flex justify-center w-full xl:gap-32 gap-16 p-16">

      <div  className='flex flex-col gap-4'>
        <Image src="/logo.svg" alt="logo" width={118} height={18} className='mt-2 object-contain'/>
        <p className='text-gray-500'>Carhub 2023 <br /> All Rughts Reserved &copy; </p>

      </div>
      <div className="flex xl:gap-32 gap-16 flex-wrap">
      {footerLinks.map((Link) => (
        <div key={Link.title}
        className='flex flex-col gap-4 '>
          <h3 className='font-bold'>{Link.title}</h3>
          {Link.links.map((item) => (
            <a 
            key ={item.url}
            href = {item.url} 
            className='text-gray-500'>
              {item.title}
              </a>
          ))}
          </div>
      ))}
      </div>
      </div>
      <div className='flex self-end gap-16 px-16 xl:gap-32 p-10 flex-wrap justify-center'>
        <p className='text-gray-500'>@2023 Carhub . All Rights Reserved</p>
        <a className='text-gray-500' href="/">
          Privacy Policy
        </a>
    <a href="/" className='text-gray-500'>Terms of Use</a>
      </div>
    </footer>
  )
  }
export default Footer