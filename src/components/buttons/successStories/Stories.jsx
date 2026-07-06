// import React from 'react'
// import Image from 'next/image'
// import { ArrowRight, Quote } from 'lucide-react'
// import Link from 'next/link'

// export default function Stories () {
//     const stories = [
//     {
//     image: '/images/tailor.png',
//     title: 'From Learning to Earning',
//     description: 'After completing our skill development program, Rafiq gained confidence and now runs his own tailoring business.',
//     slug: "from-learning-to-earning"
//     },
//     {
//     image: '/images/Student.png',
//     title: 'Education Changed Everything',
//     description: 'With our educational support and assistive resources, Farzana is now pursuing her degree in English Literature.',
//     slug: 'education-changed-everything'
//     },
//     {
//     image: '/images/JobHolder.png',
//     title: 'A New Career, A New Beginning',
//     description: 'Through employment assistance and career counseling, Hasan found a job he loves as a digital marketing executive.',
//     slug: 'a-new-career-a-new-beginning'
//     },
//    ]
//   return (
//         <div className='mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-4 py-5'>
//           {stories.map((story, index) => (
//             <div key={index} className='overflow-hidden rounded-lg bg-white shadow-sm'>
//               <div className='relative h-56 sm:h-64 md:h-56 lg:h-64'>
//                 <Image
//                   src={story.image}
//                   alt={story.title}
//                   fill
//                   className='object-cover'
//                 />
//               </div>
//               <div className='relative px-6 pb-6 pt-7 md:px-8'>
//                 <div className='absolute -top-8 left-6 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white'>
//                   <Quote size={26} fill='currentColor' />
//                 </div>
//                 <h3 className='text-base md:text-lg font-bold text-neutral-900'>{story.title}</h3>
//                 <p className='mt-3 text-sm md:text-base leading-relaxed text-neutral-700'>{story.description}</p>
//                 <Link href={`/successStories/${story.slug}`}>
//                   <button className='mt-4 flex items-center gap-2 text-sm md:text-base font-bold text-orange-500 hover:text-orange-600'>
//                     Read Full Story
//                     <ArrowRight size={18} />
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//   )
// }

import React from 'react'
import Image from 'next/image'
import { ArrowRight, Quote } from 'lucide-react'
import Link from 'next/link'

export default function Stories () {
    const stories = [
    {
    image: '/images/tailor.png',
    title: 'From Learning to Earning',
    description: 'After completing our skill development program, Rafiq gained confidence and now runs his own tailoring business.',
    slug: "from-learning-to-earning"
    },
    {
    image: '/images/Student.png',
    title: 'Education Changed Everything',
    description: 'With our educational support and assistive resources, Farzana is now pursuing her degree in English Literature.',
    slug: 'education-changed-everything'
    },
    {
    image: '/images/JobHolder.png',
    title: 'A New Career, A New Beginning',
    description: 'Through employment assistance and career counseling, Hasan found a job he loves as a digital marketing executive.',
    slug: 'a-new-career-a-new-beginning'
    },
   ]
  return (
        <div className='container mx-auto max-w-7xl px-4 py-8'>
            <div className='mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full'>
              {stories.map((story, index) => (
                <div key={index} className='group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-1'>
                  <div className='w-full'>
                    <div className='relative h-56 sm:h-60 md:h-56 lg:h-60 w-full overflow-hidden bg-slate-100'>
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className='object-cover transition-transform duration-500 group-hover:scale-105'
                      />
                    </div>
                    <div className='relative px-6 pb-6 pt-8 md:px-7'>
                      <div className='absolute -top-7 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f37421] text-white shadow-md shadow-orange-500/20'>
                        <Quote size={20} fill='currentColor' />
                      </div>
                      <h3 className='text-lg font-bold text-slate-900 tracking-tight leading-snug'>{story.title}</h3>
                      <p className='mt-3 text-sm leading-relaxed text-slate-500'>{story.description}</p>
                    </div>
                  </div>
                  <div className='px-6 pb-6 md:px-7 pt-2'>
                    <Link href={`/successStories/${story.slug}`} className='block w-full'>
                      <button className='flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#f37421] group-hover:text-orange-600 transition-colors duration-200'>
                        Read Full Story
                        <ArrowRight size={14} className='transition-transform duration-200 group-hover:translate-x-1' />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
        </div>
  )
}