import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

function CTA() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-violet-300/30 bg-white/70 px-6 py-16 text-center sm:px-12"><div className="pointer-events-none absolute left-1/2 top-0 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/20 blur-3xl" /><div className="relative"><p className="text-sm font-medium text-violet-700">Ready when you are</p><h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-[#171319] sm:text-4xl">Your next opportunity deserves your best preparation.</h2><p className="mx-auto mt-4 max-w-md text-sm leading-6 text-black/60">Build a clearer path to your next interview with PrepMate-AI.</p><div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"><Link to="/register" className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-5 py-3 text-sm font-medium text-[#171319] hover:bg-white">Get Started Free <ArrowRight size={16} /></Link><Link to="/login" className="text-sm text-black/60 transition-colors hover:text-white">Already have an account? <span className="text-[#29232f]">Sign in</span></Link></div></div></div>
    </section>
  );
}

export default CTA;
