const steps = [
  ['01', 'Upload Your Resume', 'Start with your existing resume.'],
  ['02', 'Choose Your Target Role', 'Add a job description to define your goal.'],
  ['03', 'Discover Your Gaps', 'Understand the skills and topics you need to improve.'],
  ['04', 'Prepare With Confidence', 'Practice relevant questions and refine your resume.'],
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-t border-black/10 bg-linear-to-br from-[#f2e8f3] via-[#f7f3f8] to-[#f7e9de] py-24 text-[#0d0d0c] sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#171319_0.45px,transparent_0.45px)] [background-size:5px_5px] opacity-[0.08]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-violet-800">The workflow</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            A smarter path from application to offer.
          </h2>
        </div>
        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="absolute left-[12%] right-[12%] top-5 hidden h-px bg-linear-to-r from-violet-800/25 via-black/10 to-violet-800/25 md:block" />
          {steps.map(([number, title, text]) => (
            <div key={number} className="relative flex gap-5 md:block">
              <span className="relative flex size-10 shrink-0 items-center justify-center rounded-full border border-violet-800/20 bg-white/60 text-xs font-medium text-violet-800 backdrop-blur-sm">
                {number}
              </span>
              <div className="pt-1 md:pt-6">
                <h3 className="text-sm font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/60">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
