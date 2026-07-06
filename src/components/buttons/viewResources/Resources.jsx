// import Image from 'next/image'
// import React from 'react'
// import { ArrowRight} from 'lucide-react'
// import Link from 'next/link'

// export default function Resources () {
//     const resources = [
//   {
//     image: '/images/resource1.png',
//     badge: 'GUIDE',
//     backgroundColor:'bg-orange-100/40',
//     borderColor: 'border-orange-200',
//     textColor: 'text-orange-400',
//     title: 'Guide to Disability Rights',
//     description: 'A simple guide to understanding your legal rights, protections, and available support services.',
//     slug: "1"
//   },
//   {
//     image: '/images/resource2.png',
//     badge: 'ARTICLE',
//     backgroundColor:'bg-blue-100/40',
//     borderColor: 'border-blue-200',
//     textColor: 'text-blue-400',
//     title: 'Building Confidence Every Day',
//     description: 'Practical tips and inspiring ideas to help build self-esteem, resilience, and independence.',
//     slug: "2"
//   },
//   {
//     image: '/images/resource3.png',
//     badge: 'WEBINAR',
//     backgroundColor:'bg-green-100/40',
//     borderColor: 'border-green-200',
//     textColor: 'text-green-400',
//     title: 'Inclusive Education for All',
//     description: 'Watch our expert webinar on creating accessible and inclusive learning environments.',
//     slug: "3"
//   },
//   {
//     image: '/images/resource4.png',
//     badge: 'CHECKLIST',
//     backgroundColor:'bg-purple-100/40',
//     borderColor: 'border-purple-200',
//     textColor: 'text-purple-400',
//     title: 'Accessibility Checklist',
//     description: 'Download a practical checklist to help make workplaces, schools, and public spaces more accessible.',
//     slug: "4"
//   },
// ]
//   return (
//     <div className='mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-3 md:px-5 lg:px-7 xl:px-10 py-5'>
//         {resources.map((resource, index) => (
//             <div key={index} className='overflow-hidden rounded-lg bg-white shadow-sm'>
//               <div className='relative h-56 sm:h-64 md:h-56 lg:h-64'>
//                 <Image
//                   src={resource.image}
//                   alt={resource.title}
//                   fill
//                   className='object-cover'
//                 />
//               </div>
//               <div className='px-6 pb-6 pt-7 md:px-8'>
//                 <p className={`p-1 ${resource.backgroundColor} border ${resource.borderColor} rounded-xl w-fit text-xs ${resource.textColor} font-bold`}>{resource.badge}</p>
//                 <h3 className='text-base md:text-lg font-bold text-neutral-900 pt-3'>{resource.title}</h3>
//                 <p className='mt-3 text-sm md:text-base leading-relaxed text-neutral-700'>{resource.description}</p>
//                 <Link href={`/viewResources/${resource.slug}`}>
//                   <button className='mt-4 flex items-center gap-2 text-sm md:text-base font-bold text-orange-500 hover:text-orange-600'>
//                     Read More
//                     <ArrowRight size={18} />
//                   </button>
//                 </Link>
//               </div>
//             </div>
//         ))}
//     </div>
//   )
// }

import Image from 'next/image'
import React from 'react'
import { ArrowRight} from 'lucide-react'
import Link from 'next/link'

export default function Resources () {
    const resources = [
  {
    image: '/images/resource1.png',
    badge: 'GUIDE',
    backgroundColor:'bg-orange-100/40',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-600',
    title: 'Guide to Disability Rights',
    description: 'A simple guide to understanding your legal rights, protections, and available support services.',
    slug: "1"
  },
  {
    image: '/images/resource2.png',
    badge: 'ARTICLE',
    backgroundColor:'bg-blue-100/40',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
    title: 'Building Confidence Every Day',
    description: 'Practical tips and inspiring ideas to help build self-esteem, resilience, and independence.',
    slug: "2"
  },
  {
    image: '/images/resource3.png',
    badge: 'WEBINAR',
    backgroundColor:'bg-green-100/40',
    borderColor: 'border-green-200',
    textColor: 'text-green-600',
    title: 'Inclusive Education for All',
    description: 'Watch our expert webinar on creating accessible and inclusive learning environments.',
    slug: "3"
  },
  {
    image: '/images/resource4.png',
    badge: 'CHECKLIST',
    backgroundColor:'bg-purple-100/40',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600',
    title: 'Accessibility Checklist',
    description: 'Download a practical checklist to help make workplaces, schools, and public spaces more accessible.',
    slug: "4"
  },
]
  return (
    <div className='relative py-16 md:py-20 overflow-hidden bg-slate-50/50 border-y border-slate-200/50'>
        {/* Subtle Geometric Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
        <div className="absolute top-0 right-0 -z-10 h-[400px] w-[600px] rounded-full bg-gradient-to-tr from-orange-100/20 to-amber-100/30 blur-3xl opacity-60" />

        <div className='relative container mx-auto max-w-7xl px-4 z-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 w-full'>
                {resources.map((resource, index) => (
                    <div key={index} className='group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-1'>
                      <div className='w-full'>
                        <div className='relative h-56 sm:h-64 md:h-56 lg:h-64 w-full overflow-hidden bg-slate-100'>
                          <Image
                            src={resource.image}
                            alt={resource.title}
                            fill
                            className='object-cover transition-transform duration-500 group-hover:scale-105'
                          />
                        </div>
                        <div className='px-6 pb-4 pt-7 md:px-8'>
                          <p className={`px-2.5 py-1 ${resource.backgroundColor} border ${resource.borderColor} rounded-lg w-fit text-[11px] ${resource.textColor} font-bold uppercase tracking-wider`}>{resource.badge}</p>
                          <h3 className='text-lg font-bold text-slate-900 tracking-tight leading-snug pt-3'>{resource.title}</h3>
                          <p className='mt-2.5 text-sm md:text-base leading-relaxed text-slate-500'>{resource.description}</p>
                        </div>
                      </div>
                      <div className='px-6 pb-6 md:px-8 pt-2'>
                        <Link href={`/viewResources/${resource.slug}`} className='block w-full'>
                          <button className='flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#f37421] group-hover:text-orange-600 transition-colors duration-200'>
                            Read More
                            <ArrowRight size={14} className='transition-transform duration-200 group-hover:translate-x-1' />
                          </button>
                        </Link>
                      </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}