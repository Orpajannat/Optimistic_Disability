// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// export default function HeroBanner () {
//   return (
//     <div className='relative w-full overflow-hidden h-[200px] sm:h-[320px] md:h-[500px] lg:h-[700px] xl:h-[850px]'>
//         <Image src="/images/HeroBanner.png" alt="heroBanner" fill priority sizes="100vw" className='object-cover'/>
//         <div className="absolute top-0 right-0 w-30 md:w-80 lg:w-120 xl:w-150 h-30 md:h-80 lg:h-120 xl:h-150 bg-orange-500 rounded-bl-full"></div>
//         <Image src="/images/Banner2.jpg" alt="banner1" width={500} height={400} className="hidden md:hidden lg:hidden xl:block absolute top-0 right-0 rounded-bl-full"/>
//         <Image src="/images/Banner2.jpg" alt="banner1" width={400} height={300} className="hidden md:hidden lg:block xl:hidden absolute top-0 right-0 rounded-bl-full"/>
//         <Image src="/images/Banner2.jpg" alt="banner1" width={250} height={180} className="hidden md:block lg:hidden xl:hidden absolute top-0 right-0 rounded-bl-full"/>
//         <Image src="/images/Banner2.jpg" alt="banner1" width={100} height={80} className="block md:hidden lg:hidden xl:hidden absolute top-0 right-0 rounded-bl-full"/>
//         <div className='absolute inset-0 container mx-auto px-4 md:px-4 lg:px-10 xl:px-0 flex items-center'>
//           <div className='flex w-[145px] sm:w-[220px] md:w-[420px] lg:w-[520px] xl:w-[520px] flex-col items-start gap-2 sm:gap-3 md:gap-4 lg:gap-5 px-4'>
//             <p className='w-full text-[8px] sm:text-xs md:text-xl lg:text-3xl xl:text-5xl leading-tight text-black'>
//               Our <b className='text-orange-400'>Vision</b> is to build<br/> an inclusive society<br/> where every person<br/> with a disability can<br/> live with <b className='text-orange-400'>confidence</b>
//             </p>
//             <Link href="/aboutUs">
//               <button className='block bg-orange-400 hover:bg-orange-500 rounded text-white text-[10px] sm:text-xs md:text-base lg:text-lg px-2 sm:px-3 lg:px-4 py-1 lg:py-2 max-w-fit'>
//                   Read More
//               </button>
//             </Link>
//           </div>
//         </div>
//     </div>
//   )
// }


import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroBanner() {
  return (
    <section className="relative w-full bg-slate-50 overflow-hidden border-b border-slate-100">
      {/* Structural Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[480px] sm:min-h-[550px] md:min-h-[600px] lg:h-[650px] xl:h-[720px] py-12 lg:py-0">
          
          {/* Left Content Column */}
          <div className="z-10 lg:col-span-7 flex flex-col justify-center items-start space-y-5 sm:space-y-6 md:space-y-8 max-w-xl lg:max-w-none">
            
            {/* Subtle Brand Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-[#fdcb11]/10 border border-[#fdcb11]/30 px-3 py-1 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#f37421] animate-pulse"></span>
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-slate-800 uppercase">
                Optimistic Disability Services
              </p>
            </div>

            {/* Typography Hierarchy anchored with core vision principles */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-light text-slate-900 tracking-tight leading-[1.15]">
              Our <span className="font-bold text-[#f37421]">Vision</span> is to build an inclusive society where every person with a disability can live with <span className="font-bold text-[#f37421]">confidence</span> and <span className="font-medium inline-block relative after:absolute after:bottom-1 after:left-0 after:w-full after:h-2 after:bg-[#fdcb11]/30 after:-z-10">independence</span>.
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-lg">
              Empowering unique strengths, breaking down structural barriers, and unlocking full potential across our communities.
            </p>
            
            {/* Interactive Call To Action Buttons (Cleaned Next.js 13+ Link structure) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link 
                href="/aboutUs" 
                className="group inline-flex items-center justify-center bg-[#f37421] hover:bg-[#f68c1f] text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-xl shadow-lg shadow-[#f37421]/10 hover:shadow-xl hover:shadow-[#f68c1f]/20 transform hover:-translate-y-0.5 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#f37421] focus:ring-offset-2"
              >
                Read Our Story
                <svg className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>

              <Link 
                href="/services" 
                className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-xl border border-slate-200 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Image/Visual Column */}
          <div className="relative lg:col-span-5 w-full h-full min-h-[320px] sm:min-h-[420px] lg:min-h-0 flex items-center justify-center">
            {/* Elegant Sun-Ray Toned Geometric Accent Layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#fdcb11]/20 to-[#f37421]/10 rounded-[2rem] rotate-3 transform scale-95 lg:scale-100 filter blur-sm"></div>
            
            {/* Main Premium Framed Hero Image */}
            <div className="relative w-full h-full aspect-[4/3] lg:aspect-square xl:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/60 border-4 border-white z-10">
              <Image 
                src="/images/Banner2.jpg" 
                alt="Empowering and inclusive disability services support network" 
                fill 
                priority 
                sizes="(max-width: 1024px) 100vw, 45vw" 
                className="object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}