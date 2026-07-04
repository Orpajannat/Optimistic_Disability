import React from 'react'
import {
  ArrowRight,
  ClipboardList,
  HandHeart,
  Lightbulb,
  Star,
  TrendingUp,
} from 'lucide-react'

const steps = [
  {
    title: '1. Understand',
    description: "We listen and understand each individual's needs and challenges.",
    icon: <Lightbulb className='text-orange-500' size={46} strokeWidth={2} />,
    bg: 'bg-orange-50',
    border: 'border-orange-200',
  },
  {
    title: '2. Plan',
    description: 'We create a personalized plan with clear goals and the right support.',
    icon: <ClipboardList className='text-blue-600' size={46} strokeWidth={2} />,
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    title: '3. Support',
    description: 'We provide resources, training, and guidance every step of the way.',
    icon: <HandHeart className='text-green-600' size={46} strokeWidth={2} />,
    bg: 'bg-green-50',
    border: 'border-green-200',
  },
  {
    title: '4. Empower',
    description: 'We build confidence, independence, and real-life skills.',
    icon: <TrendingUp className='text-purple-600' size={46} strokeWidth={2} />,
    bg: 'bg-purple-50',
    border: 'border-purple-200',
  },
  {
    title: '5. Transform',
    description: 'We help individuals achieve their goals and lead meaningful lives.',
    icon: <Star className='text-orange-500' size={46} strokeWidth={2} />,
    bg: 'bg-orange-50',
    border: 'border-orange-200',
  },
]

export default function HowWeDeliver () {
  return (
    <section className='bg-orange-100/20 py-12 md:py-16 lg:py-20'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8 xl:px-0'>
        <div className='flex flex-col items-center text-center gap-2'>
          <p className='text-xs md:text-sm font-bold uppercase text-orange-500'>Our Approach</p>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900'>How We Deliver Our Services</h2>
        </div>

        <div className='mt-10 lg:mt-14 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 xl:gap-8'>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className='flex w-full max-w-[260px] flex-col items-center text-center'>
                <div className={`flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-full border ${step.border} ${step.bg}`}>
                  {step.icon}
                </div>
                <h3 className='mt-5 text-lg md:text-xl font-bold text-neutral-900'>{step.title}</h3>
                <p className='mt-2 text-sm md:text-base leading-relaxed text-neutral-600'>{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className='flex lg:w-20 xl:w-24 items-center justify-center text-neutral-700'>
                  <div className='hidden lg:flex items-center'>
                    <span className='w-8 xl:w-10 border-t-2 border-dotted border-neutral-700'></span>
                    <ArrowRight size={24} strokeWidth={2.2} />
                  </div>
                  <ArrowRight className='lg:hidden rotate-90' size={24} strokeWidth={2.2} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
