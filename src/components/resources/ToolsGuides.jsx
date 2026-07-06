// import React from 'react'
// import { ArrowRight, Megaphone, BookOpenText, HandHeart, BriefcaseBusiness, Users } from 'lucide-react';

// export default function ToolsGuides () {
//     const guides=[
//         {Icon: Megaphone,
//          IconColor: "#f2690d",
//          IconBg: "bg-orange-50 border-orange-200",
//          Title: "Advocacy Toolkit",
//          Description: "Download guides, templates, and materials to support disability advocacy and community awareness."
//         },
//         {Icon: BookOpenText,
//          IconColor: "#0d3bf2",
//          IconBg: "bg-blue-50 border-blue-100",
//          Title: "Daily Living Tips",
//          Description: "Tips and strategies that encourage independent living, confidence, and everyday success."
//         },
//         {Icon:HandHeart,
//          IconColor: "#10670f",
//          IconBg: "bg-green-50 border-green-100",
//          Title: "Mental Well-being",
//          Description: "Resources focused on emotional wellness, self-care, mental health, and resilience."
//         },
//         {Icon: BriefcaseBusiness,
//          IconColor: "#420c92",
//          IconBg: "bg-purple-50 border-purple-100",
//          Title: "Career Development",
//          Description: "Helpful resources to build workplace skills, prepare for interviews, and explore employment opportunities."
//         },
//         {Icon: Users,
//          IconColor: "#f2690d",
//          IconBg: "bg-orange-50 border-orange-100",
//          Title: "Caregiver Hub",
//          Description: "Practical advice, educational resources, and support for parents, caregivers, and families."
//         }

//     ]
//   return (
//     <div className='container mx-auto flex flex-col items-center justify-center px-5 py-10 sm:px-8'>
//         <h1 className='pb-10 text-center text-xl font-bold tracking-wide text-blue-950 md:text-2xl'>Practical Tools for Everyday Life</h1>
//         <div className='grid w-full grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-y-0'>
//             {guides.map(({Icon, IconColor, IconBg, Title, Description}, index)=>(
//                 <div key={index} className={`relative flex flex-row items-start justify-start gap-3 px-4 text-center ${
//               index !== guides.length - 1 ? 'xl:border-r-2 xl:border-orange-100' : ''
//             }`}>
//                     <div className={`mb-5 flex items-start justify-center rounded-full border-2 ${IconBg} p-5`}>
//                         <Icon color={IconColor} strokeWidth={1.75} className='h-5 w-5 md:h-10 md:w-10'/>
//                     </div>
//                     <div className='flex flex-col items-baseline justify-items-center gap-3'>
//                         <h2 className='text-sm font-bold text-gray-900 md:text-base'>{Title}</h2>
//                         <p className='max-w-56 text-sm leading-tight text-neutral-600 text-left'>{Description}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
//   )
// }

import React from 'react'
import { Megaphone, BookOpenText, HandHeart, BriefcaseBusiness, Users } from 'lucide-react'

const guides = [
  {
    Icon: Megaphone,
    iconColor: 'text-[#f37421]',
    circleColor: 'bg-[#f37421]/10',
    Title: 'Advocacy Toolkit',
    Description: 'Download guides, templates, and materials to support disability advocacy and community awareness.'
  },
  {
    Icon: BookOpenText,
    iconColor: 'text-blue-600',
    circleColor: 'bg-blue-50',
    Title: 'Daily Living Tips',
    Description: 'Tips and strategies that encourage independent living, confidence, and everyday success.'
  },
  {
    Icon: HandHeart,
    iconColor: 'text-emerald-600',
    circleColor: 'bg-emerald-50',
    Title: 'Mental Well-being',
    Description: 'Resources focused on emotional wellness, self-care, mental health, and resilience.'
  },
  {
    Icon: BriefcaseBusiness,
    iconColor: 'text-purple-600',
    circleColor: 'bg-purple-50',
    Title: 'Career Development',
    Description: 'Helpful resources to build workplace skills, prepare for interviews, and explore employment opportunities.'
  },
  {
    Icon: Users,
    iconColor: 'text-amber-600',
    circleColor: 'bg-amber-50',
    Title: 'Caregiver Hub',
    Description: 'Practical advice, educational resources, and support for parents, caregivers, and families.'
  }
]

export default function ToolsGuides() {
  return (
    <section className="bg-slate-50 py-16 px-5 sm:px-8">
      <div className="container mx-auto max-w-7xl">
        
        <div className="flex flex-col justify-between gap-4 pb-12 border-b border-slate-200 mb-12">
          <div className="space-y-2">
            <span className="text-[#f37421] text-xs font-bold uppercase tracking-widest block">
              Resources
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
              Practical Tools for Everyday Life
            </h2>
          </div>
          <p className="text-sm md:text-base text-slate-500 max-w-md leading-relaxed">
            Empowering materials, guidance, and actionable toolkits curated to support growth, accessibility, and mental resilience.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {guides.map(({ Icon, iconColor, circleColor, Title, Description }, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex items-center gap-5">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${circleColor} ${iconColor}`}>
                  <Icon strokeWidth={1.5} className="h-7 w-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {Title}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                    {Description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}