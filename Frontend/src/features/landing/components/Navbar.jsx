import { Menu, Sparkles, X } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why PrepMate-AI', href: '#why-prepmate-ai' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`sticky top-0 z-50 border-b border-black/10 bg-[#f4edf7]/80 backdrop-blur-xl transition-shadow duration-500 ${isScrolled ? 'shadow-lg shadow-black/10' : ''}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-2.5" onClick={closeMenu}>
          <span className="flex size-8 items-center justify-center rounded-lg border border-violet-300/20 bg-violet-500/15 text-violet-300">
            <Sparkles size={16} aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-[#0d0d0c] sm:text-base">PrepMate-AI</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-black/55 transition-colors hover:text-black">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/login" className="px-3 py-2 text-sm text-black/65 transition-colors hover:text-black">Log in</Link>
          <Link to="/register" className="rounded-lg bg-[#0d0d0c] px-4 py-2 text-sm font-medium text-[#fbf6ef] transition-colors hover:bg-black">Get Started</Link>
        </div>

        <button type="button" className="rounded-lg p-2 text-black/70 transition-colors hover:bg-black/10 md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-black/10 bg-[#f4edf7] px-5 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm text-black/65 hover:bg-black/5 hover:text-black">{link.label}</a>
            ))}
            <div className="mt-3 flex gap-3 border-t border-black/10 pt-4">
              <Link to="/login" onClick={closeMenu} className="flex-1 rounded-lg border border-black/15 px-4 py-2.5 text-center text-sm text-black/65">Log in</Link>
              <Link to="/register" onClick={closeMenu} className="flex-1 rounded-lg bg-[#0d0d0c] px-4 py-2.5 text-center text-sm font-medium text-[#fbf6ef]">Get Started</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
