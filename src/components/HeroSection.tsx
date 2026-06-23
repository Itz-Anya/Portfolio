import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const roles = ["Aspiring Developer", "Web Enthusiast", "Tech Explorer", "Creative Coder"];

const HeroSection = () => {
  const heroImage = "https://random-images-anya.vercel.app/anya";
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="min-h-[50svh] min-[800px]:min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20 pb-10 sm:pb-16 relative overflow-hidden">
      <ScrollReveal className="flex flex-col items-center w-full max-w-2xl mx-auto">
        <div className="animate-float mb-6 sm:mb-10 relative">
          <div className="w-[clamp(6rem,22vw,14rem)] h-[clamp(6rem,22vw,14rem)] rounded-full overflow-hidden avatar-ring relative">
            {!imageLoaded && (
              <div
                className="absolute inset-0 animate-pulse rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--muted)), hsl(var(--muted)/0.5), hsl(var(--muted)))",
                }}
              />
            )}
            <img
              src={heroImage}
              alt="Anya"
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading="eager"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>

        <h1
          className="font-display text-[clamp(2.25rem,8vw,4.5rem)] mb-2 sm:mb-3 text-center text-gradient"
          style={{ lineHeight: "1.05", letterSpacing: "-0.01em" }}
        >
          Hi, I'm Anya
        </h1>

        <p
          className="font-display italic text-sm sm:text-base md:text-lg mb-3 sm:mb-4 text-center max-w-xs sm:max-w-md"
          style={{
            color: "hsl(var(--muted-foreground))",
            letterSpacing: "0.015em",
            lineHeight: "1.6",
            fontWeight: 400,
          }}
        >
          HeHe
        </p>

        <div className="flex items-center gap-2 mt-0.5 mb-4 sm:mb-5 min-h-[24px] sm:min-h-[28px]">
          <span
            className="text-xs font-mono font-medium tracking-[0.18em] uppercase"
            style={{ color: "hsl(var(--muted-foreground)/0.7)" }}
          >
            {displayed}
            <span
              className="inline-block w-0.5 h-3.5 sm:h-4 ml-0.5 align-middle animate-pulse"
              style={{
                background: "linear-gradient(hsl(var(--primary)), hsl(var(--secondary)))",
                boxShadow: "0 0 6px hsl(var(--primary)/0.6)",
              }}
            />
          </span>
        </div>

        <div
          className="h-px w-16 sm:w-20 rounded-full"
          style={{
            background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
            boxShadow: "0 0 10px hsl(var(--primary)/0.4)",
          }}
        />
      </ScrollReveal>

      <a href="#about" className="absolute bottom-4 sm:bottom-10 animate-pulse-soft group hidden sm:flex">
        <div className="flex flex-col items-center gap-1 text-muted-foreground/40 group-hover:text-muted-foreground transition-colors">
          <span className="text-xs font-mono tracking-wider uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
