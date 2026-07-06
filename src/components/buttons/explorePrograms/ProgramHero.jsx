// import React from 'react'

// export default function ProgramHero () {
//   return (
//     <div className='container mx-auto flex flex-col items-start justify-start gap-5 px-4 py-10'>
//         <h1 className='text-lg md:text-xl lg:text-2xl text-black font-bold'>OUR PROGRAMS</h1>
//         <div className='border-t-3 border-orange-400 rounded-full w-12'></div>
//         <p className='text-xl md:text-2xl lg:text-4xl text-black font-semibold text-wrap'>Programs That Empower Every Journey</p>
//         <p className='text-sm md:text-base text-neutral-500 text-wrap'>Our programs are designed to promote independence, inclusion, and opportunity for people with disabilities. From education and employment to healthcare and community engagement, each initiative helps individuals build confidence, develop new skills, and achieve their full potential.</p>
//     </div>
//   )
// }

import React from 'react'

export default function ProgramHero() {
  return (
    <section className="bg-white py-16 px-5 sm:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-start gap-4">
          
          <div className="space-y-2">
            <span className="text-[#f37421] text-xs font-bold uppercase tracking-widest block">
              Our Programs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
              Programs That Empower Every Journey
            </h2>
          </div>

          <div className="h-1.5 w-16 bg-[#f37421] rounded-full mt-2" />

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-4xl leading-relaxed">
            Our programs are designed to promote independence, inclusion, and opportunity for people with disabilities. 
            From education and employment to healthcare and community engagement, each initiative helps individuals 
            build confidence, develop new skills, and achieve their full potential.
          </p>
          
        </div>
      </div>
    </section>
  )
}