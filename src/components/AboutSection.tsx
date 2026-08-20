import { Flower2, Heart, MapPin, GraduationCap, Sparkles, Moon, Utensils, Bot, Globe, Music, Code2, Smartphone, Palette, Server } from 'lucide-react';
import { PROFILE } from '@/data/profile';
import RevealSection from '@/components/RevealSection';
import { AboutSkeleton } from '@/components/SectionSkeletons';

const quickFacts = [
  { label: 'Name', value: 'Ananya', icon: Heart },
  { label: 'Age', value: '16', icon: Sparkles },
  { label: 'Currently', value: 'High School Student', icon: GraduationCap },
  { label: 'Based in', value: 'Karnataka, India', icon: MapPin },
];

const loves = [
  { label: 'Eating', icon: Utensils },
  { label: 'Bots', icon: Bot },
  { label: 'Websites', icon: Globe },
  { label: 'Music', icon: Music },
];

const hobbies = [
  { label: 'Eating (again)', icon: Utensils },
  { label: 'Sleeping', icon: Moon },
  { label: 'Coding', icon: Code2 },
  { label: 'Late-night scrolling', icon: Smartphone },
];

const learning = [
  { label: 'Backend Development', icon: Server },
  { label: 'UI/UX Design', icon: Palette },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="cute-card relative">
          <span className="ribbon">
            <Flower2 className="w-8 h-8 md:w-10 md:h-10 text-pink-400" />
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-display text-gradient">
            About Me
          </h2>

          <RevealSection skeleton={<AboutSkeleton />}>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-center mb-4">
              Hey! I'm <span className="font-semibold text-primary">Anya</span> (Ananya if you're being
              formal), a 16-year-old high school student from Karnataka, India, who somehow ended up
              spending more time in a code editor than in textbooks.{' '}
              <Sparkles className="inline w-4 h-4 text-primary" />
            </p>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-center mb-4">
              I'm mostly chill and professionally lazy <Moon className="inline w-4 h-4 text-primary" />, but the moment an idea sounds fun, I'll
              disappear into it for hours. Usually that means little bots, tiny websites, or another
              layout I promised myself I wouldn't redesign again.
            </p>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-center mb-8">
              Right now I'm learning my way into backend development and UI/UX, one broken build at a
              time. <Heart className="inline w-4 h-4 text-primary fill-primary" />
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
              {quickFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <Icon className="w-5 h-5 mx-auto text-primary mb-2" />
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{fact.label}</p>
                    <p className="text-sm font-semibold text-foreground mt-1 break-words">{fact.value}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <DetailCard title="Loves" items={loves} />
              <DetailCard title="Hobbies" items={hobbies} />
              <DetailCard title="Currently learning" items={learning} />
            </div>

            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                <span className="text-sm font-medium text-muted-foreground">{PROFILE.status}</span>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};

const DetailCard = ({
  title,
  items,
}: {
  title: string;
  items: { label: string; icon: typeof Heart }[];
}) => (
  <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">{title}</h3>
    <ul className="space-y-2">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.label} className="flex items-center gap-2 text-sm text-foreground/80">
            <Icon className="w-4 h-4 text-primary shrink-0" />
            <span className="break-words">{item.label}</span>
          </li>
        );
      })}
    </ul>
  </div>
);

export default AboutSection;
