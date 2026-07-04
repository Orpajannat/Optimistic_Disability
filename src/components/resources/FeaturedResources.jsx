import Image from 'next/image'
import React from 'react'
import { ArrowRight, Quote } from 'lucide-react'

const resources = [
  {
    image: '/images/resource1.png',
    badge: 'GUIDE',
    backgroundColor:'bg-orange-100/40',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-400',
    title: 'Guide to Disability Rights',
    description: 'A simple guide to understanding your legal rights, protections, and available support services.',
  },
  {
    image: '/images/resource2.png',
    badge: 'ARTICLE',
    backgroundColor:'bg-blue-100/40',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-400',
    title: 'Building Confidence Every Day',
    description: 'Practical tips and inspiring ideas to help build self-esteem, resilience, and independence.',
  },
  {
    image: '/images/resource3.png',
    badge: 'WEBINAR',
    backgroundColor:'bg-green-100/40',
    borderColor: 'border-green-200',
    textColor: 'text-green-400',
    title: 'Inclusive Education for All',
    description: 'Watch our expert webinar on creating accessible and inclusive learning environments.',
  },
  {
    image: '/images/resource4.png',
    badge: 'CHECKLIST',
    backgroundColor:'bg-purple-100/40',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-400',
    title: 'Accessibility Checklist',
    description: 'Download a practical checklist to help make workplaces, schools, and public spaces more accessible.',
  },
]

export default function FeaturedResources () {
  return (
    <section className='overflow-hidden bg-orange-100/30 py-12 md:py-16 lg:py-20'>
      <div className='container relative z-10 mx-auto px-4 md:px-6 lg:px-8 xl:px-0'>
        <div className='flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-between'>
          <div className='w-full text-center'>
            <p className='text-xs md:text-sm font-bold uppercase text-orange-500'>FEATURED RESOURCES</p>
            <h2 className='mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900'>Handpicked for You</h2>
          </div>
          <button className='flex shrink-0 items-center gap-2 text-sm md:text-base font-bold text-orange-500 hover:text-orange-600 md:mt-8'>
            View All Resources
            <ArrowRight size={18} />
          </button>
        </div>

        <div className='mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 px-3 md:px-5 lg:px-7 xl:px-10'>
          {resources.map((resource, index) => (
            <div key={index} className='overflow-hidden rounded-lg bg-white shadow-sm'>
              <div className='relative h-56 sm:h-64 md:h-56 lg:h-64'>
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='px-6 pb-6 pt-7 md:px-8'>
                <p className={`p-1 ${resource.backgroundColor} border ${resource.borderColor} rounded-xl w-fit text-xs ${resource.textColor} font-bold`}>{resource.badge}</p>
                <h3 className='text-base md:text-lg font-bold text-neutral-900 pt-3'>{resource.title}</h3>
                <p className='mt-3 text-sm md:text-base leading-relaxed text-neutral-700'>{resource.description}</p>
                <button className='mt-4 flex items-center gap-2 text-sm md:text-base font-bold text-orange-500 hover:text-orange-600'>
                  Read More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
