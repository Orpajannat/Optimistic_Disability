// import React from 'react'
// import { CircleCheck, Eye, Target } from 'lucide-react';

// export default function VisionMission () {
//   return (
//     <div className='container mx-auto flex w-full flex-col items-center justify-center gap-10 px-5 py-10 sm:px-8 md:flex-col lg:flex-col xl:flex-row xl:items-stretch'>
//         <div className='flex w-full max-w-2xl flex-col items-start gap-6 rounded-xl bg-orange-100/30 p-10 sm:flex-row sm:items-start sm:gap-10 sm:p-10 xl:max-w-none xl:flex-1'>
//             <Eye color="#f2690d" strokeWidth={1.25} size={150} className='h-24 w-24 shrink-0 rounded-full bg-orange-200/50 p-5 sm:h-[150px] sm:w-[150px] xl:self-center'/>
//             <div className='flex flex-col items-start justify-start gap-5 [&_br]:hidden sm:[&_br]:block'>
//                 <h1 className='text-orange-500 text-lg md:text-xl'>Our Vision</h1>
//                 <h2 className='text-xl md:text-2xl font-semibold text-black'>An inclusive world where<br/> everyone can thrive.</h2>
//                 <p className='text-base text-neutral-500'>To build an inclusive society where every person<br/> with a disability can live with confidence, independence,<br/> dignity, and equal opportunities. We envision communities<br/> where everyone is valued for their abilities, empowered to<br/> reach their full potential, and encouraged to contribute<br/> meaningfully to society without barriers or discrimination.</p>
//             </div>
//         </div>
//         <div className='flex w-full max-w-2xl flex-col items-start gap-6 rounded-xl bg-blue-100/30 p-10 sm:flex-row sm:items-start sm:gap-10 sm:p-10 xl:max-w-none xl:flex-1'>
//             <Target color="#0d28f2" strokeWidth={1.25} size={150} className='h-24 w-24 shrink-0 rounded-full bg-blue-200/50 p-5 sm:h-[150px] sm:w-[150px] xl:self-center'/>
//             <div className='flex flex-col items-start justify-start'>
//                 <h1 className='text-blue-500 text-lg md:text-xl'>Our Mission</h1>
//                 <h2 className='text-xl md:text-2xl font-semibold text-black pt-5'>Creating opportunities.</h2>
//                 <h2 className='text-xl md:text-2xl font-semibold text-black pb-5'>Changing lives.</h2>
//                 <div className='flex flex-row items-start gap-2'>
//                     <CircleCheck color="#0d33f2" size={20} className='mt-0.5 shrink-0'/>
//                     <p className='text-base text-neutral-500'>Promote disability awareness and positive representation.</p>
//                 </div>
//                 <div className='flex flex-row items-start gap-2'>
//                     <CircleCheck color="#0d33f2" size={20} className='mt-0.5 shrink-0'/>
//                     <p className='text-base text-neutral-500'>Support education, employment, and entrepreneurship opportunities.</p>
//                 </div>
//                 <div className='flex flex-row items-start gap-2'>
//                     <CircleCheck color="#0d33f2" size={20} className='mt-0.5 shrink-0'/>
//                     <p className='text-base text-neutral-500'>Encourage accessibility and inclusive environments.</p>
//                 </div>
//                 <div className='flex flex-row items-start gap-2'>
//                     <CircleCheck color="#0d33f2" size={20} className='mt-0.5 shrink-0'/>
//                     <p className='text-base text-neutral-500'>Empower individuals through skill development and community support.</p>
//                 </div>
//                 <div className='flex flex-row items-start gap-2'>
//                     <CircleCheck color="#0d33f2" size={20} className='mt-0.5 shrink-0'/>
//                     <p className='text-base text-neutral-500'>Advocate for equal rights, independence, and social inclusion.</p>
//                 </div>
//                 <div className='flex flex-row items-start gap-2'>
//                     <CircleCheck color="#0d33f2" size={20} className='mt-0.5 shrink-0'/>
//                     <p className='text-base text-neutral-500'>Foster optimism, confidence, and self-belief among people with disabilities.</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }


import React from 'react'
import { CircleCheck, Eye, Target } from 'lucide-react'

export default function VisionMission() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
      <div className="flex flex-col xl:flex-row items-stretch justify-center gap-8 lg:gap-10">
        
        <div className="flex w-full flex-col items-start gap-6 rounded-2xl bg-[#f37421]/5 border border-[#f37421]/10 p-6 sm:p-10 xl:flex-1">
          <div className="p-4 bg-[#f37421]/10 rounded-2xl shrink-0 text-[#f37421] sm:self-start">
            <Eye className="w-10 h-10 md:w-12 md:h-12 stroke-[1.5]" />
          </div>
          <div className="flex flex-col items-start justify-start gap-3 w-full">
            <span className="text-[#f37421] text-xs font-bold uppercase tracking-widest">
              Our Vision
            </span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              An inclusive world where every person can thrive.
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
              To build an inclusive society where every person with a disability can live with confidence, independence, dignity, and equal opportunities. We envision communities where everyone is valued for their abilities, empowered to reach their full potential, and encouraged to contribute meaningfully to society without barriers or discrimination.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-6 rounded-2xl bg-blue-50/50 border border-blue-100 p-6 sm:p-10 xl:flex-1">
          <div className="p-4 bg-blue-50 rounded-2xl shrink-0 text-blue-600 sm:self-start">
            <Target className="w-10 h-10 md:w-12 md:h-12 stroke-[1.5]" />
          </div>
          <div className="flex flex-col items-start justify-start gap-3 w-full">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">
              Our Mission
            </span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-none">
              Creating opportunities.
              <span className="block text-blue-600 mt-1">Changing lives.</span>
            </h2>
            
            <div className="flex flex-col gap-3.5 pt-4 w-full">
              {[
                "Promote disability awareness and positive representation.",
                "Support education, employment, and entrepreneurship opportunities.",
                "Encourage accessibility and inclusive environments.",
                "Empower individuals through skill development and community support.",
                "Advocate for equal rights, independence, and social inclusion.",
                "Foster optimism, confidence, and self-belief among people with disabilities."
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-blue-600 mt-0.5 shrink-0 stroke-[2]" />
                  <p className="text-sm md:text-base text-slate-600 leading-normal">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}