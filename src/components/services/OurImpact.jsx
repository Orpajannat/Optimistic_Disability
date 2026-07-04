import React from 'react'
import { GraduationCap, Handshake, MapPin, UsersRound } from 'lucide-react'

const impacts = [
  {
    icon: <UsersRound color="#145acc" size={54} strokeWidth={2} />,
    value: '500+',
    label: 'Individuals Supported',
  },
  {
    icon: <GraduationCap color="#145acc" size={54} strokeWidth={2} />,
    value: '120+',
    label: 'Training Programs',
  },
  {
    icon: <Handshake color="#145acc" size={54} strokeWidth={2} />,
    value: '30+',
    label: 'Partner Organizations',
  },
  {
    icon: <MapPin color="#145acc" size={54} strokeWidth={2} />,
    value: '10+',
    label: 'Communities Reached',
  },
]

export default function OurImpact () {
  return (
    <section className='pt-8 md:pt-10'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8 xl:px-0'>
        <div className='rounded-xl bg-blue-50/80 px-5 py-10 md:px-8 lg:px-12'>
          <h2 className='text-center text-sm md:text-base font-bold uppercase text-blue-700'>Our Impact</h2>

          <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x-2 divide-blue-200'>
            {impacts.map((impact, index) => (
              <div key={index} className='flex items-center justify-center gap-4 px-4 text-center sm:text-left'>
                <div className='shrink-0'>{impact.icon}</div>
                <div>
                  <p className='text-3xl md:text-4xl font-bold text-blue-700 leading-none'>{impact.value}</p>
                  <p className='mt-2 text-sm md:text-base font-semibold text-neutral-900'>{impact.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
