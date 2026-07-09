// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { Phone, Mail, MapPinHouse } from 'lucide-react';

// export default function Footer () {
//   return (
//     <div className='mx-auto grid w-full max-w-7xl grid-cols-1 items-start justify-items-center gap-y-10 gap-x-8 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-x-12 xl:gap-x-20'>
//         <div className='flex w-full max-w-64 flex-col items-center justify-start gap-5 text-center'>
//             <Image src="/images/Hlogo.png" alt="logo" width={250} height={120} className='hidden md:block'/>
//             <Image src="/images/Hlogo.png" alt="logo" width={80} height={40} className='block md:hidden'/>
//             <p className='text-xs md:text-base text-neutral-500'>Empowering individuals with <br/>disabilities through inclusion,<br/> oportunity and positive social<br/> changes.</p>
//         </div>
//         <div className='flex w-full max-w-56 flex-col items-center justify-start text-center text-base sm:items-start sm:text-left sm:pt-14 lg:pl-10 xl:pl-16'>
//             <h1 className='mb-2 text-black font-bold'>Quick Links</h1>
//             <Link href="/" className='text-neutral-500 hover:underline'>Home</Link>
//             <Link href="/aboutUs" className='text-neutral-500 hover:underline'>About Us</Link>
//             <Link href="/services" className='text-neutral-500 hover:underline'>Services</Link>
//             <Link href="/impact" className='text-neutral-500 hover:underline'>Our Impact</Link>
//             <Link href="/resources" className='text-neutral-500 hover:underline'>Resources</Link>
//         </div>
//         <div className='flex w-full max-w-64 flex-col items-center justify-start text-center text-base sm:items-start sm:text-left sm:pt-14'>
//             <h1 className='mb-2 text-black font-bold'>Our Programs</h1>
//             <Link href="" className='text-neutral-500 hover:underline'>Education Support</Link>
//             <Link href="" className='text-neutral-500 hover:underline'>Employment Opportunities</Link>
//             <Link href="" className='text-neutral-500 hover:underline'>Skill Development</Link>
//             <Link href="" className='text-neutral-500 hover:underline'>Community Inclusion</Link>
//             <Link href="" className='text-neutral-500 hover:underline'>Support Services</Link>
//         </div>
//         <div className='flex w-full max-w-64 flex-col items-center justify-start text-center text-base sm:items-start sm:text-left sm:pt-14'>
//             <h1 className='mb-2 text-black font-bold'>Get In Touch</h1>
//             <div className='flex flex-row items-center justify-center gap-2 sm:justify-start'>
//                 <Phone color="#ee5e11" size={15}/>
//                 <Link href="" className='text-neutral-500 hover:underline'>01111222333</Link>
//             </div>
//             <div className='flex flex-row items-center justify-center gap-2 sm:justify-start'>
//                 <Mail color="#ee5e11" size={15}/>
//                 <Link href="" className='text-neutral-500 hover:underline'>optimisticsdis@gmail.com</Link>
//             </div>
//             <div className='flex flex-row items-center justify-center gap-2 sm:justify-start'>
//                 <MapPinHouse color="#ee5e11" size={15}/>
//                 <Link href="" className='text-neutral-500 hover:underline'>Baridhara DOHS, Dhaka</Link>
//             </div>
//         </div>
//     </div>
//   )
// }


import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Phone, Mail, MapPinHouse, ArrowUpRight } from 'lucide-react'
 
const socialIcons = [
  {
    name: 'Facebook',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.23 10.44 22v-7.02H7.9v-2.92h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.92h-2.34V22C18.34 21.23 22 17.08 22 12.06Z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53C6.09.28 6.82.11 7.88.06 8.94.01 9.28 0 12 0Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.17 1.17 0 1 1 0-2.34 1.17 1.17 0 0 1 0 2.34Z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
      </svg>
    ),
  },
]
 
export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/aboutUs', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/impact', label: 'Our Impact' },
    { href: '/resources', label: 'Resources' },
  ]
 
  const programs = [
    'Education Support',
    'Employment Opportunities',
    'Skill Development',
    'Community Inclusion',
    'Support Services',
  ]
 
  return (
    <footer className='relative bg-neutral-900 text-white overflow-hidden'>
      <div className='h-1 w-full bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600'></div>
 
      <div className='absolute -top-24 -right-24 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute -bottom-24 -left-24 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none'></div>
 
      <div className='relative mx-auto max-w-7xl px-5 sm:px-8 py-14'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-12 xl:gap-x-16'>
 
          <div className='flex flex-col items-center sm:items-start gap-5 text-center sm:text-left'>
            <Image src="/images/Flogo.png" alt="logo" width={200} height={96} className='w-[160px] md:w-[190px] h-auto'/>
            <p className='text-sm text-neutral-400 leading-relaxed max-w-xs'>
              Empowering individuals with disabilities through inclusion, opportunity and positive social change.
            </p>
            <div className='flex items-center gap-3'>
              {socialIcons.map(({ name, svg }) => (
                <Link
                  key={name}
                  href=""
                  aria-label={name}
                  className='group flex items-center justify-center w-9 h-9 rounded-full border border-neutral-700 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:-translate-y-1'
                >
                  <span className='text-neutral-400 transition-colors duration-300 group-hover:text-white'>
                    {svg}
                  </span>
                </Link>
              ))}
            </div>
          </div>
 
          <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
            <h3 className='mb-5 font-semibold text-white text-base tracking-wide uppercase after:content-[""] after:block after:w-8 after:h-[2px] after:bg-orange-500 after:mt-2 after:mx-auto sm:after:mx-0'>
              Quick Links
            </h3>
            <ul className='flex flex-col gap-3'>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='group inline-flex items-center gap-1.5 text-neutral-400 text-sm transition-colors duration-300 hover:text-orange-400'
                  >
                    <span className='relative'>
                      {link.label}
                      <span className='absolute left-0 -bottom-0.5 w-0 h-[1px] bg-orange-400 transition-all duration-300 group-hover:w-full'></span>
                    </span>
                    <ArrowUpRight size={13} className='opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0'/>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
            <h3 className='mb-5 font-semibold text-white text-base tracking-wide uppercase after:content-[""] after:block after:w-8 after:h-[2px] after:bg-orange-500 after:mt-2 after:mx-auto sm:after:mx-0'>
              Our Programs
            </h3>
            <ul className='flex flex-col gap-3'>
              {programs.map((program) => (
                <li key={program}>
                  <Link
                    href=""
                    className='group inline-flex items-center gap-1.5 text-neutral-400 text-sm transition-colors duration-300 hover:text-orange-400'
                  >
                    <span className='relative'>
                      {program}
                      <span className='absolute left-0 -bottom-0.5 w-0 h-[1px] bg-orange-400 transition-all duration-300 group-hover:w-full'></span>
                    </span>
                    <ArrowUpRight size={13} className='opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0'/>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
            <h3 className='mb-5 font-semibold text-white text-base tracking-wide uppercase after:content-[""] after:block after:w-8 after:h-[2px] after:bg-orange-500 after:mt-2 after:mx-auto sm:after:mx-0'>
              Get In Touch
            </h3>
            <div className='flex flex-col gap-4'>
              <Link href="" className='group flex items-center gap-3 text-neutral-400 text-sm transition-colors duration-300 hover:text-orange-400'>
                <span className='flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 shrink-0 transition-all duration-300 group-hover:bg-orange-500 group-hover:scale-110'>
                  <Phone size={14} className='text-orange-500 transition-colors duration-300 group-hover:text-white'/>
                </span>
                01111222333
              </Link>
              <Link href="" className='group flex items-center gap-3 text-neutral-400 text-sm transition-colors duration-300 hover:text-orange-400'>
                <span className='flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 shrink-0 transition-all duration-300 group-hover:bg-orange-500 group-hover:scale-110'>
                  <Mail size={14} className='text-orange-500 transition-colors duration-300 group-hover:text-white'/>
                </span>
                <span className='break-all'>optimisticsdis@gmail.com</span>
              </Link>
              <Link href="" className='group flex items-center gap-3 text-neutral-400 text-sm transition-colors duration-300 hover:text-orange-400'>
                <span className='flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 shrink-0 transition-all duration-300 group-hover:bg-orange-500 group-hover:scale-110'>
                  <MapPinHouse size={14} className='text-orange-500 transition-colors duration-300 group-hover:text-white'/>
                </span>
                Baridhara DOHS, Dhaka
              </Link>
            </div>
          </div>
        </div>
      </div>
 
      <div className='relative border-t border-neutral-800'>
        <div className='mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left'>
          <p className='text-xs text-neutral-500'>
            © {new Date().getFullYear()} Optimistics. All rights reserved.
          </p>
          <div className='flex items-center gap-5 text-xs text-neutral-500'>
            <Link href="" className='hover:text-orange-400 transition-colors duration-300'>Privacy Policy</Link>
            <Link href="" className='hover:text-orange-400 transition-colors duration-300'>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}