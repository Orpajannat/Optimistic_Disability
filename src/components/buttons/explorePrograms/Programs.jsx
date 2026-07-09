import Link from 'next/link'
import {
  Accessibility,
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  HeartPulse,
  Megaphone,
  Scale,
  Sparkles,
  UsersRound,
} from 'lucide-react'

const programs = [
  {
    title: 'Disability Awareness',
    description: 'We create awareness and promote positive attitudes towards disability inclusion and equal rights.',
    Icon: Megaphone,
    iconColor: 'text-orange-500',
    bg: 'bg-orange-100',
    slug: 'disability-awarness',
  },
  {
    title: 'Education Support',
    description: 'We support access to quality education, learning resources, scholarships, and inclusive learning environments.',
    Icon: GraduationCap,
    iconColor: 'text-blue-600',
    bg: 'bg-blue-100',
    slug: 'education-support',
  },
  {
    title: 'Employment Assistance',
    description: 'We help individuals find meaningful employment through training, job placement, and employer partnerships.',
    Icon: BriefcaseBusiness,
    iconColor: 'text-green-600',
    bg: 'bg-green-100',
    slug: 'employment-assistance',
  },
  {
    title: 'Skill Development',
    description: 'We provide training programs to build confidence, develop skills, and encourage independence.',
    Icon: Sparkles,
    iconColor: 'text-purple-600',
    bg: 'bg-purple-100',
    slug: 'skill-development',
  },
  {
    title: 'Healthcare Guidance',
    description: 'We provide guidance and support to access healthcare services and promote overall well-being.',
    Icon: HeartPulse,
    iconColor: 'text-rose-500',
    bg: 'bg-rose-100',
    slug: 'healthcare-guidance',
  },
  {
    title: 'Assistive Technology',
    description: 'We provide access to assistive devices and technology that enhance independence and improve daily living.',
    Icon: Accessibility,
    iconColor: 'text-cyan-600',
    bg: 'bg-cyan-100',
    slug: 'assistive-technology',
  },
  {
    title: 'Legal Support',
    description: 'We offer legal awareness and support to protect rights and ensure access to justice and entitlements.',
    Icon: Scale,
    iconColor: 'text-amber-600',
    bg: 'bg-amber-100',
    slug: 'legal-support',
  },
  {
    title: 'Community Inclusion',
    description: 'We promote participation in community life and create inclusive spaces for all to belong and grow.',
    Icon: UsersRound,
    iconColor: 'text-purple-600',
    bg: 'bg-purple-100',
    slug: 'community-inclusion',
  },
]

export default function Programs() {
  return (
    <section className="border-y border-slate-100/80 bg-orange-50/40 px-5 py-16 sm:px-8 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          {programs.map(({ title, description, Icon, iconColor, bg, slug }) => (
            <Link
              key={slug}
              href={`/explorePrograms/${slug}`}
              className="group flex min-h-[300px] flex-col items-start justify-between gap-5 rounded-2xl border border-slate-200/60 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              <div className="flex w-full flex-col items-start gap-4">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${bg}`}>
                  <Icon className={iconColor} size={26} strokeWidth={2} />
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-snug tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {description}
                  </p>
                </div>
              </div>

              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-bold uppercase tracking-wider text-orange-600 transition-colors duration-200 group-hover:text-orange-700">
                Learn More
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
