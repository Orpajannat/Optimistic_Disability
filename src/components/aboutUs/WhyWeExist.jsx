// import React from 'react'
// import { CheckCircle, GraduationCap, Handshake, MapPin, UsersRound } from 'lucide-react'

// const reasons = [
//   'Disability is not inability.',
//   'Everyone deserves opportunity.',
//   'Inclusion benefits society.',
//   'Accessibility creates independence.',
//   'Communities grow stronger together.',
// ]

// const impacts = [
//   {
//     value: '500+',
//     label: 'People Supported',
//     Icon: UsersRound,
//   },
//   {
//     value: '120+',
//     label: 'Training Programs',
//     Icon: GraduationCap,
//   },
//   {
//     value: '30+',
//     label: 'Partner Organizations',
//     Icon: Handshake,
//   },
//   {
//     value: '10+',
//     label: 'Communities Served',
//     Icon: MapPin,
//   },
// ]

// export default function WhyWeExist () {
//   return (
//     <section className='container mx-auto px-5 py-10 sm:px-8'>
//       <div className='flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12'>
//         <div className='flex w-full flex-col lg:max-w-sm'>
//           <h1 className='pb-6 text-xl font-bold tracking-wide text-blue-950 md:text-2xl'>
//             WHY WE EXIST
//           </h1>
//           <div className='flex flex-col gap-4'>
//             {reasons.map((reason, index) => (
//               <div key={index} className='flex flex-row items-center gap-4'>
//                 <CheckCircle color='#f2690d' strokeWidth={2} className='h-6 w-6 shrink-0' />
//                 <p className='text-base font-medium text-neutral-700 md:text-lg'>{reason}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className='hidden w-px bg-orange-200 lg:block'></div>

//         <div className='flex w-full flex-col'>
//           <h1 className='pb-8 text-center text-xl font-bold tracking-wide text-blue-950 md:text-2xl lg:text-left'>
//             OUR IMPACT
//           </h1>
//           <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0'>
//             {impacts.map(({ value, label, Icon }, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col items-center px-5 text-center ${
//                   index !== impacts.length - 1 ? 'lg:border-r-2 lg:border-orange-100' : ''
//                 }`}
//               >
//                 <Icon color='#f2690d' strokeWidth={1.75} className='mb-4 h-16 w-16' />
//                 <h2 className='pb-2 text-4xl font-bold text-orange-500 md:text-5xl'>{value}</h2>
//                 <p className='text-base font-medium text-neutral-600'>{label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import React from 'react'
import { CheckCircle, GraduationCap, Handshake, MapPin, UsersRound } from 'lucide-react'

const reasons = [
  'Disability is not inability.',
  'Everyone deserves opportunity.',
  'Inclusion benefits society.',
  'Accessibility creates independence.',
  'Communities grow stronger together.',
]

const impacts = [
  {
    value: '500+',
    label: 'People Supported',
    Icon: UsersRound,
  },
  {
    value: '120+',
    label: 'Training Programs',
    Icon: GraduationCap,
  },
  {
    value: '30+',
    label: 'Partner Organizations',
    Icon: Handshake,
  },
  {
    value: '10+',
    label: 'Communities Served',
    Icon: MapPin,
  },
]

export default function WhyWeExist() {
  return (
    <section className="container mx-auto px-5 py-14 sm:px-8 max-w-7xl">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
        
        <div className="flex w-full flex-col lg:max-w-md">
          <div className="space-y-1 pb-6">
            <span className="text-[#f37421] text-xs font-bold uppercase tracking-widest">
              Purpose
            </span>
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-slate-900 uppercase">
              Why We Exist
            </h2>
          </div>
          <div className="flex flex-col gap-4.5">
            {reasons.map((reason, index) => (
              <div key={index} className="flex flex-row items-center gap-3.5 group">
                <CheckCircle className="h-5 w-5 shrink-0 text-[#f37421] stroke-[2.5]" />
                <p className="text-base font-semibold text-slate-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden w-px bg-slate-100 lg:block" />

        <div className="flex w-full flex-col justify-between">
          <div className="space-y-1 pb-8 text-center lg:text-left">
            <span className="text-[#f37421] text-xs font-bold uppercase tracking-widest">
              Numbers
            </span>
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-slate-900 uppercase">
              Our Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
            {impacts.map(({ value, label, Icon }, index) => (
              <div
                key={index}
                className={`flex flex-col items-center px-5 text-center ${
                  index !== impacts.length - 1 ? 'lg:border-r border-slate-100' : ''
                }`}
              >
                <div className="mb-4 text-[#f37421]">
                  <Icon strokeWidth={1.5} className="h-10 w-10" />
                </div>
                <h3 className="pb-1 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                  {value}
                </h3>
                <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-[140px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}