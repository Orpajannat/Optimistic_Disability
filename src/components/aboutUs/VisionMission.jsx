import { CircleCheck, Eye, Target } from 'lucide-react'

const missionItems = [
  'Promote disability awareness and positive representation.',
  'Support education, employment, and entrepreneurship opportunities.',
  'Encourage accessibility and inclusive environments.',
  'Empower individuals through skill development and community support.',
  'Advocate for equal rights, independence, and social inclusion.',
  'Foster optimism, confidence, and self-belief among people with disabilities.'
]

export default function VisionMission() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-5 py-14 sm:px-10 sm:py-16 lg:px-8 lg:py-20 xl:px-12">
        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">
          <article className="flex h-full flex-col gap-6 rounded-2xl border border-orange-100 bg-orange-50/50 p-6 sm:p-8 lg:p-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 sm:h-[4.5rem] sm:w-[4.5rem]">
              <Eye className="h-9 w-9 stroke-[1.5] sm:h-10 sm:w-10" />
            </div>

            <div className="flex max-w-xl flex-col items-start">
              <span className="mb-4 text-xs font-bold uppercase tracking-widest text-orange-600 sm:text-sm">
                Our Vision
              </span>

              <h2 className="text-2xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                An inclusive world where every person can thrive.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                To build an inclusive society where every person with a disability can live with confidence,
                independence, dignity, and equal opportunities. We envision communities where everyone is
                valued for their abilities, empowered to reach their full potential, and encouraged to
                contribute meaningfully to society without barriers or discrimination.
              </p>
            </div>
          </article>

          <article className="flex h-full flex-col gap-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-6 sm:p-8 lg:p-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 sm:h-[4.5rem] sm:w-[4.5rem]">
              <Target className="h-9 w-9 stroke-[1.5] sm:h-10 sm:w-10" />
            </div>

            <div className="flex max-w-xl flex-col items-start">
              <span className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600 sm:text-sm">
                Our Mission
              </span>

              <h2 className="text-2xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Creating opportunities.{' '}
                <span className="text-blue-600">Changing lives.</span>
              </h2>

              <div className="mt-6 flex w-full flex-col gap-3.5">
                {missionItems.map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 stroke-[2]" />
                    <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
