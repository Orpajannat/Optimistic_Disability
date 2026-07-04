import Image from 'next/image'
import React from 'react'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

export default function ResourceHero () {
  return (
    <section className='overflow-hidden bg-white'>
      <div className='flex min-h-[520px] flex-col lg:min-h-[500px] xl:min-h-[560px] xl:flex-row'>
        <div className='relative z-20 flex w-full flex-col justify-center px-4 py-12 sm:px-8 md:px-12 xl:w-[44%] lg:py-16 xl:pl-20'>
          <p className='text-sm md:text-base font-bold text-orange-500'>RESOURCES</p>
          <h1 className='mt-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-neutral-900 pb-5'>
            Knowledge.
            <br />
            <span className='text-neutral-900'>Support.</span>
            <br />
            <span className='text-orange-500'>Empowerment.</span>
          </h1>
          <div className='border border-t-2 border-orange-500 w-15 rounded-xl'></div>
          <p className='mt-8 text-base md:text-lg lg:text-xl leading-relaxed text-neutral-700'>
            Helpful information, practical tools, and trusted resources
            <br className='hidden sm:block' />
            to support individuals with disabilities, families,
            <br className='hidden sm:block' />
            caregivers, and communities.
          </p>
          <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
            <button className='flex items-center justify-center gap-4 rounded-lg bg-orange-500 px-7 py-4 font-bold text-white hover:bg-orange-300 w-fit'>
              Explore Resources
              <MoveRight size={22} />
            </button>
            <Link href="/joinUs">
              <button className='flex items-center justify-center gap-4 rounded-lg border-2 border-orange-300 px-7 py-4 font-bold text-neutral-900 hover:bg-orange-300 w-fit'>
                Get Support
                <MoveRight className='text-orange-500' size={22} />
              </button>
            </Link>
          </div>
        </div>

        <div className='relative h-auto w-full xl:w-[56%] xl:h-auto border-l border-l-white border-b border-b-white'>
          <div className='relative h-auto w-full overflow-hidden xl:h-full border-l border-l-white'>
            <Image
              src='/images/resourcesBanner.png'
              alt='impactBanner'
              width={1280}
              height={720}
              priority
              sizes='(max-width: 1280px) 100vw, 56vw'
              className='block h-auto w-full xl:h-full xl:object-cover xl:object-center border-b border-b-white'
            />
            <div className='absolute inset-y-[-18%] -left-[230px] z-10 hidden w-[430px] rounded-r-[100%] border-r-2 border-r-orange-200 bg-white xl:block'></div>
            <div className='absolute inset-y-[-24%] -left-[248px] z-0 hidden w-[460px] rounded-r-[100%] bg-orange-100/40 xl:block'></div>
          </div>
        </div>
      </div>
    </section>
  )
}
