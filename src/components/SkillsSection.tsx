import { Code2, Database, FileCode2, FileType, GitBranch, Globe, Palette, Server, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { name: "HTML", icon: Globe, color: "#e44d26" },
  { name: "CSS", icon: Palette, color: "#264de4" },
  { name: "JavaScript", icon: FileCode2, color: "#f7df1e" },
  { name: "TypeScript", icon: FileType, color: "#3178c6" },
  { name: "SQL", icon: Database, color: "#00b4d8" },
  { name: "Node.js", icon: Server, color: "#68a063" },
  { name: "Git", icon: GitBranch, color: "#f05032" },
  { name: "UI/UX Basics", icon: Code2, color: "#b06eff" },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <div className="flex items-center justify-center gap-3 mb-10 sm:mb-14">
          <div className="h-px w-10 sm:w-12" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)/0.5))" }} />
          <h2
            className="font-display italic text-3xl sm:text-4xl md:text-5xl text-center text-gradient"
            style={{ lineHeight: "1.15", letterSpacing: "-0.01em" }}
          >
            Tech Skills <Zap className="inline w-4 h-4 sm:w-5 sm:h-5" style={{ color: "hsl(var(--primary))" }} />
          </h2>
          <div className="h-px w-10 sm:w-12" style={{ background: "linear-gradient(90deg, hsl(var(--primary)/0.5), transparent)" }} />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {skills.map((skill, i) => (
          <ScrollReveal key={skill.name} delay={i * 70}>
            <div className="glass rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-3 card-hover cursor-default group">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: `${skill.color}18`,
                  border: `1px solid ${skill.color}30`,
                }}
              >
                <skill.icon
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-foreground/90 font-mono text-center">{skill.name}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
