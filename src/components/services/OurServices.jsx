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

const services = [
  {
    title: 'Disability Awareness',
    description: 'We create awareness and promote positive attitudes towards disability inclusion and equal rights.',
    icon: <Megaphone className='text-orange-500' size={42} strokeWidth={2.2} />,
    bg: 'bg-orange-100',
  },
  {
    title: 'Education Support',
    description: 'We support access to quality education, learning resources, scholarships, and inclusive learning environments.',
    icon: <GraduationCap className='text-blue-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-blue-100',
  },
  {
    title: 'Employment Assistance',
    description: 'We help individuals find meaningful employment through training, job placement, and employer partnerships.',
    icon: <BriefcaseBusiness className='text-green-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-green-100',
  },
  {
    title: 'Skill Development',
    description: 'We provide training programs to build confidence, develop skills, and encourage independence.',
    icon: <Sparkles className='text-purple-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-purple-100',
  },
  {
    title: 'Healthcare Guidance',
    description: 'We provide guidance and support to access healthcare services and promote overall well-being.',
    icon: <HeartPulse className='text-rose-500' size={42} strokeWidth={2.2} />,
    bg: 'bg-rose-100',
  },
  {
    title: 'Assistive Technology',
    description: 'We provide access to assistive devices and technology that enhance independence and improve daily living.',
    icon: <Accessibility className='text-cyan-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-cyan-100',
  },
  {
    title: 'Legal Support',
    description: 'We offer legal awareness and support to protect rights and ensure access to justice and entitlements.',
    icon: <Scale className='text-amber-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-amber-100',
  },
  {
    title: 'Community Inclusion',
    description: 'We promote participation in community life and create inclusive spaces for all to belong and grow.',
    icon: <UsersRound className='text-purple-600' size={42} strokeWidth={2.2} />,
    bg: 'bg-purple-100',
  },
]

export default function OurServices () {
  return (
    <section className='py-12 md:py-16 lg:py-20'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8 xl:px-0'>
        <div className='flex flex-col items-center text-center gap-3'>
          <p className='text-xs md:text-sm font-bold uppercase text-orange-500'>What We Offer</p>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900'>Our Services</h2>
          <p className='max-w-[760px] text-sm md:text-base lg:text-lg leading-relaxed text-neutral-600'>
            We offer a wide range of services designed to remove barriers, create opportunities,
            and empower individuals with disabilities to thrive in every aspect of life.
          </p>
        </div>

        <div className='mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6'>
          {services.map((service, index) => (
            <div key={index} className='min-h-[280px] md:min-h-[300px] flex flex-col items-center justify-center text-center gap-4 rounded-lg border border-neutral-200 bg-white px-5 py-8 shadow-sm'>
              <div className={`flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full ${service.bg}`}>
                {service.icon}
              </div>
              <h3 className='text-lg md:text-xl font-bold text-neutral-900'>{service.title}</h3>
              <p className='max-w-[230px] text-sm md:text-base leading-relaxed text-neutral-600'>{service.description}</p>
              <button className='mt-auto flex items-center gap-2 text-sm md:text-base font-bold text-orange-500 hover:text-orange-600'>
                Learn More
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
