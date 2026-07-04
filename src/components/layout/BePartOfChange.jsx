import React from 'react'
import { HandCoins, Heart, UsersRound, MoveRight } from 'lucide-react';


export default function BePartOfChange () {
  return (
    <div className='relative overflow-hidden py-8 md:py-10 bg-orange-400 flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-20 xl:gap-40 px-4 md:px-8'>
        <div className='absolute top-5 left-5 md:left-25 lg:left-20 xl:left-75 w-24 md:w-35 h-24 md:h-35 rounded-full bg-orange-100/20'></div>
        <div className='absolute bottom-5 md:bottom-8 lg:top-5 right-5 md:right-25 lg:right-20 xl:right-75 w-15 md:w-20 lg:w-35 h-15 md:h-20 lg:h-35 rounded-full bg-orange-100/20'></div>
        <div className='relative z-10 flex flex-col sm:flex-row lg:flex-row items-center lg:items-start text-center sm:text-left gap-3 md:gap-5'>
            <HandCoins strokeWidth={1} size={120} className='w-20 h-20 md:w-28 md:h-28 lg:w-[120px] lg:h-[120px] shrink-0'/>
            <div className='flex flex-col text-white'>
               <p className='text-xl md:text-2xl lg:text-3xl font-bold'>Be a part of change.</p>
               <p className='text-sm md:text-base lg:text-lg'>Your support can empower lives and build<br className='hidden sm:block'/> a more inclusive and compassionate society.</p>
            </div>
        </div>
        <div className='relative z-10 flex flex-col sm:flex-row lg:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-6'>
            <button className='flex w-full sm:w-auto flex-row items-center justify-center gap-2 border-2 border-white px-4 py-3 rounded-lg'>
                <Heart size={25}/>
                Donate Now
            </button>
            <button className='flex w-full sm:w-auto flex-row items-center justify-center gap-2 border-2 border-white px-4 py-3 rounded-lg'>
                <UsersRound size={25}/>
                Volunteer
            </button>
            <button className='flex w-full sm:w-auto flex-row items-center justify-center gap-2 border-2 border-white px-4 py-3 rounded-lg'>
                <MoveRight size={25}/>
                Join Us
            </button>
        </div>
    </div>
  )
}
