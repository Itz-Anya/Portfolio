import { Flower2, Heart } from 'lucide-react';
import Reveal from '@/components/Reveal';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-12 px-4 text-center">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <Reveal className="relative max-w-4xl mx-auto">
        <div className="animate-float">
          <Flower2 className="w-9 h-9 mx-auto text-pink-400" />
        </div>

        <p className="mt-4 text-sm md:text-base text-foreground/70 italic max-w-md mx-auto">
          "Built with curiosity, snacks, and a deeply questionable sleep schedule."
        </p>

        <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />

        <p className="mt-4 text-xs md:text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-1">
          © {year} · made with
          <Heart className="w-3.5 h-3.5 text-primary fill-primary animate-pulse-soft" />
          and Preact
        </p>
      </Reveal>
    </footer>
  );
};

export default Footer;
