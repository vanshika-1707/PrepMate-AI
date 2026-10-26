import { ArrowRight, ClipboardCheck, Eye, FileText, PlayCircle, Sparkles, Trophy, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

const phrases = [
  { word: 'Discover', icon: Eye, tone: 'text-violet-800', background: 'from-[#f2e8f3] via-[#e5d4f3] to-[#e4d8ed]' },
  { word: 'Prepare', icon: ClipboardCheck, tone: 'text-orange-800', background: 'from-[#f7e9de] via-[#f7d7bf] to-[#efd8c9]' },
  { word: 'Improve', icon: TrendingUp, tone: 'text-green-800', background: 'from-[#e6eee4] via-[#cbded1] to-[#d4e3d7]' },
  { word: 'Succeed', icon: Trophy, tone: 'text-amber-800', background: 'from-[#f2ebd8] via-[#f2dfb4] to-[#e7d9b9]' },
];

function HeroPreview({ tone }) {
  return (
    <div className="relative grid min-h-[390px] place-items-center" aria-label="PrepMate-AI resume preparation preview">
      <div className="absolute size-[min(82%,390px)] rounded-full border border-black/10" />
      <div className="absolute size-[min(68%,320px)] rounded-full border border-black/10" />
      <div className="relative z-10 w-[84%] max-w-[370px] rotate-[-4deg] rounded-2xl border border-white/60 bg-white/65 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl transition-transform duration-500 hover:rotate-0">
        <div className="flex items-center justify-between border-b border-black/10 pb-4">
          <div className="flex items-center gap-2"><span className="flex size-8 items-center justify-center rounded-lg bg-black text-white"><FileText size={15} /></span><span className="text-xs font-semibold">Your roadmap</span></div>
          <span className="text-[10px] text-black/45">PrepMate-AI</span>
        </div>
        <div className="mt-5 h-2 w-2/3 rounded-full bg-black/15" />
        <div className="mt-3 h-2 w-1/2 rounded-full bg-black/10" />
        <div className="mt-7 grid grid-cols-3 gap-2">
          {['Resume', 'Skills', 'Interview'].map((label, index) => <div key={label} className="rounded-lg bg-black/[0.05] p-2.5"><div className="text-[9px] text-black/50">{label}</div><div className="mt-2 h-1.5 rounded-full bg-black/10"><div className={`h-full rounded-full bg-black/50 ${['w-[87%]', 'w-[64%]', 'w-[76%]'][index]}`} /></div></div>)}
        </div>
        <div className="mt-6 rounded-xl bg-black/[0.05] p-3"><div className="flex items-center justify-between text-[10px]"><span className="font-medium">Next best step</span><span className="text-black/45">01</span></div><p className="mt-2 text-xs leading-5 text-black/65">Practice system design questions for your target role.</p></div>
      </div>
      <div className={`absolute bottom-[12%] right-0 z-20 flex items-center gap-2.5 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-xl shadow-black/10 ${tone}`}>
        <Sparkles size={14} />
        <span><strong className="block text-sm text-[#171319]">87%</strong><small className="block text-[10px] text-black/55">match score</small></span>
      </div>
    </div>
  );
}

function Hero() {
  const [activeIndex, setActiveIndex] = useState(() => (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : 0
  ));

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActiveIndex((index) => (index + 1) % phrases.length);
    }, 1750);
    return () => window.clearInterval(timer);
  }, []);

  const activePhrase = phrases[activeIndex];
  const Icon = activePhrase.icon;

  return (
    <section id="top" className={`relative overflow-hidden bg-linear-to-br transition-colors duration-700 ${activePhrase.background}`}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(#171319_0.45px,transparent_0.45px)] [background-size:5px_5px] opacity-[0.08]" />
      <div className="relative mx-auto grid min-h-[72svh] max-w-7xl items-center gap-12 px-5 pb-16 pt-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-8 lg:px-10">
        <div className="relative z-10 text-center lg:text-left">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/25 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-black/60 backdrop-blur-md"><Sparkles size={12} /> YOUR AI-POWERED CAREER COMPANION</div>
          <h1 className="text-[clamp(3.75rem,9vw,8.5rem)] font-medium leading-[.86] tracking-[-0.075em] text-[#0d0d0c]">Your career,<br /><span key={activePhrase.word} className={`inline-flex items-center gap-[0.12em] transition-colors duration-500 ${activePhrase.tone}`}><Icon className="size-[0.58em] shrink-0" strokeWidth={1.5} aria-hidden="true" />{activePhrase.word}</span> <span>in your terms.</span></h1>
          <p className="mx-auto mt-8 max-w-lg text-sm leading-6 text-black/60 sm:text-base lg:mx-0">Turn your resume into a roadmap, uncover the skills employers want, and prepare for your next interview with AI.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link to="/register" className="inline-flex items-center gap-2 rounded-lg bg-[#0d0d0c] px-5 py-3 text-sm font-medium text-[#fbf6ef] transition-transform hover:-translate-y-0.5">Start Preparing <ArrowRight size={16} /></Link>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-black/25 px-5 py-3 text-sm font-medium text-[#0d0d0c] transition-colors hover:bg-black hover:text-[#fbf6ef]"><PlayCircle size={16} /> Explore Features</a>
          </div>
        </div>
        <div className="relative hidden min-h-[390px] lg:block"><HeroPreview tone={activePhrase.tone} /></div>
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-8 border-t border-black/10 px-5 py-10 sm:px-8 md:grid-cols-[1.2fr_repeat(3,1fr)] lg:px-10">
        <div><p className="text-2xl font-medium leading-tight tracking-[-0.04em] text-[#0d0d0c]">Build skills.<br />Unlock possibilities.</p></div>
        {[['4-in-1', 'Career preparation tools'], ['AI-powered', 'Personalized insights'], ['Job-ready', 'Focused practice']].map(([value, label]) => <div key={value}><p className="text-lg font-medium tracking-tight text-[#0d0d0c]">{value}</p><p className="mt-1 text-xs text-black/55">{label}</p></div>)}
      </div>
    </section>
  );
}

export default Hero;
