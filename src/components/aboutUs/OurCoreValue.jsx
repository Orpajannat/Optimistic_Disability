import React from 'react'
import { Globe2, Heart, Rocket, ShieldCheck, Sun, UsersRound } from 'lucide-react'

const coreValues = [
  {
    title: 'Dignity',
    description: 'Everyone deserves respect and to be valued for who they are.',
    Icon: Heart,
  },
  {
    title: 'Inclusion',
    description: 'No one should be left behind. We embrace every individual.',
    Icon: UsersRound,
  },
  {
    title: 'Equality',
    description: 'Equal rights and opportunities for all in every aspect of life.',
    Icon: Globe2,
  },
  {
    title: 'Empowerment',
    description: 'We help individuals discover their potential and build independence.',
    Icon: Rocket,
  },
  {
    title: 'Optimism',
    description: 'We create hope, confidence, and brighter tomorrow.',
    Icon: Sun,
  },
  {
    title: 'Accessibility',
    description: 'We work to remove barriers in communities and systems.',
    Icon: ShieldCheck,
  },
]

export default function OurCoreValue () {
  return (
    <section className='container mx-auto px-5 py-10 sm:px-8'>
      <h1 className='pb-10 text-center text-xl font-bold tracking-wide text-blue-950 md:text-2xl'>
        OUR CORE VALUES
      </h1>
      <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 xl:gap-y-0'>
        {coreValues.map(({ title, description, Icon }, index) => (
          <div
            key={title}
            className={`flex flex-col items-center px-5 text-center ${
              index !== coreValues.length - 1 ? 'xl:border-r-2 xl:border-orange-100' : ''
            }`}
          >
            <div className='mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-orange-50 md:h-28 md:w-28'>
              <Icon color='#f2690d' strokeWidth={1.75} className='h-12 w-12 md:h-14 md:w-14' />
            </div>
            <h2 className='pb-5 text-lg font-bold text-gray-900'>{title}</h2>
            <p className='max-w-40 text-sm leading-6 text-neutral-600 md:text-base'>
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
