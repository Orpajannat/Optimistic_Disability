import { Globe2, Heart, Rocket, ShieldCheck, Sun, UsersRound } from 'lucide-react'

const coreValues = [
  {
    title: 'Dignity',
    description: 'Everyone deserves respect and to be valued for who they are.',
    Icon: Heart,
  },
  {
    title: 'Inclusion',
    description: 'No one should be left behind. We embrace every individual.',
    Icon: UsersRound,
  },
  {
    title: 'Equality',
    description: 'Equal rights and opportunities for all in every aspect of life.',
    Icon: Globe2,
  },
  {
    title: 'Empowerment',
    description: 'We help individuals discover their potential and build independence.',
    Icon: Rocket,
  },
  {
    title: 'Optimism',
    description: 'We create hope, confidence, and brighter tomorrow.',
    Icon: Sun,
  },
  {
    title: 'Accessibility',
    description: 'We work to remove barriers in communities and systems.',
    Icon: ShieldCheck,
  },
]

export default function OurCoreValue() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-5 py-14 sm:px-10 sm:py-16 lg:px-8 lg:py-20 xl:px-12">
        <div className="mx-auto max-w-2xl pb-12 text-center sm:pb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 sm:text-sm">
            What Drives Us
          </span>
          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {coreValues.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="flex h-full flex-col items-center rounded-2xl border border-orange-100 bg-orange-50/40 p-6 text-center transition-transform duration-300 hover:-translate-y-1 sm:p-7 xl:p-5"
            >
              <div className="mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <Icon strokeWidth={1.5} className="h-8 w-8" />
              </div>

              <h3 className="text-lg font-bold tracking-tight text-slate-900">
                {title}
              </h3>
              <p className="mt-3 max-w-56 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
