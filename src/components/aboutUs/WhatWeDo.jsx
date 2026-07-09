import { Accessibility, BookOpen, BriefcaseBusiness, UsersRound } from 'lucide-react'

const services = [
  {
    title: 'Education Support',
    description: 'We provide equal learning opportunities and resources for children and adults with disabilities.',
    Icon: BookOpen,
    iconColor: 'text-orange-600',
    borderColor: 'hover:border-orange-200',
    circleColor: 'bg-orange-100',
  },
  {
    title: 'Employment Support',
    description: 'We create pathways to meaningful employment and support entrepreneurship initiatives.',
    Icon: BriefcaseBusiness,
    iconColor: 'text-blue-600',
    borderColor: 'hover:border-blue-200',
    circleColor: 'bg-blue-100',
  },
  {
    title: 'Accessibility',
    description: 'We promote accessible environments, technology, and inclusive communities for all.',
    Icon: Accessibility,
    iconColor: 'text-emerald-600',
    borderColor: 'hover:border-emerald-200',
    circleColor: 'bg-emerald-100',
  },
  {
    title: 'Community Support',
    description: 'We offer guidance, care, and programs that uplift individuals and their families.',
    Icon: UsersRound,
    iconColor: 'text-purple-600',
    borderColor: 'hover:border-purple-200',
    circleColor: 'bg-purple-100',
  },
]

export default function WhatWeDo() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-5 py-14 sm:px-10 sm:py-16 lg:px-8 lg:py-20 xl:px-12">
        <div className="mx-auto max-w-2xl pb-12 text-center sm:pb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 sm:text-sm">
            Our Impact
          </span>
          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            What We Do
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
          {services.map(({ title, description, Icon, iconColor, borderColor, circleColor }) => (
            <article
              key={title}
              className={`flex h-full min-h-64 flex-col items-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7 lg:p-6 xl:p-8 ${borderColor}`}
            >
              <div className={`mb-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${circleColor} ${iconColor}`}>
                <Icon strokeWidth={1.5} className="h-8 w-8" />
              </div>

              <h3 className="text-xl font-bold tracking-tight text-slate-900">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base lg:text-sm xl:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
