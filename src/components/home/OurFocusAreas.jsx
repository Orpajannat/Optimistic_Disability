// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// export default function OurFocusAreas () {
//   return (
//     <div className='pt-12 md:pt-16 lg:pt-20 pb-10 bg-orange-100/30'>
//         <div className='container mx-auto px-4 md:px-6 lg:px-8 xl:px-0 flex flex-col items-center justify-center gap-8 md:gap-10'>
//             <h1 className='text-orange-500 text-xl'>Our Focus Areas</h1>
//             <div className='flex w-full flex-col lg:flex-row items-stretch justify-center gap-6 md:gap-8 lg:gap-10'>
//                 <div className='flex w-full lg:w-1/2 xl:w-auto flex-row items-center justify-center'>
//                     <div className='flex w-full max-w-[520px] min-h-full flex-col items-center justify-center gap-5 px-4 sm:px-5 py-8 md:py-10 bg-white rounded shadow-lg'>
//                         <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-700 text-center'>Empowerment</h3>
//                         <Image src="/images/Human_Figure_with_Circle.png" alt="humanfigure" width={400} height={200} className='w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[400px] h-auto'/>
//                         <p className='text-sm sm:text-base text-neutral-500 text-center'>
//                             This symbol combines a human figure and a<br/>
//                             protective circular shape to represent the core<br/>
//                             values of empowerment, inclusion, and support.
//                         </p>
//                         <Link href="/services">
//                           <button className='px-3 py-2 bg-orange-400 hover:border-2 hover:border-orange-400 hover:bg-white rounded text-white hover:text-orange-500'>
//                             Read More
//                           </button>
//                         </Link>
//                     </div>
//                 </div>
//                 <div className='flex w-full lg:w-1/2 xl:w-auto flex-row items-center justify-center'>
//                     <div className='flex w-full max-w-[520px] min-h-full flex-col items-center justify-center gap-5 px-4 sm:px-5 py-8 md:py-10 bg-white rounded shadow-lg'>
//                         <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-700 text-center'>Brighter Opportunities</h3>
//                         <Image src="/images/Sun_Rays.png" alt="sunrays" width={450} height={220} className='block md:hidden lg:block w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[450px] h-auto'/>
//                         <Image src="/images/Sun_Rays.png" alt="sunrays" width={440} height={220} className='hidden md:block lg:hidden w-full max-w-[440px] h-auto'/>
//                         <p className='text-sm sm:text-base text-neutral-500 text-center'>
//                             The sun rays represent optimism, hope,<br/>
//                             positivity, growth, enlightenment, and<br/>
//                             brighter opportunities. 

//                         </p>
//                         <Link href="/services">
//                           <button className='px-3 py-2 bg-orange-400 hover:border-2 hover:border-orange-400 hover:bg-white rounded text-white hover:text-orange-500'>
//                             Read More
//                           </button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function OurFocusAreas() {
  return (
    <section className="py-14 sm:py-16 md:py-24 bg-gradient-to-b from-slate-50 to-orange-50/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-xs font-bold tracking-widest text-[#f37421] uppercase">
            Core Framework
          </h2>
          <p className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Our Focus Areas
          </p>
          <div className="w-12 h-1 bg-[#f37421] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          
          {/* Card 1: Empowerment */}
          <div className="group lg:col-span-6 flex h-full flex-col items-center bg-white rounded-lg border border-slate-100 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative mb-6 flex w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] aspect-[4/3] items-center justify-center p-3 sm:p-4">
              <Image 
                src="/images/Human_figure1.png" 
                alt="Empowerment icon displaying human figure within a community circle" 
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 38vw"
                className="object-contain p-2 transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="flex-1 flex flex-col items-center text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                Empowerment
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md">
                This symbol combines a human figure and a protective circular shape to represent the core values of empowerment, inclusion, and support.
              </p>
            </div>

            <div className="pt-8 w-full sm:w-auto">
              <Link 
                href="/services" 
                className="inline-flex w-full sm:w-auto items-center justify-center bg-[#f37421] hover:bg-[#f68c1f] text-white font-medium text-sm sm:text-base px-6 py-3 rounded-lg transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f37421] focus:ring-offset-2"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Card 2: Brighter Opportunities */}
          <div className="group lg:col-span-6 flex h-full flex-col items-center bg-white rounded-lg border border-slate-100 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative mb-6 flex w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] aspect-[4/3] items-center justify-center bg-amber-50/40 rounded-lg p-3 sm:p-4">
              <Image 
                src="/images/sunray1.png" 
                alt="Brighter Opportunities icon featuring rising optimistic sun rays" 
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 38vw"
                className="object-contain p-2 transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="flex-1 flex flex-col items-center text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                Brighter Opportunities
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md">
                The sun rays represent optimism, hope, positivity, growth, enlightenment, and brighter opportunities tailored to individual strengths.
              </p>
            </div>

            <div className="pt-8 w-full sm:w-auto">
              <Link 
                href="/services" 
                className="inline-flex w-full sm:w-auto items-center justify-center bg-[#f37421] hover:bg-[#f68c1f] text-white font-medium text-sm sm:text-base px-6 py-3 rounded-lg transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f37421] focus:ring-offset-2"
              >
                Read More
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
