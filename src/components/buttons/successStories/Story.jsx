import React from 'react'
import Image from 'next/image'

export default function Story ({story}) {
  return (
    <div className='px-6 py-10'>
      <div className='relative h-64 lg:h-150 w-full'>
        <Image
          src={story.image}
          alt={story.title}
          fill
          className='object-cover rounded-lg'
        />
      </div>
      <h1 className='text-2xl font-bold mt-6 text-black'>{story.title}</h1>
      <p className='mt-4 text-neutral-700'>{story.description}</p>
    </div>
  )
}
