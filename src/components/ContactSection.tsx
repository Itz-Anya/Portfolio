import { Github, Instagram, Mail, Send, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const contacts = [
  { label: "Telegram", icon: Send, href: "https://t.me/SylveonHere", color: "#2AABEE" },
  { label: "GitHub", icon: Github, href: "https://github.com/Itz-Anya", color: "#b06eff" },
  { label: "Email", icon: Mail, href: "mailto:Itz-Anya@outlook.com", color: "#ff3ac8" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com/itz_anya.911", color: "#f77737" },
];

const ContactSection = () => (
  <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6">
    <div className="max-w-2xl mx-auto">
      <ScrollReveal>
        <div className="flex items-center justify-center gap-3 mb-10 sm:mb-14">
          <div className="h-px w-10 sm:w-12" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)/0.5))" }} />
          <h2
            className="font-display italic text-3xl sm:text-4xl md:text-5xl text-center text-gradient"
            style={{ lineHeight: "1.15", letterSpacing: "-0.01em" }}
          >
            Let's Connect <MessageCircle className="inline w-4 h-4 sm:w-5 sm:h-5" style={{ color: "hsl(var(--secondary))" }} />
          </h2>
          <div className="h-px w-10 sm:w-12" style={{ background: "linear-gradient(90deg, hsl(var(--primary)/0.5), transparent)" }} />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <p className="text-center text-muted-foreground text-sm sm:text-base mb-8 font-light">
          I'm always open to chatting about tech, projects, or just saying hi.
        </p>
        <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              title={c.label}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl glass flex items-center justify-center hover:-translate-y-2 active:scale-95 transition-all duration-300 group relative touch-manipulation"
              style={{ border: `1px solid ${c.color}25` }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `${c.color}10` }}
              />
              <c.icon
                className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:scale-110 transition-transform duration-300"
                style={{ color: c.color, filter: `drop-shadow(0 0 6px ${c.color}55)` }}
              />
              <span
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"
                style={{ color: c.color }}
              >
                {c.label}
              </span>
            </a>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ContactSection;
