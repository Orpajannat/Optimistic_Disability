// import Image from 'next/image'
// import React from 'react'
// import { MoveRight } from 'lucide-react';
// import Link from 'next/link';

// export default function AboutHero () {
//   return (
//     <div className='flex flex-col items-center justify-center gap-10 bg-amber-100/20 px-5 py-10 md:py-10 lg:py-10 xl:py-0 sm:px-10 lg:flex-row lg:justify-around lg:gap-8'>
//         <div className='flex flex-col items-start justify-start gap-1'>
//             <h1 className='text-orange-500 text-lg md:text-xl pb-4'>About Us</h1>
//             <p className='text-black text-2xl md:text-3xl lg:text-5xl font-bold'>Empowering Abilities.</p>
//             <p className='text-orange-500 text-2xl md:text-3xl lg:text-5xl font-bold pb-4'>Creating Opportunities.</p>
//             <p className='text-base text-neutral-500'>Together we&apos;re building an inclusive future where<br/> everyone can participate with dignity and confidence.</p>
//             <div className='flex flex-row flex-wrap gap-4 pt-5 sm:gap-10'>
//                 <Link href="/explorePrograms">
//                   <button className='flex flex-row items-center gap-2 px-4 py-3 bg-orange-500 hover:bg-orange-300 rounded-lg text-white'>
//                     Our Programs
//                     <MoveRight size={20}/>
//                   </button>
//                 </Link>
//                 <Link href="/joinUs">
//                     <button className='flex flex-row items-center gap-2 px-4 py-3 border-2 border-orange-400 hover:border-white hover:bg-orange-300 rounded-lg text-black hover:text-white'>
//                         Get Involved
//                         <MoveRight color="#f46b10" size={20}/>
//                     </button>
//                 </Link>
//             </div>
//         </div>
//         <div className='relative aspect-8/5 w-full max-w-160 shrink-0 lg:w-[52vw]'>
//             <div className='absolute inset-0 rounded-bl-full bg-orange-200'></div>
//             <Image src="/images/aboutHero.jpg" alt="aboutherobanner" width={600} height={300} className='absolute top-0 right-0 h-auto w-[93.75%] rounded-tl-full border-l-3 border-orange-400'/> 
//         </div>
//     </div>
//   )
// }

import Image from 'next/image'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-b from-amber-50/40 to-white overflow-hidden">
      <div className="container mx-auto px-5 sm:px-10 lg:px-8 xl:px-12 py-14 sm:py-16 lg:py-20 xl:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left content */}
          <div className="flex flex-col items-start max-w-xl">
            <span className="inline-flex items-center text-orange-600 bg-orange-50 border border-orange-100 text-xs sm:text-sm font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-5">
              About Us
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="text-slate-900">Empowering Abilities. </span>
              <span className="text-orange-500">Creating Opportunities.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 leading-relaxed mt-6 max-w-md">
              Together we&apos;re building an inclusive future where everyone can participate with dignity and confidence.
            </p>

            <div className="flex flex-row flex-wrap gap-4 mt-8">
              <Link
                href="/explorePrograms"
                className="group flex items-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-medium shadow-sm shadow-orange-500/20 hover:shadow-md hover:shadow-orange-500/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              >
                Our Programs
                <MoveRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/joinUs"
                className="group flex items-center gap-2 px-6 py-3.5 border-2 border-orange-200 bg-white hover:bg-orange-500 hover:border-orange-500 rounded-lg text-slate-700 hover:text-white font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              >
                Get Involved
                <MoveRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust strip — small, professional detail */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-slate-200 w-full">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">15+</p>
                <p className="text-xs sm:text-sm text-slate-500">Years of Service</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">2,000+</p>
                <p className="text-xs sm:text-sm text-slate-500">Individuals Supported</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">50+</p>
                <p className="text-xs sm:text-sm text-slate-500">Community Partners</p>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative w-full max-w-160 lg:w-[46vw] shrink-0">
            <div className="relative aspect-8/5">
              <div className="absolute inset-0 rounded-bl-[4rem] bg-gradient-to-br from-orange-200 to-orange-100" />
              <div className="absolute top-0 right-0 w-[93.75%] h-full rounded-tl-[4rem] overflow-hidden shadow-xl shadow-orange-900/10 border-l-4 border-orange-400">
                <Image
                  src="/images/aboutHero.jpg"
                  alt="Volunteers and community members collaborating together"
                  fill
                  sizes="(min-width: 1024px) 46vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}