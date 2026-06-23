import { Sparkles, BookOpen } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const learning = ["React", "Next.js", "Prisma", "Tailwind CSS", "Python", "APIs"];

const CurrentlyLearning = () => (
  <section className="py-8 sm:py-12 px-4 sm:px-6 overflow-hidden">
    <ScrollReveal>
      <div className="max-w-4xl mx-auto">
        <div
          className="glass rounded-2xl px-5 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ borderColor: "hsl(var(--primary)/0.15)" }}
        >
          <div className="flex items-center gap-3 shrink-0">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "hsl(var(--primary)/0.12)", border: "1px solid hsl(var(--primary)/0.2)" }}
            >
              <BookOpen className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
            </div>
            <span className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-widest whitespace-nowrap">
              Currently learning
            </span>
          </div>

          <div className="hidden sm:block w-px h-6 bg-border/50" />

          <div className="flex flex-wrap gap-2">
            {learning.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-xs font-mono font-semibold rounded-full px-3 py-1.5"
                style={{
                  background: "hsl(var(--primary)/0.08)",
                  border: "1px solid hsl(var(--primary)/0.18)",
                  color: "hsl(var(--foreground)/0.85)",
                }}
              >
                <Sparkles className="w-2.5 h-2.5" style={{ color: "hsl(var(--primary))" }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default CurrentlyLearning;
