// import Image from 'next/image'
// import React from 'react'
// import { ArrowRight} from 'lucide-react'
// import Link from 'next/link'

// const resources = [
//   {
//     image: '/images/resource1.png',
//     badge: 'GUIDE',
//     backgroundColor:'bg-orange-100/40',
//     borderColor: 'border-orange-200',
//     textColor: 'text-orange-400',
//     title: 'Guide to Disability Rights',
//     description: 'A simple guide to understanding your legal rights, protections, and available support services.',
//     slug:"1"
//   },
//   {
//     image: '/images/resource2.png',
//     badge: 'ARTICLE',
//     backgroundColor:'bg-blue-100/40',
//     borderColor: 'border-blue-200',
//     textColor: 'text-blue-400',
//     title: 'Building Confidence Every Day',
//     description: 'Practical tips and inspiring ideas to help build self-esteem, resilience, and independence.',
//     slug:"2"
//   },
//   {
//     image: '/images/resource3.png',
//     badge: 'WEBINAR',
//     backgroundColor:'bg-green-100/40',
//     borderColor: 'border-green-200',
//     textColor: 'text-green-400',
//     title: 'Inclusive Education for All',
//     description: 'Watch our expert webinar on creating accessible and inclusive learning environments.',
//     slug:"3"
//   },
//   {
//     image: '/images/resource4.png',
//     badge: 'CHECKLIST',
//     backgroundColor:'bg-purple-100/40',
//     borderColor: 'border-purple-200',
//     textColor: 'text-purple-400',
//     title: 'Accessibility Checklist',
//     description: 'Download a practical checklist to help make workplaces, schools, and public spaces more accessible.',
//     slug:"4"
//   },
// ]

// export default function FeaturedResources () {
//   return (
//     <section className='overflow-hidden bg-orange-100/30 py-12 md:py-16 lg:py-20'>
//       <div className='container relative z-10 mx-auto px-4 md:px-6 lg:px-8 xl:px-0'>
//         <div className='flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-between'>
//           <div className='w-full text-center'>
//             <p className='text-xs md:text-sm font-bold uppercase text-orange-500'>FEATURED RESOURCES</p>
//             <h2 className='mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900'>Handpicked for You</h2>
//           </div>
//           <Link href="/viewResources">
//             <button className='flex shrink-0 items-center gap-2 text-sm md:text-base font-bold text-orange-500 hover:text-orange-600 md:mt-8'>
//               View All Resources
//               <ArrowRight size={18} />
//             </button>
//           </Link>
//         </div>

//         <div className='mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 px-3 md:px-5 lg:px-7 xl:px-10'>
//           {resources.map((resource, index) => (
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
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const resources = [
  {
    image: '/images/resource1.png',
    badge: 'Guide',
    backgroundColor: 'bg-orange-100/60',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-600',
    title: 'Guide to Disability Rights',
    description: 'A simple guide to understanding your legal rights, protections, and available support services.',
    slug: '1',
  },
  {
    image: '/images/resource2.png',
    badge: 'Article',
    backgroundColor: 'bg-blue-100/60',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
    title: 'Building Confidence Every Day',
    description: 'Practical tips and inspiring ideas to help build self-esteem, resilience, and independence.',
    slug: '2',
  },
  {
    image: '/images/resource3.png',
    badge: 'Webinar',
    backgroundColor: 'bg-green-100/60',
    borderColor: 'border-green-200',
    textColor: 'text-green-600',
    title: 'Inclusive Education for All',
    description: 'Watch our expert webinar on creating accessible and inclusive learning environments.',
    slug: '3',
  },
  {
    image: '/images/resource4.png',
    badge: 'Checklist',
    backgroundColor: 'bg-purple-100/60',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600',
    title: 'Accessibility Checklist',
    description: 'Download a practical checklist to help make workplaces, schools, and public spaces more accessible.',
    slug: '4',
  },
]

export default function FeaturedResources() {
  return (
    <section className="overflow-hidden bg-orange-100/30 py-12 md:py-16 lg:py-20">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 xl:px-0">

        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wide text-orange-500">
              Featured Resources
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900">
              Handpicked for You
            </h2>
          </div>

          <Link
            href="/viewResources"
            className="group flex shrink-0 items-center gap-2 text-sm md:text-base font-bold text-orange-500 transition-colors duration-200 hover:text-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
          >
            View All Resources
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 px-3 md:px-5 lg:px-7 xl:px-10">
          {resources.map((resource) => (
            <Link
              key={resource.slug}
              href={`/viewResources/${resource.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              <div className="relative h-56 sm:h-64 md:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 px-6 pb-6 pt-6 md:px-8">
                <span
                  className={`inline-block w-fit px-3 py-1 ${resource.backgroundColor} border ${resource.borderColor} rounded-full text-xs font-bold uppercase tracking-wide ${resource.textColor}`}
                >
                  {resource.badge}
                </span>

                <h3 className="text-base md:text-lg font-bold text-neutral-900 pt-3">
                  {resource.title}
                </h3>

                <p className="mt-3 text-sm md:text-base leading-relaxed text-neutral-600 flex-1">
                  {resource.description}
                </p>

                <span className="mt-4 flex items-center gap-2 text-sm md:text-base font-bold text-orange-500 group-hover:text-orange-600">
                  Read More
                  <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}