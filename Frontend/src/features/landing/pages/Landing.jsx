import CTA from '../components/CTA';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Navbar from '../components/Navbar';
import ProductShowcase from '../components/ProductShowcase';
import WhyPrepMateAI from '../components/WhyPrepMateAI';
import { useEffect } from 'react';
import Lenis from 'lenis';

function Landing() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, syncTouch: true });
    let frameId;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f3f8] text-[#0d0d0c]">
      <Navbar />
      <main data-scroll-container>
        <Hero />
        <ProductShowcase />
        <Features />
        <HowItWorks />
        <WhyPrepMateAI />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
