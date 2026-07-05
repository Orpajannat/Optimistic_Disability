import React from 'react'
import {
  Briefcase,
  GraduationCap,
  HandHeart,
  Handshake,
  MapPin,
  UsersRound,
} from 'lucide-react'

const impactNumbers = [
  {
    icon: <UsersRound className='text-orange-500' size={46} strokeWidth={2} />,
    value: '500+',
    label: 'Individuals Supported',
    description: 'Empowered to live independently and confidently.',
    bg: 'bg-orange-100',
    text: 'text-orange-500',
  },
  {
    icon: <GraduationCap className='text-blue-600' size={46} strokeWidth={2} />,
    value: '120+',
    label: 'Training Programs',
    description: 'Conducted across education, skills, and development initiatives.',
    bg: 'bg-blue-100',
    text: 'text-blue-600',
  },
  {
    icon: <Handshake className='text-green-600' size={46} strokeWidth={2} />,
    value: '30+',
    label: 'Partner Organizations',
    description: 'Working together to create greater impact and accessibility.',
    bg: 'bg-green-100',
    text: 'text-green-600',
  },
  {
    icon: <HandHeart className='text-purple-600' size={46} strokeWidth={2} />,
    value: '10+',
    label: 'Communities Reached',
    description: 'Building inclusive communities across different regions.',
    bg: 'bg-purple-100',
    text: 'text-purple-600',
  },
  {
    icon: <Briefcase className='text-orange-500' size={46} strokeWidth={2} />,
    value: '200+',
    label: 'Employment Opportunities',
    description: 'Created through job support, placement and employer partnerships.',
    bg: 'bg-orange-100',
    text: 'text-orange-500',
  },
  {
    icon: <MapPin className='text-rose-500' size={46} strokeWidth={2} />,
    value: '1,000+',
    label: 'Lives Impacted',
    description: 'Through support services, guidance and community engagement.',
    bg: 'bg-rose-100',
    text: 'text-rose-500',
  },
]

export default function ImpactInNumbers () {
  return (
    <section className='bg-white py-12 md:py-16 lg:py-20'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8 xl:px-4'>
        <div className='flex flex-col items-center text-center gap-3'>
          <p className='text-xs md:text-sm font-bold uppercase text-orange-500'>Our Impact In Numbers</p>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900'>Making a Measurable Difference</h2>
          <p className='max-w-[680px] text-sm md:text-base lg:text-lg leading-relaxed text-neutral-600'>
            Through our programs and services, we continue to create opportunities
            and build a more inclusive society.
          </p>
        </div>

        <div className='mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-5'>
          {impactNumbers.map((item, index) => (
            <div key={index} className='flex min-h-[270px] flex-col items-center justify-center rounded-lg border border-neutral-200 bg-white px-4 py-7 text-center shadow-sm'>
              <div className={`flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full ${item.bg}`}>
                {item.icon}
              </div>
              <h3 className={`mt-5 text-3xl md:text-4xl font-bold ${item.text}`}>{item.value}</h3>
              <p className='mt-2 text-sm md:text-base font-bold text-neutral-900'>{item.label}</p>
              <p className='mt-4 text-sm md:text-base leading-relaxed text-neutral-600'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
