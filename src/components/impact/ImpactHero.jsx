// import Image from 'next/image'
// import React from 'react'
// import { MoveRight } from 'lucide-react'
// import Link from 'next/link'

// export default function ImpactHero () {
//   return (
//     <section className='overflow-hidden bg-white'>
//       <div className='flex min-h-[520px] flex-col lg:min-h-[500px] xl:min-h-[560px] xl:flex-row'>
//         <div className='relative z-20 flex w-full flex-col justify-center px-4 py-12 sm:px-8 md:px-12 xl:w-[44%] lg:py-16 xl:pl-20'>
//           <p className='text-sm md:text-base font-bold text-orange-500'>Our Impact</p>
//           <h1 className='mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-neutral-900'>
//             Real Stories.
//             <br />
//             <span className='text-orange-500'>Real Change.</span>
//           </h1>
//           <p className='mt-8 text-base md:text-lg lg:text-xl leading-relaxed text-neutral-700'>
//             Every number represents a life empowered.
//             <br className='hidden sm:block' />
//             Every story shows the power of inclusion.
//           </p>
//           <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
//             <Link href="/explorePrograms">
//               <button className='flex items-center justify-center gap-4 rounded-lg bg-orange-500 px-7 py-4 font-bold text-white hover:bg-orange-300 w-fit'>
//                 See Our Programs
//                 <MoveRight size={22} />
//               </button>
//             </Link>  
//             <Link href="/joinUs">
//               <button className='flex items-center justify-center gap-4 rounded-lg border-2 border-orange-300 px-7 py-4 font-bold text-neutral-900 hover:bg-orange-300 w-fit'>
//                 Get Involved
//                 <MoveRight className='text-orange-500' size={22} />
//               </button>
//             </Link>
//           </div>
//         </div>

//         <div className='relative h-auto w-full xl:w-[56%] xl:h-auto border-l border-l-white border-b border-b-white'>
//           <div className='relative h-auto w-full overflow-hidden xl:h-full border-l border-l-white'>
//             <Image
//               src='/images/ImpactBanner.png'
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

const impactStats = [
  { value: '2,000+', label: 'Lives Empowered' },
  { value: '15+', label: 'Years of Impact' },
  { value: '50+', label: 'Community Partners' },
]

export default function ImpactHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] xl:min-h-[760px] flex items-end">
      {/* Full-bleed background image */}
      <Image
        src="/images/ImpactBanner.png"
        alt="Community members participating in an inclusive program"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-neutral-900/10" />

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-5 sm:px-8 lg:px-12 pb-12 sm:pb-16 lg:pb-20">
        <span className="inline-block text-sm md:text-base font-semibold uppercase tracking-widest text-orange-400 mb-4">
          Our Impact
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white max-w-3xl">
          Real Stories.{' '}
          <span className="text-orange-400">Real Change.</span>
        </h1>

        <p className="mt-6 text-base md:text-lg lg:text-xl leading-relaxed text-neutral-200 max-w-xl">
          Every number represents a life empowered. Every story shows the power of inclusion.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/explorePrograms"
            className="group flex w-fit items-center justify-center gap-3 rounded-lg bg-orange-500 px-7 py-4 font-bold text-white transition-all duration-200 hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          >
            See Our Programs
            <MoveRight size={22} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/joinUs"
            className="group flex w-fit items-center justify-center gap-3 rounded-lg border-2 border-white/40 bg-white/5 backdrop-blur-sm px-7 py-4 font-bold text-white transition-all duration-200 hover:bg-white hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          >
            Get Involved
            <MoveRight size={22} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Stat cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/10 backdrop-blur-md px-5 py-4"
            >
              <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-neutral-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}