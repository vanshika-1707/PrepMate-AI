import { ArrowUpRight, Check, ChevronRight, CircleHelp, FileText, Sparkles, Target } from 'lucide-react';

function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      <div className="absolute -left-8 top-20 size-32 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -right-6 bottom-10 size-40 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/75 p-3 shadow-2xl shadow-violet-950/10 backdrop-blur-xl sm:p-4">
        <div className="flex items-center justify-between border-b border-black/10 px-2 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-md bg-violet-500/15 text-violet-300"><Sparkles size={14} /></span>
            <span className="text-xs font-medium text-[#393240]">Resume intelligence</span>
          </div>
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300">Analysis ready</span>
        </div>
        <div className="grid gap-3 pt-3 sm:grid-cols-[1.05fr_.95fr]">
          <div className="rounded-xl border border-black/10 bg-black/[0.025] p-4">
            <div className="flex items-start justify-between">
              <div><p className="text-[11px] text-black/55">Resume match score</p><p className="mt-1 text-3xl font-semibold tracking-tight text-[#171319]">87<span className="text-base text-black/55">/100</span></p></div>
              <div className="flex size-11 items-center justify-center rounded-full border-[3px] border-violet-400/25 border-t-violet-400 text-xs font-medium text-violet-300">87%</div>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[87%] rounded-full bg-linear-to-r from-violet-500 to-indigo-400" /></div>
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between text-[11px]"><span className="text-black/55">Skills matched</span><span className="text-[#29232f]">12</span></div>
              <div className="flex items-center justify-between text-[11px]"><span className="text-black/55">Skills to improve</span><span className="text-amber-300">4</span></div>
            </div>
          </div>
          <div className="rounded-xl border border-black/10 bg-black/[0.025] p-4">
            <div className="flex items-center justify-between"><p className="text-[11px] text-black/55">Skill gaps</p><Target size={14} className="text-violet-300" /></div>
            <div className="mt-4 space-y-3">
              {['System design', 'TypeScript', 'Testing'].map((skill, index) => (
                <div key={skill}><div className="mb-1.5 flex justify-between text-[10px]"><span className="text-[#393240]">{skill}</span><span className="text-black/55">{[42, 64, 76][index]}%</span></div><div className="h-1 rounded-full bg-white/10"><div className={`h-full rounded-full bg-violet-400/70 ${['w-[42%]', 'w-[64%]', 'w-[76%]'][index]}`} /></div></div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-black/10 bg-black/[0.025] p-4">
            <div className="flex items-center gap-2"><CircleHelp size={14} className="text-indigo-300" /><p className="text-[11px] text-black/60">Suggested interview question</p></div>
            <p className="mt-3 text-xs leading-5 text-[#29232f]">How would you design a system that handles high traffic?</p>
            <div className="mt-3 flex items-center gap-1 text-[10px] text-violet-300">Practice answer <ChevronRight size={12} /></div>
          </div>
          <div className="rounded-xl border border-black/10 bg-black/[0.025] p-4">
            <div className="flex items-center gap-2"><FileText size={14} className="text-violet-300" /><p className="text-[11px] text-black/60">Recent analysis</p></div>
            <div className="mt-3 flex items-center gap-2"><span className="flex size-5 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300"><Check size={11} /></span><span className="text-xs text-[#29232f]">Frontend Engineer</span><ArrowUpRight size={12} className="ml-auto text-black/55" /></div>
            <p className="mt-2 text-[10px] text-black/55">Updated just now · Draft saved locally</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPreview;
