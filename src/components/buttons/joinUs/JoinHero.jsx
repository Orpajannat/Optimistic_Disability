export default function JoinHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute bottom-10 right-0 h-24 w-48 bg-[radial-gradient(circle,#f37421_2px,transparent_2px)] opacity-30 [background-size:12px_12px] [mask-image:linear-gradient(to_left,black,transparent)] lg:h-32 lg:w-64" />

      <div className="container relative z-10 mx-auto flex flex-col items-start px-5 py-16 sm:py-20 lg:px-10 lg:py-24">
        <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-orange-600 sm:text-sm">
          Get Involved
        </span>

        <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
          Join Our Mission
        </h1>

        <div className="mb-6 h-1.5 w-16 rounded-full bg-orange-500" />

        <p className="max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
          Every contribution, whether it&apos;s your time, skills, or financial support, helps create a more inclusive future for persons with disabilities. Join us in building opportunities, removing barriers, and changing lives.
        </p>
      </div>
    </section>
  )
}
