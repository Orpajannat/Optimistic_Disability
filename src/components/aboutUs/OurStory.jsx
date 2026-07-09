import Image from 'next/image'

export default function OurStory() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-5 py-14 sm:px-10 sm:py-16 lg:px-8 lg:py-20 xl:px-12">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16">
          <div className="relative aspect-[4/3] w-full max-w-xl shrink-0 overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] border-r-4 border-orange-400 bg-orange-50 shadow-xl shadow-orange-900/10 lg:w-[46vw]">
            <Image
              src="/images/ourstory.jpg"
              alt="Community members working together"
              fill
              sizes="(min-width: 1024px) 46vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="flex w-full max-w-xl flex-col items-start">
            <span className="mb-5 inline-flex items-center rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600 sm:text-sm">
              Our Story
            </span>

            <h2 className="text-2xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              More than an organization,{' '}
              <span className="text-orange-500">we are a movement.</span>
            </h2>

            <div className="mt-6 flex max-w-lg flex-col gap-4 text-base leading-relaxed text-slate-500 sm:text-lg">
              <p>
                Optimistic Disability was founded with one belief: disability is not a limitation, it is a unique strength.
              </p>
              <p>
                We exist to create opportunities where people with disabilities are respected, empowered, and included in every aspect of society.
              </p>
              <p>
                Through advocacy, education, employment support, accessibility initiatives, and community engagement, we help remove barriers and build confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
