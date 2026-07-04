import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroBanner () {
  return (
    <div className='relative w-full overflow-hidden h-[200px] sm:h-[320px] md:h-[500px] lg:h-[700px] xl:h-[850px]'>
        <Image src="/images/HeroBanner.png" alt="heroBanner" fill priority sizes="100vw" className='object-cover'/>
        <div className="absolute top-0 right-0 w-30 md:w-80 lg:w-120 xl:w-150 h-30 md:h-80 lg:h-120 xl:h-150 bg-orange-500 rounded-bl-full"></div>
        <Image src="/images/Banner2.jpg" alt="banner1" width={500} height={400} className="hidden md:hidden lg:hidden xl:block absolute top-0 right-0 rounded-bl-full"/>
        <Image src="/images/Banner2.jpg" alt="banner1" width={400} height={300} className="hidden md:hidden lg:block xl:hidden absolute top-0 right-0 rounded-bl-full"/>
        <Image src="/images/Banner2.jpg" alt="banner1" width={250} height={180} className="hidden md:block lg:hidden xl:hidden absolute top-0 right-0 rounded-bl-full"/>
        <Image src="/images/Banner2.jpg" alt="banner1" width={100} height={80} className="block md:hidden lg:hidden xl:hidden absolute top-0 right-0 rounded-bl-full"/>
        <div className='absolute inset-0 container mx-auto px-4 md:px-4 lg:px-10 xl:px-0 flex items-center'>
          <div className='flex w-[145px] sm:w-[220px] md:w-[420px] lg:w-[520px] xl:w-[520px] flex-col items-start gap-2 sm:gap-3 md:gap-4 lg:gap-5 px-4'>
            <p className='w-full text-[8px] sm:text-xs md:text-xl lg:text-3xl xl:text-5xl leading-tight text-black'>
              Our <b className='text-orange-400'>Vision</b> is to build<br/> an inclusive society<br/> where every person<br/> with a disability can<br/> live with <b className='text-orange-400'>confidence</b>
            </p>
            <Link href="/aboutUs">
              <button className='block bg-orange-400 hover:bg-orange-500 rounded text-white text-[10px] sm:text-xs md:text-base lg:text-lg px-2 sm:px-3 lg:px-4 py-1 lg:py-2 max-w-fit'>
                  Read More
              </button>
            </Link>
          </div>
        </div>
    </div>
  )
}
