import { BrainCircuit, FileCheck2, Gauge, ScanSearch } from 'lucide-react';

const features = [
  { icon: ScanSearch, title: 'AI Resume Analysis', text: 'Upload your resume and understand its strengths, weaknesses, and ATS compatibility.' },
  { icon: Gauge, title: 'Skill Gap Detection', text: 'Compare your resume with a target job description and identify the skills you should improve.' },
  { icon: BrainCircuit, title: 'AI Interview Preparation', text: 'Generate role-specific interview questions based on your resume and target position.' },
  { icon: FileCheck2, title: 'ATS-Optimized Resume', text: 'Create a structured, professional resume tailored to a target job while preserving the accuracy of your experience.' },
];

function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden border-t border-black/10 bg-linear-to-br from-[#f2e8f3] via-[#f7f3f8] to-[#e6eee4] py-24 text-[#0d0d0c] sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#171319_0.45px,transparent_0.45px)] [background-size:5px_5px] opacity-[0.08]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-violet-800">A focused toolkit</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Everything you need to land your next role.
          </h2>
          <p className="mt-4 text-base leading-7 text-black/60">
            Turn your preparation into a focused, measurable process.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group bg-white/65 p-7 transition-colors hover:bg-white/90 sm:p-9"
            >
              <div className="flex size-10 items-center justify-center rounded-lg border border-violet-800/15 bg-violet-800/[0.06] text-violet-800 transition-transform group-hover:scale-105">
                <Icon size={19} />
              </div>
              <h3 className="mt-6 text-base font-medium">{title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-black/60">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
