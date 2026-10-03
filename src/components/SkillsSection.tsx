import { useMemo, useState } from 'react';
import {
  Sparkles,
  Atom,
  Server,
  Palette,
  Code2,
  Smartphone,
  Bot,
  Rocket,
  Wrench,
  Layers,
  Database,
  LayoutGrid,
} from 'lucide-react';
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
  learning?: boolean;
  invert?: boolean;
}

interface SkillGroup {
  id: string;
  title: string;
  blurb: string;
  Icon: LucideIcon;
  skills: Skill[];
}

const groups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    blurb: 'Where most of my late nights go.',
    Icon: Layers,
    skills: [
      { name: 'HTML', icon: icon('html5/html5-original.svg'), note: 'Structure & semantics' },
      { name: 'CSS', icon: icon('css3/css3-original.svg'), note: 'Layouts, animation, vibes' },
      { name: 'JavaScript', icon: icon('javascript/javascript-original.svg'), note: 'Making things move' },
      { name: 'TypeScript', icon: icon('typescript/typescript-original.svg'), note: 'JS, but it warns me first' },
      { name: 'React', icon: icon('react/react-original.svg'), note: 'Components & hooks' },
      { name: 'Preact', lucide: Atom, note: 'Tiny components, big fun' },
      { name: 'SvelteKit', icon: icon('svelte/svelte-original.svg'), note: 'Less code, more speed', learning: true },
      { name: 'Next.js', icon: icon('nextjs/nextjs-original.svg'), note: 'Full-stack React', invert: true },
      { name: 'Tailwind CSS', icon: icon('tailwindcss/tailwindcss-original.svg'), note: 'Utility-first styling' },
      { name: 'Vite', icon: icon('vitejs/vitejs-original.svg'), note: 'Instant dev server' },
      { name: 'Framer Motion', icon: icon('framermotion/framermotion-original.svg'), note: 'Smooth animations', invert: true },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Databases',
    blurb: 'Servers, data, and the parts users never see.',
    Icon: Database,
    skills: [
      { name: 'Node.js', icon: icon('nodejs/nodejs-original.svg'), note: 'JS on the server' },
      { name: 'Express', icon: icon('express/express-original.svg'), note: 'Simple REST APIs', invert: true },
      { name: 'Python', icon: icon('python/python-original.svg'), note: 'Bots & automation' },
      { name: 'Supabase', icon: icon('supabase/supabase-original.svg'), note: 'Auth, DB & storage', learning: true },
      { name: 'MongoDB', icon: icon('mongodb/mongodb-original.svg'), note: 'Document databases', learning: true },
      { name: 'PostgreSQL', icon: icon('postgresql/postgresql-original.svg'), note: 'Relational data', learning: true },
      { name: 'Firebase', icon: icon('firebase/firebase-original.svg'), note: 'Realtime & hosting' },
      { name: 'Redis', icon: icon('redis/redis-original.svg'), note: 'Fast caching', learning: true },
      { name: 'Backend Development', lucide: Server, note: 'Currently learning', learning: true },
    ],
  },
  {
    id: 'bots',
    title: 'Bots & Automation',
    blurb: 'Little programs that do boring things for me.',
    Icon: Bot,
    skills: [
      { name: 'Discord.js', icon: icon('discordjs/discordjs-original.svg'), note: 'Discord bots' },
      { name: 'Python Scripts', icon: icon('python/python-original.svg'), note: 'Automate everything' },
      { name: 'Bash', icon: icon('bash/bash-original.svg'), note: 'Shell shortcuts' },
    ],
  },
  {
    id: 'deploy',
    title: 'Deploy & Cloud',
    blurb: 'Getting it out of localhost.',
    Icon: Rocket,
    skills: [
      { name: 'Vercel', icon: icon('vercel/vercel-original.svg'), note: 'Push, preview, ship', invert: true },
      { name: 'Netlify', icon: icon('netlify/netlify-original.svg'), note: 'Static sites, fast' },
      { name: 'Cloudflare', icon: icon('cloudflare/cloudflare-original.svg'), note: 'DNS, CDN & Workers' },
      { name: 'Docker', icon: icon('docker/docker-original.svg'), note: 'Containers', learning: true },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    blurb: 'The stuff that keeps me organised.',
    Icon: Wrench,
    skills: [
      { name: 'Git', icon: icon('git/git-original.svg'), note: 'Version control' },
      { name: 'GitHub', icon: icon('github/github-original.svg'), note: 'Repos & collabs', invert: true },
      { name: 'VS Code', icon: icon('vscode/vscode-original.svg'), note: 'Home sweet editor' },
      { name: 'Linux', icon: icon('linux/linux-original.svg'), note: 'Terminal comfort' },
      { name: 'Postman', icon: icon('postman/postman-original.svg'), note: 'API testing' },
      { name: 'npm / pnpm', icon: icon('pnpm/pnpm-original.svg'), note: 'Package wrangling' },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    blurb: 'Making it look like someone cared.',
    Icon: Palette,
    skills: [
      { name: 'UI/UX', lucide: Palette, note: 'Currently learning', learning: true },
      { name: 'Figma', icon: icon('figma/figma-original.svg'), note: 'Mockups & prototypes' },
      { name: 'Responsive Design', lucide: Smartphone, note: 'Mobile-first layouts' },
    ],
  },
];

const ALL = 'all';

const SkillIcon = ({ skill }: { skill: Skill }) => {
  const [failed, setFailed] = useState(false);
  const base =
    'w-8 h-8 md:w-9 md:h-9 shrink-0 transition-transform duration-300 group-hover:scale-110';

  if (skill.icon && !failed) {
    return (
      <img
        src={skill.icon}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className={`${base} ${skill.invert ? 'dark:invert' : ''}`}
      />
    );
  }

  const Fallback = skill.lucide ?? Code2;
  return <Fallback className={`${base} text-primary`} aria-hidden="true" />;
};

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => (
  <li
    className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-3 sm:p-4 transition-all duration-300 motion-safe:animate-fade-in-up hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 active:scale-[0.98] focus-within:border-primary/60"
    style={{ animationDelay: `${Math.min(index, 12) * 0.04}s` }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

    {skill.learning && (
      <span className="absolute top-2 right-2 rounded-full bg-primary/15 text-primary px-1.5 py-0.5 text-[10px] font-medium leading-none">
        learning
      </span>
    )}

    <div className="relative flex items-center gap-3">
      <SkillIcon skill={skill} />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-foreground truncate" title={skill.name}>
          {skill.name}
        </p>
        <p className="text-xs text-muted-foreground truncate" title={skill.note}>
          {skill.note}
        </p>
      </div>
    </div>

    <div className="relative mt-3 h-1 rounded-full bg-muted overflow-hidden">
      <div className="h-full w-0 group-hover:w-full group-active:w-full bg-gradient-to-r from-primary to-accent transition-all duration-700 ease-out" />
    </div>
  </li>
);

const SkillsSection = () => {
  const [active, setActive] = useState<string>(ALL);

  const totalSkills = useMemo(
    () => groups.reduce((sum, g) => sum + g.skills.length, 0),
    [],
  );

  const visibleGroups = active === ALL ? groups : groups.filter((g) => g.id === active);

  return (
    <section id="skills" className="py-10 md:py-12 px-3 sm:px-4">
      <div className="max-w-5xl mx-auto">
        <div className="cute-card relative">
          <span className="ribbon">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-display text-gradient">
            My Tech Skills
          </h2>
          <p className="text-center text-muted-foreground mb-2 text-sm md:text-base">
            Things I actually use. No fake percentages, promise.
          </p>
          <p className="text-center text-xs text-muted-foreground/80 mb-6">
            {totalSkills} tools across {groups.length} areas
          </p>

          <RevealSection skeleton={<SkillsSkeleton />}>
            { }
            <div
              role="tablist"
              aria-label="Filter skills by category"
              className="-mx-1 mb-6 flex gap-2 overflow-x-auto px-1 pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {[{ id: ALL, title: 'All', Icon: LayoutGrid }, ...groups].map((g) => {
                const selected = active === g.id;
                return (
                  <button
                    key={g.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(g.id)}
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs md:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                      selected
                        ? 'border-transparent bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md'
                        : 'border-border/60 bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                    }`}
                  >
                    <g.Icon className="w-3.5 h-3.5" aria-hidden="true" />
                    {g.title}
                  </button>
                );
              })}
            </div>

            <div className="space-y-8 md:space-y-10" key={active}>
              {visibleGroups.map((group) => (
                <div key={group.id}>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                    <h3 className="inline-flex items-center gap-2 text-lg font-semibold text-foreground font-display">
                      <group.Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                      {group.title}
                    </h3>
                    <span className="text-xs md:text-sm text-muted-foreground">{group.blurb}</span>
                  </div>

                  <ul className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4">
                    {group.skills.map((skill, index) => (
                      <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                  </ul>
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

