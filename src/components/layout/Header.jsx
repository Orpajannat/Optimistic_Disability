// "use client"
// import Image from 'next/image'
// import Link from 'next/link'
// import React, {useState} from 'react'
// import { Menu } from 'lucide-react';

// export default function Header () {
//     const[menu, setMenu]= useState(false);
//   return (
//     <div className='relative py-3 border-b-2 border-orange-500'>
//         <div className='container mx-auto px-4 md:px-6 lg:px-8 xl:px-2 flex flex-row items-center justify-between gap-4'>
//             <Image src="/images/Hlogo.png" alt="logo" width={250} height={120} className='hidden md:block w-[180px] lg:w-[210px] xl:w-[250px] h-auto shrink-0'/>
//             <Image src="/images/Hlogo.png" alt="logo" width={120} height={60} className='block md:hidden w-[120px] h-auto shrink-0'/>
//             <div className='hidden lg:flex flex-row items-center justify-between gap-3 xl:gap-10 text-sm xl:text-base'>
//                 <Link href="/" className='text-neutral-600 px-2 py-1 rounded hover:text-orange-500 hover:bg-orange-100'>Home</Link>
//                 <Link href="/aboutUs" className='text-neutral-600 px-2 py-1 rounded hover:text-orange-500 hover:bg-orange-100'>About Us</Link>
//                 <Link href="/services" className='text-neutral-600 px-2 py-1 rounded hover:text-orange-500 hover:bg-orange-100'>Services</Link>
//                 <Link href="/impact" className='text-neutral-600 px-2 py-1 rounded hover:text-orange-500 hover:bg-orange-100'>Our Impact</Link>
//                 <Link href="/resources" className='text-neutral-600 px-2 py-1 rounded hover:text-orange-500 hover:bg-orange-100'>Resources</Link>
//             </div>
//             <Link href="/joinUs">
//                 <button className='hidden lg:block px-3 xl:px-4 py-2 bg-orange-400 hover:bg-orange-500 rounded text-white text-sm xl:text-base shrink-0'>
//                     Join Us
//                 </button>
//             </Link>
//             <button className='block lg:hidden p-1' onClick={()=>setMenu(!menu)}>
//                 <Menu color="#ed832c" size={25}/>
//             </button>
//             {menu&&(
//                 <div className='absolute z-50 top-full right-4 mt-3 w-48 max-h-fit border rounded bg-white flex flex-col items-start overflow-hidden block lg:hidden'>
//                     <Link href="/" className='text-neutral-500 px-3 py-1 bg-gray-200 w-full'>Home</Link>
//                     <Link href="/aboutUs" className='text-neutral-500 px-3 py-1'>About Us</Link>
//                     <Link href="/services" className='text-neutral-500 px-3 py-1 bg-gray-200 w-full'>Services</Link>
//                     <Link href="/impact" className='text-neutral-500 px-3 py-1'>Our Impact</Link>
//                     <Link href="/resources" className='text-neutral-500 px-3 py-1 bg-gray-200 w-full'>Resources</Link>
//                     <Link href="/joinUs">
//                         <button className='px-3 py-2 w-full border rounded border-orange-400 bg-orange-400 hover:bg-white text-white hover:text-orange-500'>
//                             Join Us
//                         </button>
//                     </Link>
//                 </div>
//             )}
//         </div>
//     </div>
//   )
// }


"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
 
export default function Header() {
  const [menu, setMenu] = useState(false)
 
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/aboutUs', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/impact', label: 'Our Impact' },
    { href: '/resources', label: 'Resources' },
  ]
 
  return (
    <div className='relative py-3 border-b border-orange-200 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8 xl:px-2 flex flex-row items-center justify-between gap-4'>
 
        <Link href="/">
          <Image src="/images/Hlogo.png" alt="logo" width={250} height={120} className='hidden md:block w-[180px] lg:w-[210px] xl:w-[250px] h-auto shrink-0 transition-transform duration-300'/>
          <Image src="/images/Hlogo.png" alt="logo" width={150} height={80} className='block md:hidden w-[150px] h-auto shrink-0'/>
        </Link>
 
        {/* Desktop nav */}
        <div className='hidden lg:flex flex-row items-center justify-between gap-3 xl:gap-10 text-sm xl:text-base'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='relative text-neutral-600 px-2 py-1 rounded transition-colors duration-200 hover:text-orange-500 group'
            >
              {link.label}
              <span className='absolute left-2 right-2 -bottom-0.5 h-[2px] bg-orange-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100'></span>
            </Link>
          ))}
        </div>
 
        <Link href="/joinUs">
          <button className='hidden lg:block px-3 xl:px-4 py-2 bg-orange-400 rounded text-white text-sm xl:text-base shrink-0 transition-all duration-300 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer'>
            Join Us
          </button>
        </Link>
 
        {/* Mobile toggle — single control for open + close */}
        <button
          className='block lg:hidden p-1 relative w-8 h-8 flex items-center justify-center z-[60]'
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          <Menu
            color="#ed832c"
            size={25}
            className={`absolute transition-all duration-300 ${menu ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
          />
          <X
            color="#ed832c"
            size={25}
            className={`absolute transition-all duration-300 ${menu ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
          />
        </button>
 
        {/* Full-screen solid mobile menu */}
        <div
          className={`fixed inset-0 w-screen h-screen bg-white lg:hidden flex flex-col transition-all duration-500 ease-in-out z-50
          ${menu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <div className='flex items-center py-3 px-4'>
            <Image src="/images/Hlogo.png" alt="logo" width={150} height={80} className='w-[150px] h-auto shrink-0'/>
          </div>
 
          <div className='flex flex-col items-center justify-center flex-1 gap-2 -mt-16'>
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenu(false)}
                style={{ transitionDelay: menu ? `${i * 80 + 150}ms` : '0ms' }}
                className={`text-neutral-700 text-2xl font-semibold px-6 py-3 rounded-lg transition-all duration-500 hover:text-orange-500 hover:bg-orange-50
                ${menu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              >
                {link.label}
              </Link>
            ))}
 
            <Link
              href="/joinUs"
              onClick={() => setMenu(false)}
              style={{ transitionDelay: menu ? `${navLinks.length * 80 + 200}ms` : '0ms' }}
              className={`mt-6 transition-all duration-500 ${menu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <button className='px-8 py-3 rounded-full border border-orange-400 bg-orange-400 text-white font-medium text-lg transition-all duration-300 hover:bg-white hover:text-orange-500 hover:shadow-lg hover:shadow-orange-200'>
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}