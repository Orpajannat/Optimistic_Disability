// import Image from 'next/image'
// import React from 'react'
// import { MoveRight } from 'lucide-react'
// import Link from 'next/link'

// export default function ResourceHero () {
//   return (
//     <section className='overflow-hidden bg-white'>
//       <div className='flex min-h-[520px] flex-col lg:min-h-[500px] xl:min-h-[560px] xl:flex-row'>
//         <div className='relative z-20 flex w-full flex-col justify-center px-4 py-12 sm:px-8 md:px-12 xl:w-[44%] lg:py-16 xl:pl-20'>
//           <p className='text-sm md:text-base font-bold text-orange-500'>RESOURCES</p>
//           <h1 className='mt-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-neutral-900 pb-5'>
//             Knowledge.
//             <br />
//             <span className='text-neutral-900'>Support.</span>
//             <br />
//             <span className='text-orange-500'>Empowerment.</span>
//           </h1>
//           <div className='border border-t-2 border-orange-500 w-15 rounded-xl'></div>
//           <p className='mt-8 text-base md:text-lg lg:text-xl leading-relaxed text-neutral-700'>
//             Helpful information, practical tools, and trusted resources
//             <br className='hidden sm:block' />
//             to support individuals with disabilities, families,
//             <br className='hidden sm:block' />
//             caregivers, and communities.
//           </p>
//           <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
//             <Link href="/viewResources">
//               <button className='flex items-center justify-center gap-4 rounded-lg bg-orange-500 px-7 py-4 font-bold text-white hover:bg-orange-300 w-fit'>
//                 Explore Resources
//                 <MoveRight size={22} />
//               </button>
//             </Link>
//             <Link href="/joinUs">
//               <button className='flex items-center justify-center gap-4 rounded-lg border-2 border-orange-300 px-7 py-4 font-bold text-neutral-900 hover:bg-orange-300 w-fit'>
//                 Get Support
//                 <MoveRight className='text-orange-500' size={22} />
//               </button>
//             </Link>
//           </div>
//         </div>

//         <div className='relative h-auto w-full xl:w-[56%] xl:h-auto border-l border-l-white border-b border-b-white'>
//           <div className='relative h-auto w-full overflow-hidden xl:h-full border-l border-l-white'>
//             <Image
//               src='/images/resourcesBanner.png'
//               alt='impactBanner'
//               width={1280}
//               height={720}
//               priority
//               sizes='(max-width: 1280px) 100vw, 56vw'
//               className='block h-auto w-full xl:h-full xl:object-cover xl:object-center border-b border-b-white'
//             />
//             <div className='absolute inset-y-[-18%] -left-[230px] z-10 hidden w-[430px] rounded-r-[100%] border-r-2 border-r-orange-200 bg-white xl:block'></div>
//             <div className='absolute inset-y-[-24%] -left-[248px] z-0 hidden w-[460px] rounded-r-[100%] bg-orange-100/40 xl:block'></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import Image from 'next/image'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'

export default function ResourceHero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-24">

        {/* Editorial top row: eyebrow + rule */}
        <div className="flex items-center gap-4 mb-8 lg:mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Resources
          </span>
          <div className="h-px flex-1 bg-slate-200" />
          <span className="hidden sm:block text-xs uppercase tracking-widest text-slate-400">
            Vol. 01 — Support &amp; Guidance
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">

          {/* Big serif headline — spans most of the width, editorial-style */}
          <div className="lg:col-span-8">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-slate-900">
              Knowledge.
              <br />
              Support.
              <br />
              <span className="italic text-orange-500">Empowerment.</span>
            </h1>
          </div>

          {/* Deck / supporting text — offset to the side like a magazine dek */}
          <div className="lg:col-span-4 lg:pb-3">
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 border-l-2 border-orange-200 pl-5">
              Helpful information, practical tools, and trusted resources to support individuals with disabilities, families, caregivers, and communities.
            </p>
          </div>
        </div>

        {/* Photo — large, full-width editorial image with caption */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-8 relative aspect-16/10 sm:aspect-2/1 lg:aspect-auto lg:h-[440px] xl:h-[520px] overflow-hidden">
            <Image
              src="/images/resourcesBanner.png"
              alt="Resources and tools available to support individuals with disabilities and their families"
              fill
              priority
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Right rail: caption + CTAs, magazine sidebar style */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full gap-8 lg:pt-2">
            <p className="text-sm text-slate-400 italic border-t border-slate-200 pt-4">
              Photo — Members of our community accessing support programs.
            </p>

            <div className="flex flex-col gap-4">
              <Link
                href="/viewResources"
                className="group flex items-center justify-between gap-4 border-b-2 border-slate-900 pb-3 font-serif text-xl sm:text-2xl text-slate-900 transition-colors duration-200 hover:border-orange-500 hover:text-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                Explore Resources
                <MoveRight size={24} className="shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/joinUs"
                className="group flex items-center justify-between gap-4 border-b border-slate-300 pb-3 text-base sm:text-lg text-slate-600 transition-colors duration-200 hover:border-orange-500 hover:text-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                Get Support
                <MoveRight size={20} className="shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}