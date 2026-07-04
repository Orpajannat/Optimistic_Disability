import React from 'react'
import { ArrowRight, Megaphone, BookOpenText, HandHeart, BriefcaseBusiness, Users } from 'lucide-react';

export default function OurApproach () {
    const approach=[
        {Icon: Megaphone,
         IconColor: "#f2690d",
         IconBg: "bg-orange-50 border-orange-200",
         Title: "Awareness",
         Description: "Raising awareness and promoting positive change."
        },
        {Icon: BookOpenText,
         IconColor: "#0d3bf2",
         IconBg: "bg-blue-50 border-blue-100",
         Title: "Training",
         Description: "Skill development and capacity building."
        },
        {Icon:HandHeart,
         IconColor: "#10670f",
         IconBg: "bg-green-50 border-green-100",
         Title: "Support",
         Description: "Providing resources and guidance every step."
        },
        {Icon: BriefcaseBusiness,
         IconColor: "#420c92",
         IconBg: "bg-purple-50 border-purple-100",
         Title: "Employment",
         Description: "Connecting individuals to jobs and opportunities."
        },
        {Icon: Users,
         IconColor: "#f2690d",
         IconBg: "bg-orange-50 border-orange-100",
         Title: "Community Inclusion",
         Description: "Building an inclusive society where everyone belongs."
        }

    ]
  return (
    <div className='container mx-auto flex flex-col items-center justify-center px-5 py-10 sm:px-8'>
        <h1 className='pb-10 text-center text-xl font-bold tracking-wide text-blue-950 md:text-2xl'>OUR APPROACH</h1>
        <div className='grid w-full grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-y-0'>
            {approach.map(({Icon, IconColor, IconBg, Title, Description}, index)=>(
                <div key={index} className='relative flex flex-col items-center justify-start px-4 text-center'>
                    <div className={`mb-5 flex h-28 w-28 items-center justify-center rounded-full border-2 ${IconBg} md:h-32 md:w-32`}>
                        <Icon color={IconColor} strokeWidth={1.75} className='h-14 w-14 md:h-16 md:w-16'/>
                    </div>
                    {index !== approach.length - 1 && (
                        <div className='absolute left-[71%] top-14 hidden w-[45%] items-center xl:flex'>
                            <div className='h-px flex-1 border-t-2 border-dashed border-neutral-400'></div>
                            <ArrowRight color='#171717' strokeWidth={1.75} className='h-8 w-8 shrink-0'/>
                        </div>
                    )}
                    <h2 className='pb-4 text-lg font-bold text-gray-900 md:text-xl'>{Title}</h2>
                    <p className='max-w-56 text-base leading-6 text-neutral-600'>{Description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
