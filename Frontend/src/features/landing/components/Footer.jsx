import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10">
        <div><a href="#top" className="flex items-center gap-2.5"><span className="flex size-7 items-center justify-center rounded-md bg-violet-500/15 text-violet-300"><Sparkles size={14} /></span><span className="text-sm font-semibold text-[#29232f]">PrepMate-AI</span></a><p className="mt-4 max-w-xs text-xs leading-5 text-black/55">A clearer, more focused way to prepare for the opportunities ahead.</p></div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-black/55"><a href="#features" className="hover:text-[#29232f]">Features</a><a href="#how-it-works" className="hover:text-[#29232f]">How It Works</a><Link to="/login" className="hover:text-[#29232f]">Log in</Link><Link to="/register" className="inline-flex items-center gap-1 hover:text-[#29232f]">Get Started <ArrowUpRight size={12} /></Link></div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-black/10 px-5 py-5 text-xs text-black/45 sm:px-8 lg:px-10">© {currentYear} PrepMate-AI. Built for better preparation.</div>
    </footer>
  );
}

export default Footer;
