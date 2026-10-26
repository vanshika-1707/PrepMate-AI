import { Compass, ListChecks, Target } from 'lucide-react';

const principles = [
  [Compass, 'Focused preparation', 'Spend your time on the practice that moves you closer to the role you want, instead of random drills.'],
  [Target, 'Role-specific insights', 'Get guidance shaped around your target role and your own experience, not generic advice.'],
  [ListChecks, 'Clear next steps', 'Turn a long list of possibilities into a small, actionable plan you can follow with confidence.'],
];

function WhyPrepMateAI() {
  return (
    <section
      id="why-prepmate-ai"
      className="relative overflow-hidden border-t border-black/10 bg-linear-to-br from-[#f7e9de] via-[#f7f3f8] to-[#f2ebd8] py-24 text-[#0d0d0c] sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#171319_0.45px,transparent_0.45px)] [background-size:5px_5px] opacity-[0.08]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:px-10">
        <div>
          <p className="text-sm font-medium text-violet-800">Why PrepMate-AI</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
            Stop guessing.
            <br />
            <span className="text-black/55">Start preparing with purpose.</span>
          </h2>
        </div>
        <div className="divide-y divide-black/10 border-y border-black/10">
          {principles.map(([Icon, title, text]) => (
            <div key={title} className="flex gap-5 py-6">
              <Icon size={20} className="mt-1 shrink-0 text-violet-800" />
              <div>
                <h3 className="text-sm font-medium">{title}</h3>
                <p className="mt-2 max-w-lg text-sm leading-6 text-black/60">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyPrepMateAI;
