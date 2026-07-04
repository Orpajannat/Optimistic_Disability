import React from 'react'
import { BookOpen, BriefcaseBusiness, UsersRound, Accessibility } from 'lucide-react'

const services = [
  {
    title: 'Education Support',
    description: 'We provide equal learning opportunities and resources for children and adults with disabilities.',
    Icon: BookOpen,
    iconColor: '#f2690d',
    circleColor: 'bg-orange-50',
  },
  {
    title: 'Employment Support',
    description: 'We create pathways to meaningful employment and support entrepreneurship initiatives.',
    Icon: BriefcaseBusiness,
    iconColor: '#0d57a8',
    circleColor: 'bg-blue-50',
  },
  {
    title: 'Accessibility',
    description: 'We promote accessible environments, technology, and inclusive communities for all.',
    Icon: Accessibility,
    iconColor: '#1f9d41',
    circleColor: 'bg-green-50',
  },
  {
    title: 'Community Support',
    description: 'We offer guidance, care, and programs that uplift individuals and their families.',
    Icon: UsersRound,
    iconColor: '#9b35d3',
    circleColor: 'bg-purple-50',
  },
]

export default function WhatWeDo () {
  return (
    <section className='container mx-auto px-5 py-10 sm:px-8'>
      <h1 className='pb-8 text-center text-xl font-bold tracking-wide text-blue-950 md:text-2xl'>
        WHAT WE DO
      </h1>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4'>
        {services.map(({ title, description, Icon, iconColor, circleColor }, index) => (
          <div
            key={index}
            className='flex min-h-72 flex-col items-start rounded-lg border-2 border-neutral-200 px-8 py-10'
          >
            <div className={`mb-5 flex h-24 w-24 items-center justify-center rounded-full ${circleColor}`}>
              <Icon color={iconColor} strokeWidth={1.75} className='h-12 w-12' />
            </div>
            <h2 className='pb-4 text-xl font-bold text-gray-900 md:text-2xl'>{title}</h2>
            <p className='text-base leading-7 text-neutral-600 md:text-lg'>
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
