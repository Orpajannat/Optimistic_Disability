// import React from 'react'

// export default function JoinHero () {
//   return (
//     <div className='relative px-4 py-10 flex flex-col items-start justify-start gap-5'>
//         <div className='absolute bottom-10 right-0 h-12 w-30 lg:h-22 lg:w-40 bg-[radial-gradient(circle,#fb923c_2px,transparent_2px)] [background-size:10px_10px] [mask-image:linear-gradient(to_left,black,transparent)] [-webkit-mask-image:linear-gradient(to_left,black,transparent)] opacity-70'></div>
//         <h1 className='text-2xl md:text-4xl lg:6xl xl:7xl font-bold text-black'>Join Our Mission</h1>
//         <div className='border-t-3 border-orange-400 rounded-full w-12'></div>
//         <p className='text-sm sm:text-base text-neutral-500 w-54 md:w-100 lg:w-150 xl:w-full text-wrap'>Every contribution—whether it's your time, skills, or financial support—helps<br className='hidden xl:block'/> create a more inclusive future for persons with disabilities. Join us in building<br className='hidden xl:block'/> opportunities, removing barriers, and changing lives.</p>
//     </div>
//   )
// }

import React from 'react'

export default function JoinHero() {
  return (
    <section className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:py-24 bg-white">
      <div className="absolute bottom-10 right-0 h-24 w-48 lg:h-32 lg:w-64 bg-[radial-gradient(circle,#f37421_2px,transparent_2px)] [background-size:12px_12px] [mask-image:linear-gradient(to_left,black,transparent)] opacity-30" />
      
      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-start justify-start">
        <span className="text-[#f37421] text-xs font-bold uppercase tracking-widest mb-4 block">
          Get Involved
        </span>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          Join Our Mission
        </h1>
        
        <div className="h-1.5 w-16 bg-[#f37421] rounded-full mb-6" />
        
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl leading-relaxed">
          Every contribution—whether it&apos;s your time, skills, or financial support—helps create a more inclusive future for persons with disabilities. Join us in building opportunities, removing barriers, and changing lives.
        </p>
      </div>
    </section>
  )
}