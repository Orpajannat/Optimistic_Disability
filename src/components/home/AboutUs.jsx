// import React from 'react'
// import { CircleCheck } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function AboutUs () {
//   return (
//     <div className='py-10 flex flex-row items-baseline-last justify-center gap-10 px-4 md:px-4 lg:px-10 xl:px-5'>
//         <div className='flex flex-col'>
//             <h1 className='text-base md:text-xl text-orange-500'>About Us</h1>
//             <h2 className='text-lg md:text-2xl lg:text-4xl'><b className='text-black'>Together, we Build</b><br/> <b className='text-orange-400'>an inclusive future.</b></h2>
//             <Image src="/images/facebook-optimum-01-06-26.jpg.jpeg" alt="empower" width={300} height={150} className='block md:block lg:block xl:hidden rounded py-5'/>
//             <p className='text-base md:text-lg text-neutral-500 py-5'>
//                 Optimistic Disability is a purpose-driven organization dedicated to<br/> empowering persons with disabilities through inclusion, opportunity,<br/> dignity, and positive social change.
//             </p>
//             <div className='flex flex-row items-center gap-2'>
//                 <CircleCheck color="#e25f18" size={20}/>
//                 <p className='text-base md:text-lg text-neutral-500'>Promoting inclusion and positive representation</p>
//             </div>
//             <div className='flex flex-row items-center gap-2'>
//                 <CircleCheck color="#e25f18" size={20}/>
//                 <p className='text-base md:text-lg text-neutral-500'>Support education, employment, and entrepreneurship opportunities</p>
//             </div>
//             <div className='flex flex-row items-center gap-2'>
//                 <CircleCheck color="#e25f18" size={20}/>
//                 <p className='text-base md:text-lg text-neutral-500'>Encourage accessibility and inclusive environments</p>
//             </div>
//             <div className='flex flex-row items-center gap-2'>
//                 <CircleCheck color="#e25f18" size={20}/>
//                 <p className='text-base md:text-lg text-neutral-500'>Advocate for equal rights, independence, and social inclusion</p>
//             </div>
//             <div className='flex flex-row items-center gap-2 pb-5'>
//                 <CircleCheck color="#e25f18" size={20}/>
//                 <p className='text-base md:text-lg text-neutral-500'>Foster optimism, confidence, and self-belief among people with disabilities</p>
//             </div>
//             <Link href="/aboutUs">
//                 <button className='px-3 py-2 w-fit bg-orange-400 hover:bg-orange-500 rounded text-white'>
//                     Learn More About Us
//                 </button>
//             </Link>
//         </div>
//         <Image src="/images/facebook-optimum-01-06-26.jpg.jpeg" alt="empower" width={900} height={250} className='hidden md:hidden lg:hidden xl:block rounded shadow-xl'/>
//     </div>
//   )
// }


import React from 'react'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start space-y-5 sm:space-y-6 md:space-y-8 max-w-xl lg:max-w-none order-2 lg:order-1">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#fdcb11]/10 border border-[#fdcb11]/30 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#f37421]"></span>
                <h2 className="text-xs sm:text-sm font-semibold tracking-wide text-slate-800 uppercase">
                  About Us
                </h2>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-[1.15]">
                Together, we Build <span className="font-bold text-[#f37421]">an inclusive future.</span>
              </h3>
            </div>

            {/* Image Container for Mobile/Tablet Viewports */}
            <div className="lg:hidden relative w-full max-w-2xl aspect-[4/3] sm:aspect-[16/10] my-1 bg-white rounded-2xl p-2 border border-slate-200 shadow-lg shadow-slate-200/60">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100">
                <Image 
                  src="/images/facebook-optimum-01-06-26.jpg.jpeg" 
                  alt="Optimistic Disability team empowering individual progress and access" 
                  fill
                  sizes="(max-width: 1024px) 100vw"
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Optimistic Disability is a purpose-driven organization dedicated to empowering persons with disabilities through inclusion, opportunity, dignity, and positive social change.
            </p>

            {/* Core Pillars Checklist Layout */}
            <div className="space-y-3.5 pt-2">
              {[
                "Promoting inclusion and positive representation",
                "Support education, employment, and entrepreneurship opportunities",
                "Encourage accessibility and inclusive environments",
                "Advocate for equal rights, independence, and social inclusion",
                "Foster optimism, confidence, and self-belief among people with disabilities"
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-0.5 text-[#f37421] shrink-0">
                    <CircleCheck className="w-5 h-5 stroke-[2.25]" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 font-medium">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive Custom Next.js Link Action Button */}
            <div className="pt-4">
              <Link 
                href="/aboutUs"
                className="inline-flex items-center justify-center bg-[#f37421] hover:bg-[#f68c1f] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#f37421] focus:ring-offset-2"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Uncropped Image Display for Desktops */}
          <div className="hidden lg:flex lg:col-span-5 order-1 lg:order-2 relative w-full items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#fdcb11]/20 to-[#f37421]/10 rounded-[2rem] rotate-3 transform scale-95 filter blur-sm"></div>
            <div className="relative w-full aspect-[4/3] rounded-2xl p-3 bg-orange-100 shadow-2xl shadow-orange-300/60 border border-orange-100 z-10">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-orange-100">
                <Image 
                  src="/images/facebook-optimum-01-06-26.jpg.jpeg" 
                  alt="Optimistic Disability team empowering individual progress and access" 
                  fill
                  priority
                  sizes="45vw"
                  className="object-contain" 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
