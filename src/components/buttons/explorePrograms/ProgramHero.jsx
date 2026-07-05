import React from 'react'

export default function ProgramHero () {
  return (
    <div className='container mx-auto flex flex-col items-start justify-start gap-5 px-4 py-10'>
        <h1 className='text-lg md:text-xl lg:text-2xl text-black font-bold'>OUR PROGRAMS</h1>
        <div className='border-t-3 border-orange-400 rounded-full w-12'></div>
        <p className='text-xl md:text-2xl lg:text-4xl text-black font-semibold text-wrap'>Programs That Empower Every Journey</p>
        <p className='text-sm md:text-base text-neutral-500 text-wrap'>Our programs are designed to promote independence, inclusion, and opportunity for people with disabilities. From education and employment to healthcare and community engagement, each initiative helps individuals build confidence, develop new skills, and achieve their full potential.</p>
    </div>
  )
}
