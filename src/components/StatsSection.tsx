import { useEffect, useRef, useState } from "react";
import { Code2, FolderGit2, Coffee, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { label: "Projects Built", value: 10, icon: FolderGit2, suffix: "+", color: "#b06eff" },
  { label: "Lines of Code", value: 5000, icon: Code2, suffix: "+", color: "#00dcd8" },
  { label: "Cups of Coffee", value: 200, icon: Coffee, suffix: "+", color: "#ff9f43" },
  { label: "GitHub Stars", value: 50, icon: Star, suffix: "+", color: "#ffd700" },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground" style={{ letterSpacing: "-0.02em" }}>
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const StatsSection = () => (
  <section className="py-12 sm:py-20 px-4 sm:px-6">
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 80}>
            <div className="glass rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-3 text-center card-hover">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: `${stat.color}18`,
                  border: `1px solid ${stat.color}28`,
                  boxShadow: `0 0 16px ${stat.color}12`,
                }}
              >
                <stat.icon
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  style={{ color: stat.color, filter: `drop-shadow(0 0 4px ${stat.color}70)` }}
                />
              </div>
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider font-mono leading-tight">
                {stat.label}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
