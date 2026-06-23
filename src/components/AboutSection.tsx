import { Heart, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => (
  <section id="about" className="py-20 sm:py-28 px-4 sm:px-6">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <div className="flex items-center justify-center gap-3 mb-10 sm:mb-14">
          <div className="h-px w-10 sm:w-12" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)/0.5))" }} />
          <h2
            className="font-display italic text-3xl sm:text-4xl md:text-5xl text-center text-gradient"
            style={{ lineHeight: "1.15", letterSpacing: "-0.01em" }}
          >
            About Me <Sparkles className="inline w-4 h-4 sm:w-5 sm:h-5 not-italic" style={{ color: "hsl(var(--accent))" }} />
          </h2>
          <div className="h-px w-10 sm:w-12" style={{ background: "linear-gradient(90deg, hsl(var(--primary)/0.5), transparent)" }} />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="glass rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.13), transparent 70%)", filter: "blur(20px)" }}
          />
          <div
            className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, hsl(var(--secondary)/0.10), transparent 70%)", filter: "blur(18px)" }}
          />

          <div
            className="font-display text-7xl sm:text-8xl leading-none mb-2 select-none pointer-events-none"
            style={{
              color: "hsl(var(--primary)/0.12)",
              fontStyle: "italic",
              lineHeight: 0.8,
              userSelect: "none",
            }}
          >
            "
          </div>

          <p
            className="text-base sm:text-lg md:text-xl text-center relative z-10"
            style={{
              lineHeight: "1.95",
              letterSpacing: "0.008em",
              color: "hsl(var(--foreground)/0.82)",
              fontStyle: "normal",
              fontWeight: 400,
              textWrap: "pretty",
            } as React.CSSProperties}
          >
            I'm a{" "}
            <em
              className="not-italic font-semibold"
              style={{ color: "hsl(var(--primary))" }}
            >
              16-year-old developer
            </em>{" "}
            in 10th grade, right at the start of my coding adventure. I live for that
            rush when a piece of code finally clicks — from building slick web interfaces
            to tinkering with automation and bots.{" "}
            <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            I also run{" "}
            <a
              href="https://t.me/SylveonLab"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold italic underline underline-offset-4 decoration-dotted transition-all duration-200 hover:decoration-solid"
              style={{ color: "hsl(var(--primary))" }}
            >
              @SylveonLab
            </a>{" "}
            on Telegram — a little corner of the internet where I share experiments,
            projects, and things I'm learning in real time.
          </p>

          <div className="flex justify-center mt-8 relative z-10 gap-3 items-center">
            <div className="h-px w-8 rounded-full" style={{ background: "hsl(var(--accent)/0.35)" }} />
            <Heart
              className="w-4 h-4 animate-pulse-soft"
              style={{ color: "hsl(var(--accent))", filter: "drop-shadow(0 0 6px hsl(var(--accent)/0.5))" }}
            />
            <div className="h-px w-8 rounded-full" style={{ background: "hsl(var(--accent)/0.35)" }} />
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AboutSection;
