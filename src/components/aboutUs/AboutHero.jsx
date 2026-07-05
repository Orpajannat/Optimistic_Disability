import Image from 'next/image'
import React from 'react'
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutHero () {
  return (
    <div className='flex flex-col items-center justify-center gap-10 bg-amber-100/20 px-5 py-10 md:py-10 lg:py-10 xl:py-0 sm:px-10 lg:flex-row lg:justify-around lg:gap-8'>
        <div className='flex flex-col items-start justify-start gap-1'>
            <h1 className='text-orange-500 text-lg md:text-xl pb-4'>About Us</h1>
            <p className='text-black text-2xl md:text-3xl lg:text-5xl font-bold'>Empowering Abilities.</p>
            <p className='text-orange-500 text-2xl md:text-3xl lg:text-5xl font-bold pb-4'>Creating Opportunities.</p>
            <p className='text-base text-neutral-500'>Together we&apos;re building an inclusive future where<br/> everyone can participate with dignity and confidence.</p>
            <div className='flex flex-row flex-wrap gap-4 pt-5 sm:gap-10'>
                <Link href="/explorePrograms">
                  <button className='flex flex-row items-center gap-2 px-4 py-3 bg-orange-500 hover:bg-orange-300 rounded-lg text-white'>
                    Our Programs
                    <MoveRight size={20}/>
                  </button>
                </Link>
                <Link href="/joinUs">
                    <button className='flex flex-row items-center gap-2 px-4 py-3 border-2 border-orange-400 hover:border-white hover:bg-orange-300 rounded-lg text-black hover:text-white'>
                        Get Involved
                        <MoveRight color="#f46b10" size={20}/>
                    </button>
                </Link>
            </div>
        </div>
        <div className='relative aspect-8/5 w-full max-w-160 shrink-0 lg:w-[52vw]'>
            <div className='absolute inset-0 rounded-bl-full bg-orange-200'></div>
            <Image src="/images/aboutHero.jpg" alt="aboutherobanner" width={600} height={300} className='absolute top-0 right-0 h-auto w-[93.75%] rounded-tl-full border-l-3 border-orange-400'/> 
        </div>
    </div>
  )
}
