import React from 'react'

export default function Program ({program}) {
  return (
    <div>
        <div className='flex flex-col lg:flex-row items-start lg:items-center justify-center px-6 py-10 gap-10'>
            <div className={`flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full ${program.bg}`}>
                  {program.icon}
            </div>
            <div className='flex flex-col'>
                <h3 className='text-xl md:text-2xl font-bold text-neutral-900'>{program.title}</h3>
                <p className='text-base leading-relaxed text-neutral-600'>{program.description}</p>
            </div>
        </div>
    </div>
  )
}
