import React from 'react'

export default function StoryHero () {
  return (
    <div className='container mx-auto flex flex-col items-start justify-start gap-5 px-4 py-10'>
        <h1 className='text-lg md:text-xl lg:text-2xl text-black font-bold'>Our Success Stories</h1>
        <div className='border-t-3 border-orange-400 rounded-full w-12'></div>
        <p className='text-xl md:text-2xl lg:text-4xl text-black font-semibold text-wrap'>Every Story is a Step Toward Inclusion.</p>
        <p className='text-sm md:text-base text-neutral-500 text-wrap'>Discover inspiring journeys of individuals whose lives have been transformed through education, employment,<br className='hidden lg:block'/> community support, and opportunity. These stories reflect the power of inclusion, resilience, and hope.</p>
    </div>
  )
}
