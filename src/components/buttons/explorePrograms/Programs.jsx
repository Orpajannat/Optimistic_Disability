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
    slug:"1"
  },
  {
    title: 'Education Support',
    description: 'We support access to quality education, learning resources, scholarships, and inclusive learning environments.',
    icon: <GraduationCap className='text-blue-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-blue-100',
    slug:"2"
  },
  {
    title: 'Employment Assistance',
    description: 'We help individuals find meaningful employment through training, job placement, and employer partnerships.',
    icon: <BriefcaseBusiness className='text-green-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-green-100',
    slug:"3"
  },
  {
    title: 'Skill Development',
    description: 'We provide training programs to build confidence, develop skills, and encourage independence.',
    icon: <Sparkles className='text-purple-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-purple-100',
    slug:"4"
  },
  {
    title: 'Healthcare Guidance',
    description: 'We provide guidance and support to access healthcare services and promote overall well-being.',
    icon: <HeartPulse className='text-rose-500' size={42} strokeWidth={2.2} />,
    bg: 'bg-rose-100',
    slug:"5"
  },
  {
    title: 'Assistive Technology',
    description: 'We provide access to assistive devices and technology that enhance independence and improve daily living.',
    icon: <Accessibility className='text-cyan-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-cyan-100',
    slug:"6"
  },
  {
    title: 'Legal Support',
    description: 'We offer legal awareness and support to protect rights and ensure access to justice and entitlements.',
    icon: <Scale className='text-amber-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-amber-100',
    slug:"7"
  },
  {
    title: 'Community Inclusion',
    description: 'We promote participation in community life and create inclusive spaces for all to belong and grow.',
    icon: <UsersRound className='text-purple-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-purple-100',
    slug:"8"
  },
]
  return (
    <div className='py-12 md:py-16 lg:py-20 bg-orange-100/30'>
        <div className='mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 px-4'>
          {programs.map((program, index) => (
            <div key={index} className='min-h-[280px] md:min-h-[300px] flex flex-col items-center justify-center text-center gap-4 rounded-lg border border-neutral-200 bg-white px-5 py-8 shadow-sm'>
              <div className={`flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full ${program.bg}`}>
                {program.icon}
              </div>
              <h3 className='text-lg md:text-xl font-bold text-neutral-900'>{program.title}</h3>
              <p className='max-w-[230px] text-sm md:text-base leading-relaxed text-neutral-600'>{program.description}</p>
              <Link href={`/explorePrograms/${program.slug}`}>
                <button className='mt-auto flex items-center gap-2 text-sm md:text-base font-bold text-orange-500 hover:text-orange-600'>
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          ))}
        </div>
    </div>
  )
}
