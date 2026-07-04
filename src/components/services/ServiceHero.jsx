import React from 'react'
import { Flower, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceHero () {
  return (
    <div className='flex flex-col xl:flex-row items-start xl:items-stretch justify-between gap-8 md:gap-10 px-4 md:px-8 lg:px-10 xl:pl-20 xl:pr-0 py-10 xl:py-0'>
        <div className='relative flex w-full xl:w-[48%] flex-col items-start justify-center gap-5 overflow-hidden'>
            <Flower color="#fed7aa" strokeWidth={0.75} size={90} className='absolute top-1 left-20 z-0 rotate-12' />
            <Flower color="#fed7aa" strokeWidth={0.75} size={76} className='absolute top-16 right-8 z-0 -rotate-12' />
            <Flower color="#fed7aa" strokeWidth={0.75} size={96} className='absolute bottom-4 left-1/3 z-0 rotate-45' />
            <Flower color="#fed7aa" strokeWidth={0.75} size={68} className='absolute bottom-30 right-45 z-0 -rotate-45' />
            <Flower color="#fed7aa" strokeWidth={0.75} size={58} className='absolute top-1/2 left-4 z-0 -rotate-6' />
            <Flower color="#fed7aa" strokeWidth={0.75} size={62} className='absolute bottom-8 right-4 z-0 rotate-24' />
            <div className='relative z-10 flex flex-col items-start justify-center gap-5'>
                <h1 className='text-base md:text-lg text-orange-500'>Our Services</h1>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold text-black leading-tight'>Services that Empower.</h2>
                    <h2 className='text-2xl md:text-3xl lg:text-5xl text-black leading-tight'><b>Opportunities that</b> <b className='text-orange-500'>Transform.</b></h2>
                </div>
                <p className='text-sm md:text-base text-neutral-500 leading-relaxed'>We provide practical support and meaningful programs that help persons with<br className='hidden md:block'/> disabilities live independently, with dignity, confidence, and equal opportunities.</p>
                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-6 lg:gap-10'>
                    <button className='flex flex-row items-center gap-2 px-4 py-3 bg-orange-500 hover:bg-orange-300 rounded-lg text-white text-sm md:text-base'>
                        Explore Programs
                        <MoveRight size={20}/>
                    </button>
                    <Link href="/joinUs">
                      <button className='flex flex-row items-center gap-2 px-4 py-3 border-2 border-orange-400 hover:border-white hover:bg-orange-300 rounded-lg text-black hover:text-white text-sm md:text-base'>
                        Get Support
                        <MoveRight size={20}/>
                      </button>
                    </Link>
                </div>
            </div>
        </div>
        <div className='w-full xl:w-[52%] flex justify-start'>
            <Image src="/images/serviceHero.png" alt="serviceHero" width={1000} height={600} className='w-full max-w-[720px] xl:max-w-[1000px] h-auto rounded-lg xl:rounded-es-full xl:border-b-2 xl:border-l-2 xl:border-l-orange-400 xl:border-b-orange-400 shadow-xl xl:shadow-none'/>
        </div>
    </div>
  )
}
