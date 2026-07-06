// import React from 'react'
// import { Users, GraduationCap, HeartHandshake, MapPin } from 'lucide-react';

// export default function OurImpact () {
//   return (
//     <div className='bg-orange-100/80 p-10'>
//         <div className='flex flex-col items-center justify-center gap-5'>
//             <h1 className='text-lg md:text-xl text-orange-500'>Our Impact</h1>
//             <div className='grid grid-cols-2 md:flex md:flex-row md:items-center md:justify-between text-center gap-0 md:gap-5 lg:gap-10 xl:gap-20 md:divide-x-2 divide-orange-500/20'>
//                 <div className='flex flex-col items-center justify-center gap-1 md:gap-5 px-5 md:px-10 lg:px-15 xl:px-30 border-b-2 md:border-b-0 border-r-2'>
//                     <Users color="#f0690f" size={50} className='hidden md:hidden lg:block'/>
//                     <Users color="#f0690f" size={25} className='block md:hidden'/>
//                     <h2 className='text-xl md:text-2xl lg:text-5xl text-orange-500 font-bold'>500+</h2>
//                     <p className='text-sm md:text-base lg:text-lg text-black'>People Supported</p>
//                 </div>
//                 <div className='flex flex-col items-center justify-center gap-1 md:gap-5 pr-5 md:pr-10 lg:pr-15 xl:pr-30 pl-2 md:pl-5 lg:pl-8 xl:pl-10 border-b-2 md:border-b-0'>
//                     <GraduationCap color="#f0690f" size={50} className='hidden md:hidden lg:block'/>
//                     <GraduationCap color="#f0690f" size={25} className='block md:hidden'/>
//                     <h2 className='text-xl md:text-2xl lg:text-5xl text-orange-500 font-bold'>120+</h2>
//                     <p className='text-sm md:text-base lg:text-lg text-black'>Training Programs</p>
//                 </div>
//                 <div className='flex flex-col items-center justify-center gap-1 md:gap-5 pr-5 md:pr-10 lg:pr-15 xl:pr-30 pl-2 md:pl-5 lg:pl-8 xl:pl-10 border-r-2'>
//                     <HeartHandshake color="#f0690f" size={50} className='hidden md:hidden lg:block'/>
//                     <HeartHandshake color="#f0690f" size={25} className='block md:hidden'/>
//                     <h2 className='text-xl md:text-2xl lg:text-5xl text-orange-500 font-bold'>30+</h2>
//                     <p className='text-sm md:text-base lg:text-lg text-black'>Partner Organizations</p>
//                 </div>
//                 <div className='flex flex-col items-center justify-center gap-1 md:gap-5 pr-5 md:pr-10 lg:pr-15 xl:pr-30 pl-2 md:pl-5 lg:pl-8 xl:pl-10'>
//                     <MapPin color="#f0690f" size={50} className='hidden md:hidden lg:block'/>
//                     <MapPin color="#f0690f" size={25} className='block md:hidden'/>
//                     <h2 className='text-xl md:text-2xl lg:text-5xl text-orange-500 font-bold'>10+</h2>
//                     <p className='text-sm md:text-base lg:text-lg text-black'>Communities Served</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }


import React from 'react'
import { Users, GraduationCap, HeartHandshake, MapPin } from 'lucide-react'

export default function OurImpact() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-orange-50/40 to-white border-y border-orange-100/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Heading */}
        <div className="text-center space-y-2 mb-12 md:mb-16">
          <h2 className="text-xs font-bold tracking-widest text-[#f37421] uppercase">
            Our Metrics
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
            The Impact of Optimistic Disability Services
          </p>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 sm:gap-x-8 lg:gap-x-0 items-center text-center">
          
          {/* Metric 1: People Supported */}
          <div className="flex flex-col items-center justify-center space-y-3 lg:border-r lg:border-slate-200/80 last:border-none">
            <div className="p-3 bg-[#fdcb11]/10 rounded-2xl text-[#f37421]">
              <Users className="w-8 h-8 md:w-10 md:h-10 stroke-[1.75]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                500+
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-medium text-slate-600">
                People Supported
              </p>
            </div>
          </div>

          {/* Metric 2: Training Programs */}
          <div className="flex flex-col items-center justify-center space-y-3 lg:border-r lg:border-slate-200/80 last:border-none">
            <div className="p-3 bg-[#fdcb11]/10 rounded-2xl text-[#f37421]">
              <GraduationCap className="w-8 h-8 md:w-10 md:h-10 stroke-[1.75]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                120+
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-medium text-slate-600">
                Training Programs
              </p>
            </div>
          </div>

          {/* Metric 3: Partner Organizations */}
          <div className="flex flex-col items-center justify-center space-y-3 lg:border-r lg:border-slate-200/80 last:border-none">
            <div className="p-3 bg-[#fdcb11]/10 rounded-2xl text-[#f37421]">
              <HeartHandshake className="w-8 h-8 md:w-10 md:h-10 stroke-[1.75]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                30+
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-medium text-slate-600">
                Partner Organizations
              </p>
            </div>
          </div>

          {/* Metric 4: Communities Served */}
          <div className="flex flex-col items-center justify-center space-y-3 last:border-none">
            <div className="p-3 bg-[#fdcb11]/10 rounded-2xl text-[#f37421]">
              <MapPin className="w-8 h-8 md:w-10 md:h-10 stroke-[1.75]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                10+
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-medium text-slate-600">
                Communities Served
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}