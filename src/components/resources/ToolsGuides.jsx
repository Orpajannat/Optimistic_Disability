import React from 'react'
import { ArrowRight, Megaphone, BookOpenText, HandHeart, BriefcaseBusiness, Users } from 'lucide-react';

export default function ToolsGuides () {
    const guides=[
        {Icon: Megaphone,
         IconColor: "#f2690d",
         IconBg: "bg-orange-50 border-orange-200",
         Title: "Advocacy Toolkit",
         Description: "Download guides, templates, and materials to support disability advocacy and community awareness."
        },
        {Icon: BookOpenText,
         IconColor: "#0d3bf2",
         IconBg: "bg-blue-50 border-blue-100",
         Title: "Daily Living Tips",
         Description: "Tips and strategies that encourage independent living, confidence, and everyday success."
        },
        {Icon:HandHeart,
         IconColor: "#10670f",
         IconBg: "bg-green-50 border-green-100",
         Title: "Mental Well-being",
         Description: "Resources focused on emotional wellness, self-care, mental health, and resilience."
        },
        {Icon: BriefcaseBusiness,
         IconColor: "#420c92",
         IconBg: "bg-purple-50 border-purple-100",
         Title: "Career Development",
         Description: "Helpful resources to build workplace skills, prepare for interviews, and explore employment opportunities."
        },
        {Icon: Users,
         IconColor: "#f2690d",
         IconBg: "bg-orange-50 border-orange-100",
         Title: "Caregiver Hub",
         Description: "Practical advice, educational resources, and support for parents, caregivers, and families."
        }

    ]
  return (
    <div className='container mx-auto flex flex-col items-center justify-center px-5 py-10 sm:px-8'>
        <h1 className='pb-10 text-center text-xl font-bold tracking-wide text-blue-950 md:text-2xl'>Practical Tools for Everyday Life</h1>
        <div className='grid w-full grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-y-0'>
            {guides.map(({Icon, IconColor, IconBg, Title, Description}, index)=>(
                <div key={index} className={`relative flex flex-row items-start justify-start gap-3 px-4 text-center ${
              index !== guides.length - 1 ? 'xl:border-r-2 xl:border-orange-100' : ''
            }`}>
                    <div className={`mb-5 flex items-start justify-center rounded-full border-2 ${IconBg} p-5`}>
                        <Icon color={IconColor} strokeWidth={1.75} className='h-5 w-5 md:h-10 md:w-10'/>
                    </div>
                    <div className='flex flex-col items-baseline justify-items-center gap-3'>
                        <h2 className='text-sm font-bold text-gray-900 md:text-base'>{Title}</h2>
                        <p className='max-w-56 text-sm leading-tight text-neutral-600 text-left'>{Description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
