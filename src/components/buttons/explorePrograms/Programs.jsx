// import React from 'react'
// import {
//   Accessibility,
//   ArrowRight,
//   BriefcaseBusiness,
//   GraduationCap,
//   HeartPulse,
//   Megaphone,
//   Scale,
//   Sparkles,
//   UsersRound,
// } from 'lucide-react'
// import Link from 'next/link'

// export default function Programs () {
//     const programs = [
//     {
//     title: 'Disability Awareness',
//     description: 'We create awareness and promote positive attitudes towards disability inclusion and equal rights.',
//     icon: <Megaphone className='text-orange-500' size={42} strokeWidth={2.2} />,
//     bg: 'bg-orange-100',
//     slug:"disability-awarness"
//     },
//     {
//     title: 'Education Support',
//     description: 'We support access to quality education, learning resources, scholarships, and inclusive learning environments.',
//     icon: <GraduationCap className='text-blue-600' size={42} strokeWidth={2.2} />,
//     bg: 'bg-blue-100',
//     slug:"education-support"
//     },
//     {
//     title: 'Employment Assistance',
//     description: 'We help individuals find meaningful employment through training, job placement, and employer partnerships.',
//     icon: <BriefcaseBusiness className='text-green-600' size={42} strokeWidth={2.2} />,
//     bg: 'bg-green-100',
//     slug:"employment-assistance"
//     },
//     {
//     title: 'Skill Development',
//     description: 'We provide training programs to build confidence, develop skills, and encourage independence.',
//     icon: <Sparkles className='text-purple-600' size={42} strokeWidth={2.2} />,
//     bg: 'bg-purple-100',
//     slug:"skill-development"
//     },
//     {
//     title: 'Healthcare Guidance',
//     description: 'We provide guidance and support to access healthcare services and promote overall well-being.',
//     icon: <HeartPulse className='text-rose-500' size={42} strokeWidth={2.2} />,
//     bg: 'bg-rose-100',
//     slug:"healthcare-guidance"
//     },
//     {
//     title: 'Assistive Technology',
//     description: 'We provide access to assistive devices and technology that enhance independence and improve daily living.',
//     icon: <Accessibility className='text-cyan-600' size={42} strokeWidth={2.2} />,
//     bg: 'bg-cyan-100',
//     slug:"assistive-technology"
//     },
//     {
//     title: 'Legal Support',
//     description: 'We offer legal awareness and support to protect rights and ensure access to justice and entitlements.',
//     icon: <Scale className='text-amber-600' size={42} strokeWidth={2.2} />,
//     bg: 'bg-amber-100',
//     slug:"legal-support"
//     },
//     {
//     title: 'Community Inclusion',
//     description: 'We promote participation in community life and create inclusive spaces for all to belong and grow.',
//     icon: <UsersRound className='text-purple-600' size={42} strokeWidth={2.2} />,
//     bg: 'bg-purple-100',
//     slug:"community-inclusion"
//     },
// ]
//   return (
//     <div className='py-12 md:py-16 lg:py-20 bg-orange-100/30'>
//         <div className='mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 px-4'>
//           {programs.map((program, index) => (
//             <div key={index} className='min-h-[280px] md:min-h-[300px] flex flex-col items-center justify-center text-center gap-4 rounded-lg border border-neutral-200 bg-white px-5 py-8 shadow-sm'>
//               <div className={`flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full ${program.bg}`}>
//                 {program.icon}
//               </div>
//               <h3 className='text-lg md:text-xl font-bold text-neutral-900'>{program.title}</h3>
//               <p className='max-w-[230px] text-sm md:text-base leading-relaxed text-neutral-600'>{program.description}</p>
//               <Link href={`/explorePrograms/${program.slug}`}>
//                 <button className='mt-auto flex items-center gap-2 text-sm md:text-base font-bold text-orange-500 hover:text-orange-600'>
//                   Learn More
//                   <ArrowRight size={18} />
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//     </div>
//   )
// }


import React from 'react'
import {
  Accessibility,
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  HeartPulse,
  Megaphone,
  Scale,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import Link from 'next/link'

export default function Programs () {
    const programs = [
    {
    title: 'Disability Awareness',
    description: 'We create awareness and promote positive attitudes towards disability inclusion and equal rights.',
    icon: <Megaphone className='text-orange-500' size={42} strokeWidth={2.2} />,
    bg: 'bg-orange-100',
    slug:"disability-awarness"
    },
    {
    title: 'Education Support',
    description: 'We support access to quality education, learning resources, scholarships, and inclusive learning environments.',
    icon: <GraduationCap className='text-blue-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-blue-100',
    slug:"education-support"
    },
    {
    title: 'Employment Assistance',
    description: 'We help individuals find meaningful employment through training, job placement, and employer partnerships.',
    icon: <BriefcaseBusiness className='text-green-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-green-100',
    slug:"employment-assistance"
    },
    {
    title: 'Skill Development',
    description: 'We provide training programs to build confidence, develop skills, and encourage independence.',
    icon: <Sparkles className='text-purple-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-purple-100',
    slug:"skill-development"
    },
    {
    title: 'Healthcare Guidance',
    description: 'We provide guidance and support to access healthcare services and promote overall well-being.',
    icon: <HeartPulse className='text-rose-500' size={42} strokeWidth={2.2} />,
    bg: 'bg-rose-100',
    slug:"healthcare-guidance"
    },
    {
    title: 'Assistive Technology',
    description: 'We provide access to assistive devices and technology that enhance independence and improve daily living.',
    icon: <Accessibility className='text-cyan-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-cyan-100',
    slug:"assistive-technology"
    },
    {
    title: 'Legal Support',
    description: 'We offer legal awareness and support to protect rights and ensure access to justice and entitlements.',
    icon: <Scale className='text-amber-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-amber-100',
    slug:"legal-support"
    },
    {
    title: 'Community Inclusion',
    description: 'We promote participation in community life and create inclusive spaces for all to belong and grow.',
    icon: <UsersRound className='text-purple-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-purple-100',
    slug:"community-inclusion"
    },
]
  return (
    <div className='py-16 md:py-20 lg:py-24 bg-orange-50/40 border-y border-slate-100/80'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full'>
              {programs.map((program, index) => (
                <div key={index} className='group flex flex-col items-start justify-between text-left gap-5 rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-1 min-h-[310px]'>
                  <div className='w-full flex flex-col items-start gap-4'>
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${program.bg}`}>
                      {React.cloneElement(program.icon, { size: 26, strokeWidth: 2 })}
                    </div>
                    <div className='space-y-2'>
                      <h3 className='text-lg font-bold text-slate-900 tracking-tight leading-snug'>{program.title}</h3>
                      <p className='text-sm leading-relaxed text-slate-500'>{program.description}</p>
                    </div>
                  </div>
                  <Link href={`/explorePrograms/${program.slug}`} className='w-full pt-2 mt-auto block'>
                    <button className='flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#f37421] group-hover:text-orange-600 transition-colors duration-200'>
                      Learn More
                      <ArrowRight size={14} className='transition-transform duration-200 group-hover:translate-x-1' />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}