import { useState, useEffect, useRef } from 'preact/hooks';
import { Sparkles, Monitor, Palette, Bug, Flower2 } from 'lucide-react';
import { PROFILE_IMAGE } from '@/data/profile';
import ImageWithSkeleton from '@/components/ImageWithSkeleton';

const typewriterTexts = [
  "Frontend Developer",
  "Bot Builder",
  "UI Tinkerer",
  "Late-night Coder",
  "Perpetual Learner"
];

const tags = [
  { label: "UI Tinkerer", icon: Palette },
  { label: "Bot Builder", icon: Bug },
  { label: "Idea Collector", icon: Sparkles },
  { label: "Chill Coder", icon: Flower2 },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (!sectionRef.current || e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (touch.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (touch.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x: x * 0.5, y: y * 0.5 });
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        const x = Math.max(-1, Math.min(1, e.gamma / 45));
        const y = Math.max(-1, Math.min(1, (e.beta - 45) / 45));
        setMousePosition({ x: x * 0.3, y: y * 0.3 });
      }
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('deviceorientation', handleDeviceOrientation);

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, []);

  useEffect(() => {
    const currentText = typewriterTexts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center px-4 py-20 pt-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 animate-gradient-shift" />
        <div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)` }}
        />
        <div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float-slow-reverse transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl transition-transform duration-500 ease-out"
          style={{ transform: `translate(calc(-50% + ${mousePosition.x * 60}px), calc(-50% + ${mousePosition.y * 60}px))` }}
        />
      </div>

      <div className="max-w-5xl w-full">
        <div className="cute-card relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative animate-fade-in-up flex-shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-glow-pulse opacity-75 blur-sm" />
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-glow-spin" />

              <div className="profile-image relative group cursor-pointer">
                <ImageWithSkeleton
                  src={PROFILE_IMAGE}
                  alt="Anya"
                  loading="eager"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 40px hsl(340 82% 66% / 0.5), 0 0 80px hsl(280 60% 85% / 0.3)' }} />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left min-w-0">
              <h1 className="text-6xl md:text-8xl text-foreground mb-4 animate-fade-in-up font-signature break-words" style={{ fontWeight: 700, letterSpacing: '0.01em', fontStyle: 'normal', textShadow: '0 0 40px hsl(340 82% 66% / 0.3), 0 4px 25px hsl(340 30% 25% / 0.15)' }}>
                Anya
              </h1>

              <p className="text-base md:text-xl text-muted-foreground mb-4 animate-fade-in-up stagger-1 flex items-start justify-center md:justify-start gap-2 italic">
                <span>"Turning random 2am ideas into things that actually run."</span>
                <span className="inline-block animate-wiggle shrink-0 pt-1"><Sparkles className="w-5 h-5 text-primary" /></span>
              </p>

              <div className="h-8 mb-6 animate-fade-in-up stagger-2 flex items-center justify-center md:justify-start gap-2">
                <Monitor className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xl md:text-2xl font-medium text-gradient">
                  {displayText}
                </span>
                <span className="cursor"></span>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 animate-fade-in-up stagger-3">
                {tags.map((tag, index) => {
                  const Icon = tag.icon;
                  return (
                    <span
                      key={tag.label}
                      className="tag flex items-center gap-2"
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                      <Icon className="w-4 h-4" />
                      {tag.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
