import React from 'react'
import { Users, GraduationCap, HeartHandshake, MapPin } from 'lucide-react';

export default function OurImpact () {
  return (
    <div className='bg-orange-100/80 p-10'>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-lg md:text-xl text-orange-500'>Our Impact</h1>
            <div className='grid grid-cols-2 md:flex md:flex-row md:items-center md:justify-between text-center gap-0 md:gap-5 lg:gap-10 xl:gap-20 md:divide-x-2 divide-orange-500/20'>
                <div className='flex flex-col items-center justify-center gap-1 md:gap-5 px-5 md:px-10 lg:px-15 xl:px-30 border-b-2 md:border-b-0 border-r-2'>
                    <Users color="#f0690f" size={50} className='hidden md:hidden lg:block'/>
                    <Users color="#f0690f" size={25} className='block md:hidden'/>
                    <h2 className='text-xl md:text-2xl lg:text-5xl text-orange-500 font-bold'>500+</h2>
                    <p className='text-sm md:text-base lg:text-lg text-black'>People Supported</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-1 md:gap-5 pr-5 md:pr-10 lg:pr-15 xl:pr-30 pl-2 md:pl-5 lg:pl-8 xl:pl-10 border-b-2 md:border-b-0'>
                    <GraduationCap color="#f0690f" size={50} className='hidden md:hidden lg:block'/>
                    <GraduationCap color="#f0690f" size={25} className='block md:hidden'/>
                    <h2 className='text-xl md:text-2xl lg:text-5xl text-orange-500 font-bold'>120+</h2>
                    <p className='text-sm md:text-base lg:text-lg text-black'>Training Programs</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-1 md:gap-5 pr-5 md:pr-10 lg:pr-15 xl:pr-30 pl-2 md:pl-5 lg:pl-8 xl:pl-10 border-r-2'>
                    <HeartHandshake color="#f0690f" size={50} className='hidden md:hidden lg:block'/>
                    <HeartHandshake color="#f0690f" size={25} className='block md:hidden'/>
                    <h2 className='text-xl md:text-2xl lg:text-5xl text-orange-500 font-bold'>30+</h2>
                    <p className='text-sm md:text-base lg:text-lg text-black'>Partner Organizations</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-1 md:gap-5 pr-5 md:pr-10 lg:pr-15 xl:pr-30 pl-2 md:pl-5 lg:pl-8 xl:pl-10'>
                    <MapPin color="#f0690f" size={50} className='hidden md:hidden lg:block'/>
                    <MapPin color="#f0690f" size={25} className='block md:hidden'/>
                    <h2 className='text-xl md:text-2xl lg:text-5xl text-orange-500 font-bold'>10+</h2>
                    <p className='text-sm md:text-base lg:text-lg text-black'>Communities Served</p>
                </div>
            </div>
        </div>
    </div>
  )
}
