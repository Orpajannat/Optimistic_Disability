import Program from '@/components/buttons/explorePrograms/Program'
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

export default async function page ({params}) {
    const { slug } = await params

   const program = programs.find(p => p.slug === slug)
  return (
    <div>
        <Program program={program}/>
    </div>
  )
}
