import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function OurFocusAreas () {
  return (
    <div className='pt-12 md:pt-16 lg:pt-20 pb-10 bg-orange-100/30'>
        <div className='container mx-auto px-4 md:px-6 lg:px-8 xl:px-0 flex flex-col items-center justify-center gap-8 md:gap-10'>
            <h1 className='text-orange-500 text-xl'>Our Focus Areas</h1>
            <div className='flex w-full flex-col lg:flex-row items-stretch justify-center gap-6 md:gap-8 lg:gap-10'>
                <div className='flex w-full lg:w-1/2 xl:w-auto flex-row items-center justify-center'>
                    <div className='flex w-full max-w-[520px] min-h-full flex-col items-center justify-center gap-5 px-4 sm:px-5 py-8 md:py-10 bg-white rounded shadow-lg'>
                        <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-700 text-center'>Empowerment</h3>
                        <Image src="/images/Human_Figure_with_Circle.png" alt="humanfigure" width={400} height={200} className='w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[400px] h-auto'/>
                        <p className='text-sm sm:text-base text-neutral-500 text-center'>
                            This symbol combines a human figure and a<br/>
                            protective circular shape to represent the core<br/>
                            values of empowerment, inclusion, and support.
                        </p>
                        <Link href="/services">
                          <button className='px-3 py-2 bg-orange-400 hover:border-2 hover:border-orange-400 hover:bg-white rounded text-white hover:text-orange-500'>
                            Read More
                          </button>
                        </Link>
                    </div>
                </div>
                <div className='flex w-full lg:w-1/2 xl:w-auto flex-row items-center justify-center'>
                    <div className='flex w-full max-w-[520px] min-h-full flex-col items-center justify-center gap-5 px-4 sm:px-5 py-8 md:py-10 bg-white rounded shadow-lg'>
                        <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-700 text-center'>Brighter Opportunities</h3>
                        <Image src="/images/Sun_Rays.png" alt="sunrays" width={450} height={220} className='block md:hidden lg:block w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[450px] h-auto'/>
                        <Image src="/images/Sun_Rays.png" alt="sunrays" width={440} height={220} className='hidden md:block lg:hidden w-full max-w-[440px] h-auto'/>
                        <p className='text-sm sm:text-base text-neutral-500 text-center'>
                            The sun rays represent optimism, hope,<br/>
                            positivity, growth, enlightenment, and<br/>
                            brighter opportunities. 

                        </p>
                        <Link href="/services">
                          <button className='px-3 py-2 bg-orange-400 hover:border-2 hover:border-orange-400 hover:bg-white rounded text-white hover:text-orange-500'>
                            Read More
                          </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
