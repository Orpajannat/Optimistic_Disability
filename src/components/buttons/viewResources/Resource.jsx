// import React from 'react'
// import Image from 'next/image'

// export default function Resource ({resource}) {
//   return (
//     <div className='px-6 py-10'>
//         <div className='relative h-64 lg:h-150 w-full'>
//             <Image
//               src={resource.image}
//               alt={resource.title}
//               fill
//               className='object-cover rounded-lg'
//             />
//         </div>
//         <h1 className='text-2xl font-bold mt-6 text-black'>{resource.title}</h1>
//         <p className='mt-4 text-neutral-700'>{resource.description}</p>
//     </div>
//   )
// }

import React from 'react'
import Image from 'next/image'

export default function Resource ({resource}) {
  return (
    <div className='relative py-12 md:py-20 overflow-hidden bg-slate-950 min-h-screen text-white'>
        {/* Abstract Architectural Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#1e293b,transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        
        {/* Kinetic Light Streaks */}
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-[150px] pointer-events-none" />
        <div className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />

        <div className='relative max-w-4xl mx-auto px-6 py-10 z-10 w-full'>
          {/* Main Display Container with Cyberpunk Glassmorphism Rim */}
          <div className='relative h-[280px] sm:h-[420px] md:h-[480px] lg:h-[520px] w-full overflow-hidden bg-slate-900/40 border border-slate-800/80 shadow-2xl rounded-2xl backdrop-blur-md'>
            <Image
              src={resource.image}
              alt={resource.title}
              fill
              priority
              className='object-cover opacity-95 transition-opacity duration-300'
            />
          </div>
          
          {/* Content Layout Channel */}
          <div className="relative mt-10 space-y-5">
            <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-50 leading-tight'>{resource.title}</h1>
            <p className='text-base sm:text-lg leading-relaxed text-slate-400 max-w-3xl'>{resource.description}</p>
          </div>
        </div>
    </div>
  )
}