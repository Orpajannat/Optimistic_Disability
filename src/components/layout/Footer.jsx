import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Phone, Mail, MapPinHouse } from 'lucide-react';

export default function Footer () {
  return (
    <div className='mx-auto grid w-full max-w-7xl grid-cols-1 items-start justify-items-center gap-y-10 gap-x-8 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-x-12 xl:gap-x-20'>
        <div className='flex w-full max-w-64 flex-col items-center justify-start gap-5 text-center'>
            <Image src="/images/Hlogo.png" alt="logo" width={250} height={120} className='hidden md:block'/>
            <Image src="/images/Hlogo.png" alt="logo" width={80} height={40} className='block md:hidden'/>
            <p className='text-xs md:text-base text-neutral-500'>Empowering individuals with <br/>disabilities through inclusion,<br/> oportunity and positive social<br/> changes.</p>
        </div>
        <div className='flex w-full max-w-56 flex-col items-center justify-start text-center text-base sm:items-start sm:text-left sm:pt-14 lg:pl-10 xl:pl-16'>
            <h1 className='mb-2 text-black font-bold'>Quick Links</h1>
            <Link href="" className='text-neutral-500 hover:underline'>Home</Link>
            <Link href="" className='text-neutral-500 hover:underline'>About Us</Link>
            <Link href="" className='text-neutral-500 hover:underline'>Services</Link>
            <Link href="" className='text-neutral-500 hover:underline'>Our Impact</Link>
            <Link href="" className='text-neutral-500 hover:underline'>Resources</Link>
        </div>
        <div className='flex w-full max-w-64 flex-col items-center justify-start text-center text-base sm:items-start sm:text-left sm:pt-14'>
            <h1 className='mb-2 text-black font-bold'>Our Programs</h1>
            <Link href="" className='text-neutral-500 hover:underline'>Education Support</Link>
            <Link href="" className='text-neutral-500 hover:underline'>Employment Opportunities</Link>
            <Link href="" className='text-neutral-500 hover:underline'>Skill Development</Link>
            <Link href="" className='text-neutral-500 hover:underline'>Community Inclusion</Link>
            <Link href="" className='text-neutral-500 hover:underline'>Support Services</Link>
        </div>
        <div className='flex w-full max-w-64 flex-col items-center justify-start text-center text-base sm:items-start sm:text-left sm:pt-14'>
            <h1 className='mb-2 text-black font-bold'>Get In Touch</h1>
            <div className='flex flex-row items-center justify-center gap-2 sm:justify-start'>
                <Phone color="#ee5e11" size={15}/>
                <Link href="" className='text-neutral-500 hover:underline'>01111222333</Link>
            </div>
            <div className='flex flex-row items-center justify-center gap-2 sm:justify-start'>
                <Mail color="#ee5e11" size={15}/>
                <Link href="" className='text-neutral-500 hover:underline'>optimisticsdis@gmail.com</Link>
            </div>
            <div className='flex flex-row items-center justify-center gap-2 sm:justify-start'>
                <MapPinHouse color="#ee5e11" size={15}/>
                <Link href="" className='text-neutral-500 hover:underline'>Baridhara DOHS, Dhaka</Link>
            </div>
        </div>
    </div>
  )
}
