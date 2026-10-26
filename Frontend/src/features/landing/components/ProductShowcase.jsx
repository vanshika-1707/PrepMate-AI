import { ArrowUpRight, Check, CircleHelp, FileText, Sparkles, Target } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const states = [
  {
    id: 'analysis',
    eyebrow: '01 / Resume intelligence',
    title: 'See what your resume is really saying.',
    text: 'Turn a document into a clear signal. Understand your strengths, improve ATS readiness, and see where your story can become sharper.',
  },
  {
    id: 'gaps',
    eyebrow: '02 / Role alignment',
    title: 'Know exactly what to improve next.',
    text: 'Compare your experience with the role you want. PrepMate-AI highlights what already matches and makes the missing pieces actionable.',
  },
  {
    id: 'interview',
    eyebrow: '03 / Interview practice',
    title: 'Walk into interviews with a plan.',
    text: 'Practice the questions that matter for your target role, then track the topics that are becoming second nature.',
  },
];

const panelClass = 'min-h-[310px] rounded-2xl border border-black/10 bg-linear-to-br from-white/[0.03] to-white/40 p-4 sm:p-6';
const headerClass = 'flex items-center justify-between gap-4 border-b border-black/10 pb-4 text-xs text-[#29232f]';
const statusClass = 'rounded-full border border-violet-400/20 px-2.5 py-1 text-[10px] text-violet-300';
const labelClass = 'text-[11px] text-black/55';
const scoreClass = 'mt-1 text-3xl font-semibold tracking-tight text-[#171319]';
const noteClass = 'mt-5 flex items-start gap-2 rounded-xl border border-violet-400/10 bg-violet-500/[0.06] p-3 text-[11px] leading-5 text-violet-300';

function AnalysisPanel() {
  return (
    <div className={panelClass}>
      <div className={headerClass}><span className="flex items-center gap-2"><FileText size={15} /> Resume analysis</span><span className={statusClass}>Demo preview</span></div>
      <div className="mt-6 flex items-center justify-between">
        <div><p className={labelClass}>ATS readiness</p><p className={scoreClass}>87<span className="ml-1 text-base font-normal text-black/55">/100</span></p></div>
        <div className="flex size-14 items-center justify-center rounded-full border-[3px] border-violet-400/25 border-t-violet-400 text-xs font-medium text-violet-300">87%</div>
      </div>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[87%] rounded-full bg-linear-to-r from-violet-500 to-indigo-400" /></div>
      <div className="mt-5 grid gap-3">
        {['Clear impact statements', 'Strong frontend foundation', 'Add measurable outcomes'].map((item, index) => (
          <div key={item} className="flex items-center gap-2.5 text-xs text-[#393240]">
            <span className={`flex size-5 items-center justify-center rounded-full ${index === 2 ? 'bg-amber-400/10 text-amber-300' : 'bg-emerald-400/10 text-emerald-300'}`}>{index === 2 ? '!' : <Check size={11} />}</span>
            {item}
          </div>
        ))}
      </div>
      <div className={noteClass}><Sparkles size={14} className="mt-0.5 shrink-0" /><span>Your experience is strong. Add measurable results to make it easier to scan.</span></div>
    </div>
  );
}

function GapsPanel() {
  return (
    <div className={panelClass}>
      <div className={headerClass}><span className="flex items-center gap-2"><Target size={15} /> Frontend Engineer</span><span className={statusClass}>Role match</span></div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <div><p className={labelClass}>Role alignment</p><p className={scoreClass}>72<span className="ml-1 text-base font-normal text-black/55">%</span></p></div>
        <div className="h-1.5 w-1/2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[72%] rounded-full bg-linear-to-r from-emerald-400 to-lime-300" /></div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div><p className={labelClass}>Already matched</p>{['React', 'CSS systems', 'REST APIs'].map((item) => <div className="mt-3 flex items-center gap-2 text-xs text-emerald-300" key={item}><Check size={11} />{item}</div>)}</div>
        <div><p className={labelClass}>Build next</p>{['Testing', 'System design', 'TypeScript'].map((item) => <div className="mt-3 flex items-center gap-2 text-xs text-amber-300" key={item}><span>+</span>{item}</div>)}</div>
      </div>
      <div className={noteClass}><Target size={14} className="mt-0.5 shrink-0" /><span>Start with testing fundamentals to unlock the fastest improvement.</span></div>
    </div>
  );
}

function InterviewPanel() {
  return (
    <div className={panelClass}>
      <div className={headerClass}><span className="flex items-center gap-2"><CircleHelp size={15} /> Interview preparation</span><span className={statusClass}>3 of 8 topics</span></div>
      <div className="mt-6"><p className={labelClass}>Preparing for</p><p className="mt-1 text-sm text-[#29232f]">Frontend Engineer</p></div>
      <div className="mt-4 flex items-center gap-3 rounded-xl border border-black/10 p-4 text-xs leading-5 text-[#29232f]"><span className="text-violet-300">01</span><p className="flex-1">How would you design a reusable component system for a growing product?</p><ArrowUpRight size={15} className="shrink-0 text-violet-300" /></div>
      <div className="mt-4 flex flex-wrap gap-2">{['Architecture', 'Communication', 'JavaScript'].map((topic, index) => <span className={`rounded-full border px-2.5 py-1 text-[10px] ${index === 0 ? 'border-violet-400/35 bg-violet-500/10 text-violet-300' : 'border-black/10 text-black/60'}`} key={topic}>{topic}</span>)}</div>
      <div className="mt-5 text-[10px] text-black/60"><div className="flex justify-between"><span>Preparation progress</span><span>38%</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[38%] rounded-full bg-linear-to-r from-violet-500 to-indigo-400" /></div></div>
    </div>
  );
}

function ProductPanel({ state }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(124,91,194,0.12),transparent_60%),#ffffff] p-3 shadow-2xl shadow-black/10 sm:p-4">
      <div className="flex items-center justify-between px-1 pb-4">
        <span className="flex items-center gap-2 text-xs text-[#393240]"><Sparkles size={14} className="text-violet-300" /> PrepMate-AI</span>
        <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.55)]" />
      </div>
      {state === 'analysis' && <AnalysisPanel />}
      {state === 'gaps' && <GapsPanel />}
      {state === 'interview' && <InterviewPanel />}
    </div>
  );
}

function ProductShowcase() {
  const [activeState, setActiveState] = useState('analysis');
  const storyRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveState(entry.target.dataset.storyState);
      });
    }, { rootMargin: '-35% 0px -45% 0px', threshold: 0 });

    storyRefs.current.forEach((element) => element && observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-t border-black/10 bg-[#f7f3f8] py-20 sm:py-28" aria-label="PrepMate-AI product demonstration">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-10">
        <div>
          <div className="mb-12 max-w-md"><p className="text-sm font-medium text-violet-300">The PrepMate-AI method</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#171319] sm:text-4xl">One resume. A clearer path forward.</h2><p className="mt-5 text-base leading-7 text-black/60">A guided preparation workspace that moves with you from first draft to confident interview.</p></div>
          {states.map((item, index) => <article key={item.id} ref={(element) => { storyRefs.current[index] = element; }} data-story-state={item.id} className={`grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-t py-6 transition-opacity duration-300 ${activeState === item.id ? 'border-violet-400/40 opacity-100' : 'border-black/10 opacity-45'}`}><span className="text-xs text-violet-300">0{index + 1}</span><div><p className="text-xs font-medium uppercase tracking-[0.16em] text-violet-300">{item.eyebrow}</p><h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[#171319]">{item.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-black/55">{item.text}</p></div></article>)}
        </div>
        <div className="self-start lg:sticky lg:top-28"><ProductPanel state={activeState} /></div>
      </div>
    </section>
  );
}

export default ProductShowcase;
