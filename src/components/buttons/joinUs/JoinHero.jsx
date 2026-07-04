import React from 'react'

export default function JoinHero () {
  return (
    <div className='relative px-4 py-10 flex flex-col items-start justify-start gap-5'>
        <div className='absolute bottom-10 right-0 h-12 w-30 lg:h-22 lg:w-40 bg-[radial-gradient(circle,#fb923c_2px,transparent_2px)] [background-size:10px_10px] [mask-image:linear-gradient(to_left,black,transparent)] [-webkit-mask-image:linear-gradient(to_left,black,transparent)] opacity-70'></div>
        <h1 className='text-2xl md:text-4xl lg:6xl xl:7xl font-bold text-black'>Join Our Mission</h1>
        <div className='border-t-3 border-orange-400 rounded-full w-12'></div>
        <p className='text-sm sm:text-base text-neutral-500 w-54 md:w-100 lg:w-150 xl:w-full text-wrap'>Every contribution—whether it's your time, skills, or financial support—helps<br className='hidden xl:block'/> create a more inclusive future for persons with disabilities. Join us in building<br className='hidden xl:block'/> opportunities, removing barriers, and changing lives.</p>
    </div>
  )
}
