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
  const impactMetrics = [
    {
      icon: Users,
      value: '500+',
      label: 'People Supported',
    },
    {
      icon: GraduationCap,
      value: '120+',
      label: 'Training Programs',
    },
    {
      icon: HeartHandshake,
      value: '30+',
      label: 'Partner Organizations',
    },
    {
      icon: MapPin,
      value: '10+',
      label: 'Communities Served',
    },
  ]

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-orange-50/40 to-white border-y border-orange-100/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-4 text-center lg:text-left space-y-3 max-w-xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 bg-[#fdcb11]/10 border border-[#fdcb11]/30 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#f37421]"></span>
              <h2 className="text-xs sm:text-sm font-semibold tracking-wide text-slate-800 uppercase">
                Our Metrics
              </h2>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
              The Impact of Optimistic Disability Services
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-center">
            {impactMetrics.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="group flex min-h-40 flex-col items-center justify-center space-y-3 rounded-2xl border border-slate-200/80 bg-white/80 px-3 py-6 shadow-sm shadow-slate-200/60 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#fdcb11]/60 hover:bg-white hover:shadow-xl hover:shadow-[#f37421]/10"
              >
                <div className="p-3 bg-[#fdcb11]/10 rounded-xl text-[#f37421] transition-all duration-300 group-hover:bg-[#f37421] group-hover:text-white group-hover:scale-110">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-[#f37421]">
                    {value}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base font-medium text-slate-600">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
