import React from 'react'

export default function ResourceHero () {
  return (
    <div className='container mx-auto flex flex-col items-start justify-start gap-5 px-4 py-10'>
        <h1 className='text-lg md:text-xl lg:text-2xl text-black font-bold'>Resources</h1>
        <div className='border-t-3 border-orange-400 rounded-full w-12'></div>
        <p className='text-xl md:text-2xl lg:text-4xl text-black font-semibold text-wrap'>Handpicked for You</p>
        <p className='text-sm md:text-base text-neutral-500 text-wrap'>Explore our carefully selected guides, articles, webinars, and practical tools designed to educate, inspire, and empower individuals with disabilities, their families, caregivers, and advocates.</p>
    </div>
  )
}