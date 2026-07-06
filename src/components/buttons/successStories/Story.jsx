// import React from 'react'
// import Image from 'next/image'

// export default function Story ({story}) {
//   return (
//     <div className='px-6 py-10'>
//       <div className='relative h-64 lg:h-150 w-full'>
//         <Image
//           src={story.image}
//           alt={story.title}
//           fill
//           className='object-cover rounded-lg'
//         />
//       </div>
//       <h1 className='text-2xl font-bold mt-6 text-black'>{story.title}</h1>
//       <p className='mt-4 text-neutral-700'>{story.description}</p>
//     </div>
//   )
// }

import React from 'react'
import Image from 'next/image'

export default function Story ({story}) {
  return (
    <div className='max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14 w-full'>
      <div className='relative h-[280px] sm:h-[420px] md:h-[480px] lg:h-[520px] w-full overflow-hidden bg-slate-100 border border-slate-200/50 shadow-sm rounded-2xl'>
        <Image
          src={story.image}
          alt={story.title}
          fill
          priority
          className='object-cover rounded-2xl'
        />
      </div>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mt-8 text-slate-900 leading-tight'>{story.title}</h1>
      <p className='mt-4 text-base sm:text-lg leading-relaxed text-slate-600'>{story.description}</p>
    </div>
  )
}
