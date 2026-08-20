import { Sparkles, Atom, Server, Palette } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import RevealSection from '@/components/RevealSection';
import { SkillsSkeleton } from '@/components/SectionSkeletons';

const icon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}`;

interface Skill {
  name: string;
  icon?: string;
  lucide?: LucideIcon;
  note: string;
}

interface SkillGroup {
  title: string;
  blurb: string;
  skills: Skill[];
}

const groups: SkillGroup[] = [
  {
    title: 'Frontend',
    blurb: 'Where most of my late nights go.',
    skills: [
      { name: 'HTML', icon: icon('html5/html5-original.svg'), note: 'Structure & semantics' },
      { name: 'CSS', icon: icon('css3/css3-original.svg'), note: 'Layouts, animation, vibes' },
      { name: 'JavaScript', icon: icon('javascript/javascript-original.svg'), note: 'Making things move' },
      { name: 'TypeScript', icon: icon('typescript/typescript-original.svg'), note: 'JS, but it warns me first' },
      { name: 'Preact', lucide: Atom, note: 'Tiny components, big fun' },
    ],
  },
  {
    title: 'Scripting & Backend',
    blurb: 'Bots, small scripts, and the server side I keep exploring.',
    skills: [
      { name: 'Python', icon: icon('python/python-original.svg'), note: 'Bots & automation' },
      { name: 'Backend Development', lucide: Server, note: 'Currently learning' },
    ],
  },
  {
    title: 'Design',
    blurb: 'Making it look like someone cared.',
    skills: [{ name: 'UI/UX', lucide: Palette, note: 'Currently learning' }],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="cute-card relative">
          <span className="ribbon">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-display text-gradient">
            My Tech Skills
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-sm md:text-base">
            Things I actually use. No fake percentages, promise.
          </p>

          <RevealSection skeleton={<SkillsSkeleton />}>
            <div className="space-y-8">
              {groups.map((group) => (
                <div key={group.title}>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                    <h3 className="text-lg font-semibold text-foreground font-display">{group.title}</h3>
                    <span className="text-xs md:text-sm text-muted-foreground">{group.blurb}</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {group.skills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.06}s` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="relative flex items-center gap-3">
                          {skill.icon ? (
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              loading="lazy"
                              className="w-8 h-8 shrink-0 transition-transform duration-300 group-hover:scale-110"
                            />
                          ) : (
                            skill.lucide ? (
                              <skill.lucide className="w-8 h-8 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
                            ) : null
                          )}
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-foreground truncate">{skill.name}</p>
                            <p className="text-xs text-muted-foreground truncate">{skill.note}</p>
                          </div>
                        </div>
                        <div className="relative mt-3 h-1 rounded-full bg-muted overflow-hidden">
                          <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent transition-all duration-700 ease-out" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
