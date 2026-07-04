import React from 'react'
import { CheckCircle, GraduationCap, Handshake, MapPin, UsersRound } from 'lucide-react'

const reasons = [
  'Disability is not inability.',
  'Everyone deserves opportunity.',
  'Inclusion benefits society.',
  'Accessibility creates independence.',
  'Communities grow stronger together.',
]

const impacts = [
  {
    value: '500+',
    label: 'People Supported',
    Icon: UsersRound,
  },
  {
    value: '120+',
    label: 'Training Programs',
    Icon: GraduationCap,
  },
  {
    value: '30+',
    label: 'Partner Organizations',
    Icon: Handshake,
  },
  {
    value: '10+',
    label: 'Communities Served',
    Icon: MapPin,
  },
]

export default function WhyWeExist () {
  return (
    <section className='container mx-auto px-5 py-10 sm:px-8'>
      <div className='flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12'>
        <div className='flex w-full flex-col lg:max-w-sm'>
          <h1 className='pb-6 text-xl font-bold tracking-wide text-blue-950 md:text-2xl'>
            WHY WE EXIST
          </h1>
          <div className='flex flex-col gap-4'>
            {reasons.map((reason, index) => (
              <div key={index} className='flex flex-row items-center gap-4'>
                <CheckCircle color='#f2690d' strokeWidth={2} className='h-6 w-6 shrink-0' />
                <p className='text-base font-medium text-neutral-700 md:text-lg'>{reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='hidden w-px bg-orange-200 lg:block'></div>

        <div className='flex w-full flex-col'>
          <h1 className='pb-8 text-center text-xl font-bold tracking-wide text-blue-950 md:text-2xl lg:text-left'>
            OUR IMPACT
          </h1>
          <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0'>
            {impacts.map(({ value, label, Icon }, index) => (
              <div
                key={index}
                className={`flex flex-col items-center px-5 text-center ${
                  index !== impacts.length - 1 ? 'lg:border-r-2 lg:border-orange-100' : ''
                }`}
              >
                <Icon color='#f2690d' strokeWidth={1.75} className='mb-4 h-16 w-16' />
                <h2 className='pb-2 text-4xl font-bold text-orange-500 md:text-5xl'>{value}</h2>
                <p className='text-base font-medium text-neutral-600'>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
