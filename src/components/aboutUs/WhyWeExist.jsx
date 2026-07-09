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
    <section className="bg-white">
      <div className="container mx-auto px-5 py-14 sm:px-10 sm:py-16 lg:px-8 lg:py-20 xl:px-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.45fr)] lg:items-stretch lg:gap-8 xl:gap-10">
          <article className="flex h-full flex-col rounded-2xl border border-orange-100 bg-orange-50/40 p-6 sm:p-8 lg:p-10">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 sm:text-sm">
              Purpose
            </span>
            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Why We Exist
            </h2>

            <div className="mt-8 flex flex-col gap-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange-600 stroke-[2.5]" />
                  <p className="text-base font-semibold leading-relaxed text-slate-700 sm:text-lg">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 sm:text-sm">
                Numbers
              </span>
              <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Our Impact
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {impacts.map(({ value, label, Icon }) => (
                <div
                  key={label}
                  className="flex h-full flex-col items-center rounded-2xl border border-slate-100 bg-slate-50/70 p-6 text-center"
                >
                  <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Icon strokeWidth={1.5} className="h-7 w-7" />
                  </div>

                  <h3 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl xl:text-4xl 2xl:text-5xl">
                    {value}
                  </h3>
                  <p className="mt-3 max-w-32 text-sm font-medium leading-relaxed text-slate-600">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
