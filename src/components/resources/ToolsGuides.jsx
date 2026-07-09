import { BookOpenText, BriefcaseBusiness, HandHeart, Megaphone, Users } from 'lucide-react'

const guides = [
  {
    Icon: Megaphone,
    iconColor: 'text-orange-600',
    circleColor: 'bg-orange-100',
    title: 'Advocacy Toolkit',
    description: 'Download guides, templates, and materials to support disability advocacy and community awareness.',
  },
  {
    Icon: BookOpenText,
    iconColor: 'text-blue-600',
    circleColor: 'bg-blue-100',
    title: 'Daily Living Tips',
    description: 'Tips and strategies that encourage independent living, confidence, and everyday success.',
  },
  {
    Icon: HandHeart,
    iconColor: 'text-emerald-600',
    circleColor: 'bg-emerald-100',
    title: 'Mental Well-being',
    description: 'Resources focused on emotional wellness, self-care, mental health, and resilience.',
  },
  {
    Icon: BriefcaseBusiness,
    iconColor: 'text-purple-600',
    circleColor: 'bg-purple-100',
    title: 'Career Development',
    description: 'Helpful resources to build workplace skills, prepare for interviews, and explore employment opportunities.',
  },
  {
    Icon: Users,
    iconColor: 'text-amber-600',
    circleColor: 'bg-amber-100',
    title: 'Caregiver Hub',
    description: 'Practical advice, educational resources, and support for parents, caregivers, and families.',
  },
]

export default function ToolsGuides() {
  return (
    <section className="bg-slate-50">
      <div className="container mx-auto px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-slate-200 pb-10 sm:mb-12 sm:pb-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="block text-xs font-bold uppercase tracking-widest text-orange-600 sm:text-sm">
              Resources
            </span>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Practical Tools for Everyday Life
            </h2>
            <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
              Empowering materials, guidance, and actionable toolkits curated to support growth, accessibility, and mental resilience.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {guides.map(({ Icon, iconColor, circleColor, title, description }) => (
            <article
              key={title}
              className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md sm:flex-row sm:items-center"
            >
              <div className="flex min-w-0 items-start gap-5 sm:items-center">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${circleColor} ${iconColor}`}>
                  <Icon strokeWidth={1.5} className="h-7 w-7" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-bold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-1 max-w-3xl text-sm leading-relaxed text-slate-600">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
