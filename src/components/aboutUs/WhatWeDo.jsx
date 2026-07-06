// import React from 'react'
// import { BookOpen, BriefcaseBusiness, UsersRound, Accessibility } from 'lucide-react'

// const services = [
//   {
//     title: 'Education Support',
//     description: 'We provide equal learning opportunities and resources for children and adults with disabilities.',
//     Icon: BookOpen,
//     iconColor: '#f2690d',
//     circleColor: 'bg-orange-50',
//   },
//   {
//     title: 'Employment Support',
//     description: 'We create pathways to meaningful employment and support entrepreneurship initiatives.',
//     Icon: BriefcaseBusiness,
//     iconColor: '#0d57a8',
//     circleColor: 'bg-blue-50',
//   },
//   {
//     title: 'Accessibility',
//     description: 'We promote accessible environments, technology, and inclusive communities for all.',
//     Icon: Accessibility,
//     iconColor: '#1f9d41',
//     circleColor: 'bg-green-50',
//   },
//   {
//     title: 'Community Support',
//     description: 'We offer guidance, care, and programs that uplift individuals and their families.',
//     Icon: UsersRound,
//     iconColor: '#9b35d3',
//     circleColor: 'bg-purple-50',
//   },
// ]

// export default function WhatWeDo () {
//   return (
//     <section className='container mx-auto px-5 py-10 sm:px-8'>
//       <h1 className='pb-8 text-center text-xl font-bold tracking-wide text-blue-950 md:text-2xl'>
//         WHAT WE DO
//       </h1>
//       <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4'>
//         {services.map(({ title, description, Icon, iconColor, circleColor }, index) => (
//           <div
//             key={index}
//             className='flex min-h-72 flex-col items-start rounded-lg border-2 border-neutral-200 px-8 py-10'
//           >
//             <div className={`mb-5 flex h-24 w-24 items-center justify-center rounded-full ${circleColor}`}>
//               <Icon color={iconColor} strokeWidth={1.75} className='h-12 w-12' />
//             </div>
//             <h2 className='pb-4 text-xl font-bold text-gray-900 md:text-2xl'>{title}</h2>
//             <p className='text-base leading-7 text-neutral-600 md:text-lg'>
//               {description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }


import React from 'react'
import { BookOpen, BriefcaseBusiness, UsersRound, Accessibility } from 'lucide-react'

const services = [
  {
    title: 'Education Support',
    description: 'We provide equal learning opportunities and resources for children and adults with disabilities.',
    Icon: BookOpen,
    iconColor: 'text-[#f37421]',
    borderColor: 'hover:border-[#f37421]/30',
    circleColor: 'bg-[#f37421]/10',
  },
  {
    title: 'Employment Support',
    description: 'We create pathways to meaningful employment and support entrepreneurship initiatives.',
    Icon: BriefcaseBusiness,
    iconColor: 'text-blue-600',
    borderColor: 'hover:border-blue-600/30',
    circleColor: 'bg-blue-50',
  },
  {
    title: 'Accessibility',
    description: 'We promote accessible environments, technology, and inclusive communities for all.',
    Icon: Accessibility,
    iconColor: 'text-emerald-600',
    borderColor: 'hover:border-emerald-600/30',
    circleColor: 'bg-emerald-50',
  },
  {
    title: 'Community Support',
    description: 'We offer guidance, care, and programs that uplift individuals and their families.',
    Icon: UsersRound,
    iconColor: 'text-purple-600',
    borderColor: 'hover:border-purple-600/30',
    circleColor: 'bg-purple-50',
  },
]

export default function WhatWeDo() {
  return (
    <section className="container mx-auto px-5 py-14 sm:px-8 max-w-7xl">
      <div className="space-y-2 pb-12 text-center">
        <span className="text-[#f37421] text-xs font-bold uppercase tracking-widest">
          Our Impact
        </span>
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 uppercase">
          What We Do
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, description, Icon, iconColor, borderColor, circleColor }, index) => (
          <div
            key={index}
            className={`flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 ${borderColor} hover:shadow-md hover:-translate-y-1`}
          >
            <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl ${circleColor} ${iconColor}`}>
              <Icon strokeWidth={1.5} className="h-8 w-8"/>
            </div>
            <h3 className="pb-3 text-xl font-bold text-slate-900 tracking-tight">{title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}