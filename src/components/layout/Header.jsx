"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import { Menu } from 'lucide-react';

export default function Header () {
    const[menu, setMenu]= useState(false);
  return (
    <div className='relative py-3 border-b-2 border-orange-500'>
        <div className='container mx-auto px-4 md:px-6 lg:px-8 xl:px-0 flex flex-row items-center justify-between gap-4'>
            <Image src="/images/Hlogo.png" alt="logo" width={250} height={120} className='hidden md:block w-[180px] lg:w-[210px] xl:w-[250px] h-auto shrink-0'/>
            <Image src="/images/Hlogo.png" alt="logo" width={120} height={60} className='block md:hidden w-[120px] h-auto shrink-0'/>
            <div className='hidden lg:flex flex-row items-center justify-between gap-3 xl:gap-10 text-sm xl:text-base'>
                <Link href="/" className='text-neutral-600 px-2 py-1 rounded hover:text-orange-500 hover:bg-orange-100'>Home</Link>
                <Link href="/aboutUs" className='text-neutral-600 px-2 py-1 rounded hover:text-orange-500 hover:bg-orange-100'>About Us</Link>
                <Link href="/services" className='text-neutral-600 px-2 py-1 rounded hover:text-orange-500 hover:bg-orange-100'>Services</Link>
                <Link href="/impact" className='text-neutral-600 px-2 py-1 rounded hover:text-orange-500 hover:bg-orange-100'>Our Impact</Link>
                <Link href="/resources" className='text-neutral-600 px-2 py-1 rounded hover:text-orange-500 hover:bg-orange-100'>Resources</Link>
            </div>
            <button className='hidden lg:block px-3 xl:px-4 py-2 bg-orange-400 hover:bg-orange-500 rounded text-white text-sm xl:text-base shrink-0'>
                Join Us
            </button>
            <button className='block lg:hidden p-1' onClick={()=>setMenu(!menu)} aria-label="Toggle menu">
                <Menu color="#ed832c" size={25}/>
            </button>
            {menu&&(
                <div className='absolute z-50 top-full right-4 mt-3 w-48 max-h-fit border rounded bg-white flex flex-col items-start overflow-hidden'>
                    <Link href="/" className='text-neutral-500 px-3 py-1 bg-gray-200 w-full'>Home</Link>
                    <Link href="/aboutUs" className='text-neutral-500 px-3 py-1'>About Us</Link>
                    <Link href="/services" className='text-neutral-500 px-3 py-1 bg-gray-200 w-full'>Services</Link>
                    <Link href="/impact" className='text-neutral-500 px-3 py-1'>Our Impact</Link>
                    <Link href="/resources" className='text-neutral-500 px-3 py-1 bg-gray-200 w-full'>Resources</Link>
                    <button className='px-3 py-2 w-full border rounded border-orange-400 bg-orange-400 hover:bg-white text-white hover:text-orange-500'>
                        Join Us
                    </button>
                </div>
            )}
        </div>
    </div>
  )
}
