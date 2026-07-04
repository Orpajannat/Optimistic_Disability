import Image from 'next/image'
import React from 'react'

export default function OurStory () {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center gap-10 px-5 py-10 sm:px-8 md:flex-col md:gap-10 lg:flex-row lg:gap-10 xl:gap-30'>
        <Image src="/images/ourstory.jpg" alt="ourstory" width={600} height={300} className='h-auto w-full min-w-0 max-w-160 rounded-lg'/>
        <div className='flex w-full max-w-150 flex-col items-start justify-center gap-5 [&_br]:hidden sm:[&_br]:block'>
            <h1 className='text-orange-500 text-lg md:text-xl'>Our Story</h1>
            <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-black'>More than an organization,<br/> we are a movement.</h2>
            <p className='text-base text-neutral-500'>Optimistic Disability was founded with one belief: Disability is not a<br/> limitation—it is a unique strength.</p>
            <p className='text-base text-neutral-500'>We exist to create opportunities where people with disabilities are<br/> respected, empowered, and included in every aspect of society.</p>
            <p className='text-base text-neutral-500'>Through advocacy, education, employment support, accessibility<br/> initiatives, and community engagement, we help remove barriers<br/> and build confidence.</p>
        </div>
    </div>
  )
}
