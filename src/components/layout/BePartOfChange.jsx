// import React from 'react'
// import { HandCoins, Heart, UsersRound, MoveRight } from 'lucide-react';
// import Link from 'next/link';


// export default function BePartOfChange () {
//   return (
//     <div className='relative overflow-hidden py-8 md:py-10 bg-orange-400 flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-20 xl:gap-40 px-4 md:px-8'>
//         <div className='absolute top-5 left-5 md:left-25 lg:left-20 xl:left-75 w-24 md:w-35 h-24 md:h-35 rounded-full bg-orange-100/20'></div>
//         <div className='absolute bottom-5 md:bottom-8 lg:top-5 right-5 md:right-25 lg:right-20 xl:right-75 w-15 md:w-20 lg:w-35 h-15 md:h-20 lg:h-35 rounded-full bg-orange-100/20'></div>
//         <div className='relative z-10 flex flex-col sm:flex-row lg:flex-row items-center lg:items-start text-center sm:text-left gap-3 md:gap-5'>
//             <HandCoins strokeWidth={1} size={120} className='w-20 h-20 md:w-28 md:h-28 lg:w-[120px] lg:h-[120px] shrink-0'/>
//             <div className='flex flex-col text-white'>
//                <p className='text-xl md:text-2xl lg:text-3xl font-bold'>Be a part of change.</p>
//                <p className='text-sm md:text-base lg:text-lg'>Your support can empower lives and build<br className='hidden sm:block'/> a more inclusive and compassionate society.</p>
//             </div>
//         </div>
//         <div className='relative z-10 flex flex-col sm:flex-row lg:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-6'>
//             <Link href="/joinUs">
//                 <button className='flex w-full sm:w-auto flex-row items-center justify-center gap-2 border-2 border-white px-4 py-3 rounded-lg'>
//                     <Heart size={25}/>
//                     Donate Now
//                     </button>
//             </Link>
//             <Link href="/joinUs">
//                 <button className='flex w-full sm:w-auto flex-row items-center justify-center gap-2 border-2 border-white px-4 py-3 rounded-lg'>
//                     <UsersRound size={25}/>
//                     Volunteer
//                 </button>
//             </Link>
//             <Link href="/joinUs">
//                 <button className='flex w-full sm:w-auto flex-row items-center justify-center gap-2 border-2 border-white px-4 py-3 rounded-lg'>
//                     <MoveRight size={25}/>
//                     Join Us
//                 </button>
//             </Link>
//         </div>
//     </div>
//   )
// }

import React from 'react'
import { HandCoins, Heart, UsersRound, MoveRight } from 'lucide-react'
import Link from 'next/link'

export default function BePartOfChange() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20 bg-gradient-to-r from-[#f37421] via-[#f68c1f] to-[#f37421] text-white">
      
      {/* High-End Decorative Background Auras */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#fdcb11]/20 rounded-full mix-blend-screen filter blur-3xl pointer-events-none animate-pulse duration-4000"></div>
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full mix-blend-overlay filter blur-2xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-16">
          
          {/* Left Side: Impact Statement */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 max-w-2xl">
            <div className="p-4.5 bg-white/15 rounded-2xl shrink-0 backdrop-blur-md shadow-inner border border-white/10">
              <HandCoins className="w-14 h-14 md:w-16 md:h-16 stroke-[1.25]" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Be a part of change.
              </h2>
              <p className="text-base md:text-lg text-orange-50/90 leading-relaxed max-w-lg">
                Your support can empower lives and build a more inclusive, accessible, and compassionate society for everyone.
              </p>
            </div>
          </div>

          {/* Right Side: Redesigned Premium Button Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full xl:w-auto shrink-0">
            
            {/* Primary Elevated Action: Donate */}
            <Link 
              href="/joinUs" 
              className="group relative inline-flex items-center justify-center gap-3 bg-white text-[#f37421] px-7 py-4 rounded-2xl font-bold text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle hover gleam effect inside the button */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="bg-orange-50 p-2 rounded-lg shrink-0">
                <Heart className="w-5 h-5 fill-[#f37421] stroke-none" />
              </div>
              <span>Donate Now</span>
            </Link>

            {/* Secondary Outlined Action: Volunteer */}
            <Link 
              href="/joinUs" 
              className="group inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white px-7 py-4 rounded-2xl font-semibold text-base border-2 border-white/40 hover:border-white transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-md"
            >
              <div className="bg-white/10 p-2 rounded-lg shrink-0 group-hover:bg-white/20 transition-colors">
                <UsersRound className="w-5 h-5 stroke-[2]" />
              </div>
              <span>Volunteer</span>
            </Link>

            {/* Accent Gold Action: Join Us */}
            <Link 
              href="/joinUs" 
              className="group inline-flex items-center justify-center gap-3 bg-[#fdcb11] hover:bg-[#ffda33] text-slate-900 px-7 py-4 rounded-2xl font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl shadow-[#fdcb11]/30 hover:-translate-y-0.5"
            >
              <span>Join Us</span>
              <div className="bg-black/5 p-2 rounded-lg shrink-0 group-hover:bg-black/10 transition-colors">
                <MoveRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </Link>

          </div>

        </div>
      </div>
    </section>
  )
}