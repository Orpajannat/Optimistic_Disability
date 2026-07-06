// import Image from 'next/image'
// import React from 'react'
// import { ArrowRight, Quote } from 'lucide-react'
// import Link from 'next/link'

// const stories = [
//   {
//     image: '/images/tailor.png',
//     title: 'From Learning to Earning',
//     description: 'After completing our skill development program, Rafiq gained confidence and now runs his own tailoring business.',
//     slug: "from-learning-to-earning"
//   },
//   {
//     image: '/images/Student.png',
//     title: 'Education Changed Everything',
//     description: 'With our educational support and assistive resources, Farzana is now pursuing her degree in English Literature.',
//     slug: 'education-changed-everything'
//   },
//   {
//     image: '/images/JobHolder.png',
//     title: 'A New Career, A New Beginning',
//     description: 'Through employment assistance and career counseling, Hasan found a job he loves as a digital marketing executive.',
//     slug: 'a-new-career-a-new-beginning'
//   },
// ]

// export default function SuccessStories () {
//   return (
//     <section className='relative overflow-hidden bg-orange-50/40 py-12 md:py-16 lg:py-20'>
//       <div className='absolute left-0 top-6 hidden h-28 w-20 bg-[radial-gradient(circle,#fb923c_2px,transparent_2px)] [background-size:18px_18px] opacity-40 md:block'></div>
//       <div className='absolute bottom-3 right-0 hidden h-28 w-20 bg-[radial-gradient(circle,#fb923c_2px,transparent_2px)] [background-size:18px_18px] opacity-40 md:block'></div>

//       <div className='container relative z-10 mx-auto px-4 md:px-6 lg:px-8 xl:px-4'>
//         <div className='flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-between'>
//           <div className='w-full text-center'>
//             <p className='text-xs md:text-sm font-bold uppercase text-orange-500'>Success Stories</p>
//             <h2 className='mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900'>Lives Transformed, Futures Reimagined</h2>
//           </div>
//           <Link href="/successStories">
//             <button className='flex shrink-0 items-center gap-2 text-sm md:text-base font-bold text-orange-500 hover:text-orange-600 md:mt-8'>
//               View All Stories
//               <ArrowRight size={18} />
//             </button>
//           </Link>
//         </div>

//         <div className='mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8'>
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
//       </div>
//     </section>
//   )
// }

import Image from 'next/image'
import React from 'react'
import { ArrowRight, Quote } from 'lucide-react'
import Link from 'next/link'

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

export default function SuccessStories() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-transparent py-14 sm:py-16 lg:py-20">
      <div className="absolute left-0 top-10 hidden h-28 w-20 bg-[radial-gradient(circle,#fb923c_2px,transparent_2px)] [background-size:18px_18px] opacity-20 md:block" />
      <div className="absolute bottom-10 right-0 hidden h-28 w-20 bg-[radial-gradient(circle,#fb923c_2px,transparent_2px)] [background-size:18px_18px] opacity-20 md:block" />

      <div className="container relative z-10 mx-auto px-5 sm:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[#f37421] text-xs font-bold uppercase tracking-widest">
              Success Stories
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 uppercase">
              Lives Transformed, Futures Reimagined
            </h2>
          </div>
          
          <Link 
            href="/successStories"
            className="group inline-flex items-center justify-center gap-2 text-sm font-bold text-[#f37421] hover:text-[#f68c1f] transition-colors shrink-0 self-center sm:self-auto"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="relative h-56 sm:h-64 md:h-56 lg:h-64 w-full bg-slate-50">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              
              <div className="relative flex flex-1 flex-col px-6 pb-8 pt-10 md:px-8">
                <div className="absolute -top-7 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f37421] text-white shadow-md shadow-orange-500/20">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
                
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {story.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {story.description}
                  </p>
                </div>
                
                <div className="pt-5 mt-5 border-t border-slate-50">
                  <Link 
                    href={`/successStories/${story.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-bold text-[#f37421] hover:text-[#f68c1f] transition-colors"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}