// import React from 'react'

// export default function StoryHero () {
//   return (
//     <div className='container mx-auto flex flex-col items-start justify-start gap-5 px-4 py-10'>
//         <h1 className='text-lg md:text-xl lg:text-2xl text-black font-bold'>Our Success Stories</h1>
//         <div className='border-t-3 border-orange-400 rounded-full w-12'></div>
//         <p className='text-xl md:text-2xl lg:text-4xl text-black font-semibold text-wrap'>Every Story is a Step Toward Inclusion.</p>
//         <p className='text-sm md:text-base text-neutral-500 text-wrap'>Discover inspiring journeys of individuals whose lives have been transformed through education, employment,<br className='hidden lg:block'/> community support, and opportunity. These stories reflect the power of inclusion, resilience, and hope.</p>
//     </div>
//   )
// }

import React from 'react'

export default function StoryHero () {
  return (
    <div className='container mx-auto flex flex-col items-start justify-start gap-5 px-4 py-12 md:py-16 max-w-7xl'>
        <h1 className='text-xs md:text-sm text-[#f37421] font-bold uppercase tracking-widest'>Our Success Stories</h1>
        <div className='h-1.5 w-16 bg-[#f37421] rounded-full'></div>
        <p className='text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase text-wrap'>Every Story is a Step Toward Inclusion.</p>
        <p className='text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl text-wrap'>Discover inspiring journeys of individuals whose lives have been transformed through education, employment,<br className='hidden lg:block'/> community support, and opportunity. These stories reflect the power of inclusion, resilience, and hope.</p>
    </div>
  )
}