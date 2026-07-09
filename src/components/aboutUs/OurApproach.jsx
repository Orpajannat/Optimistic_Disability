import { ArrowRight, BookOpenText, BriefcaseBusiness, HandHeart, Megaphone, Users } from 'lucide-react'

const approach = [
  {
    Icon: Megaphone,
    iconColor: 'text-orange-600',
    circleColor: 'bg-orange-100',
    title: 'Awareness',
    description: 'Raising awareness and promoting positive change.',
  },
  {
    Icon: BookOpenText,
    iconColor: 'text-blue-600',
    circleColor: 'bg-blue-100',
    title: 'Training',
    description: 'Skill development and capacity building.',
  },
  {
    Icon: HandHeart,
    iconColor: 'text-emerald-600',
    circleColor: 'bg-emerald-100',
    title: 'Support',
    description: 'Providing resources and guidance every step.',
  },
  {
    Icon: BriefcaseBusiness,
    iconColor: 'text-purple-600',
    circleColor: 'bg-purple-100',
    title: 'Employment',
    description: 'Connecting individuals to jobs and opportunities.',
  },
  {
    Icon: Users,
    iconColor: 'text-orange-600',
    circleColor: 'bg-orange-100',
    title: 'Community Inclusion',
    description: 'Building an inclusive society where everyone belongs.',
  },
]

export default function OurApproach() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-5 py-14 sm:px-10 sm:py-16 lg:px-8 lg:py-20 xl:px-12">
        <div className="mx-auto max-w-2xl pb-12 text-center sm:pb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 sm:text-sm">
            Our Process
          </span>
          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Our Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-10 2xl:gap-12">
          {approach.map(({ Icon, iconColor, circleColor, title, description }, index) => (
            <article
              key={title}
              className="relative flex h-full min-h-60 flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md xl:p-5 2xl:p-6"
            >
              {index !== approach.length - 1 && (
                <div className="pointer-events-none absolute left-[calc(100%+0.25rem)] top-14 z-10 hidden w-9 items-center xl:flex 2xl:w-12">
                  <div className="h-px flex-1 border-t border-dashed border-slate-300" />
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-300" />
                </div>
              )}

              <div className={`mb-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${circleColor} ${iconColor}`}>
                <Icon strokeWidth={1.5} className="h-8 w-8" />
              </div>

              <h3 className="text-lg font-bold tracking-tight text-slate-900">
                {title}
              </h3>
              <p className="mt-3 max-w-48 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
