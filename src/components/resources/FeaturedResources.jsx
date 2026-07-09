import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const resources = [
  {
    image: '/images/resource1.png',
    badge: 'Guide',
    backgroundColor: 'bg-orange-100/70',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-600',
    title: 'Guide to Disability Rights',
    description: 'A simple guide to understanding your legal rights, protections, and available support services.',
    slug: '1',
  },
  {
    image: '/images/resource2.png',
    badge: 'Article',
    backgroundColor: 'bg-blue-100/70',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
    title: 'Building Confidence Every Day',
    description: 'Practical tips and inspiring ideas to help build self-esteem, resilience, and independence.',
    slug: '2',
  },
  {
    image: '/images/resource3.png',
    badge: 'Webinar',
    backgroundColor: 'bg-emerald-100/70',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-600',
    title: 'Inclusive Education for All',
    description: 'Watch our expert webinar on creating accessible and inclusive learning environments.',
    slug: '3',
  },
  {
    image: '/images/resource4.png',
    badge: 'Checklist',
    backgroundColor: 'bg-purple-100/70',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600',
    title: 'Accessibility Checklist',
    description: 'Download a practical checklist to help make workplaces, schools, and public spaces more accessible.',
    slug: '4',
  },
]

export default function FeaturedResources() {
  return (
    <section className="bg-orange-50/50">
      <div className="container mx-auto px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              Featured Resources
            </span>
            <h2 className="mt-3 text-3xl font-serif leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Handpicked for You
            </h2>
          </div>

          <Link
            href="/viewResources"
            className="group inline-flex w-fit items-center gap-2 border-b border-orange-500 pb-1 text-sm font-semibold text-orange-600 transition-colors duration-200 hover:text-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:text-base"
          >
            View All Resources
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 xl:grid-cols-4 xl:gap-6">
          {resources.map((resource) => (
            <Link
              key={resource.slug}
              href={`/viewResources/${resource.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7 xl:p-6">
                <span
                  className={`w-fit rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${resource.backgroundColor} ${resource.borderColor} ${resource.textColor}`}
                >
                  {resource.badge}
                </span>

                <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-slate-900 xl:text-lg 2xl:text-xl">
                  {resource.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base xl:text-sm 2xl:text-base">
                  {resource.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition-colors duration-200 group-hover:text-orange-700 sm:text-base xl:text-sm 2xl:text-base">
                  Read More
                  <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
