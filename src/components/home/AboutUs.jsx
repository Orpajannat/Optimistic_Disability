import React from 'react'
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';

export default function AboutUs () {
  return (
    <div className='py-10 flex flex-row items-baseline-last justify-center gap-10 px-4 md:px-4 lg:px-10 xl:px-5'>
        <div className='flex flex-col'>
            <h1 className='text-base md:text-xl text-orange-500'>About Us</h1>
            <h2 className='text-lg md:text-2xl lg:text-4xl'><b className='text-black'>Together, we Build</b><br/> <b className='text-orange-400'>an inclusive future.</b></h2>
            <Image src="/images/facebook-optimum-01-06-26.jpg.jpeg" alt="empower" width={300} height={150} className='block md:block lg:block xl:hidden rounded py-5'/>
            <p className='text-base md:text-lg text-neutral-500 py-5'>
                Optimistic Disability is a purpose-driven organization dedicated to<br/> empowering persons with disabilities through inclusion, opportunity,<br/> dignity, and positive social change.
            </p>
            <div className='flex flex-row items-center gap-2'>
                <CircleCheck color="#e25f18" size={20}/>
                <p className='text-base md:text-lg text-neutral-500'>Promoting inclusion and positive representation</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <CircleCheck color="#e25f18" size={20}/>
                <p className='text-base md:text-lg text-neutral-500'>Promoting inclusion and positive representation</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <CircleCheck color="#e25f18" size={20}/>
                <p className='text-base md:text-lg text-neutral-500'>Promoting inclusion and positive representation</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <CircleCheck color="#e25f18" size={20}/>
                <p className='text-base md:text-lg text-neutral-500'>Promoting inclusion and positive representation</p>
            </div>
            <div className='flex flex-row items-center gap-2 pb-5'>
                <CircleCheck color="#e25f18" size={20}/>
                <p className='text-base md:text-lg text-neutral-500'>Promoting inclusion and positive representation</p>
            </div>
            <button className='px-3 py-2 w-fit bg-orange-400 hover:bg-orange-500 rounded text-white'>
                Learn More About Us
            </button>
        </div>
        <Image src="/images/facebook-optimum-01-06-26.jpg.jpeg" alt="empower" width={900} height={250} className='hidden md:hidden lg:hidden xl:block rounded shadow-xl'/>
    </div>
  )
}
