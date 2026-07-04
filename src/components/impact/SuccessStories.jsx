import Image from 'next/image'
import React from 'react'
import { ArrowRight, Quote } from 'lucide-react'

const stories = [
  {
    image: '/images/tailor.png',
    title: 'From Learning to Earning',
    description: 'After completing our skill development program, Rafiq gained confidence and now runs his own tailoring business.',
  },
  {
    image: '/images/Student.png',
    title: 'Education Changed Everything',
    description: 'With our educational support and assistive resources, Farzana is now pursuing her degree in English Literature.',
  },
  {
    image: '/images/JobHolder.png',
    title: 'A New Career, A New Beginning',
    description: 'Through employment assistance and career counseling, Hasan found a job he loves as a digital marketing executive.',
  },
]

export default function SuccessStories () {
  return (
    <section className='relative overflow-hidden bg-orange-50/40 py-12 md:py-16 lg:py-20'>
      <div className='absolute left-0 top-6 hidden h-28 w-20 bg-[radial-gradient(circle,#fb923c_2px,transparent_2px)] [background-size:18px_18px] opacity-40 md:block'></div>
      <div className='absolute bottom-3 right-0 hidden h-28 w-20 bg-[radial-gradient(circle,#fb923c_2px,transparent_2px)] [background-size:18px_18px] opacity-40 md:block'></div>

      <div className='container relative z-10 mx-auto px-4 md:px-6 lg:px-8 xl:px-0'>
        <div className='flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-between'>
          <div className='w-full text-center'>
            <p className='text-xs md:text-sm font-bold uppercase text-orange-500'>Success Stories</p>
            <h2 className='mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900'>Lives Transformed, Futures Reimagined</h2>
          </div>
          <button className='flex shrink-0 items-center gap-2 text-sm md:text-base font-bold text-orange-500 hover:text-orange-600 md:mt-8'>
            View All Stories
            <ArrowRight size={18} />
          </button>
        </div>

        <div className='mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8'>
          {stories.map((story, index) => (
            <div key={index} className='overflow-hidden rounded-lg bg-white shadow-sm'>
              <div className='relative h-56 sm:h-64 md:h-56 lg:h-64'>
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='relative px-6 pb-6 pt-7 md:px-8'>
                <div className='absolute -top-8 left-6 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white'>
                  <Quote size={26} fill='currentColor' />
                </div>
                <h3 className='text-base md:text-lg font-bold text-neutral-900'>{story.title}</h3>
                <p className='mt-3 text-sm md:text-base leading-relaxed text-neutral-700'>{story.description}</p>
                <button className='mt-4 flex items-center gap-2 text-sm md:text-base font-bold text-orange-500 hover:text-orange-600'>
                  Read Full Story
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
