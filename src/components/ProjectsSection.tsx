import { useState } from "react";
import { Bot, Globe, Database, FileType, Palette, Rocket, Github, Cloud, Layers, Play } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Sylveon Music",
    image: "https://files.catbox.moe/00hed4.jpeg",
    imageAlt: "Sylveon Music project screenshot",
    description:
      "Sylveon Music is a Telegram-based web music player with a beautiful and smooth UI. It allows users to stream music, manage personal playlists, and use fun interactive commands directly inside Telegram. Designed for both aesthetics and functionality.",
    tags: [
      { name: "HTML", icon: Globe, color: "#e44d26" },
      { name: "CSS", icon: Palette, color: "#264de4" },
      { name: "TypeScript", icon: FileType, color: "#3178c6" },
      { name: "SQL", icon: Database, color: "#00b4d8" },
    ],
    accentColor: "#b06eff",
    links: [
      { href: "https://sylveon-music.vercel.app", label: "Web View", icon: Globe, primary: true },
      { href: "https://t.me/SylveonMusicBot", label: "Use Bot", icon: Bot, primary: false },
    ],
  },
  {
    title: "Weather Web App",
    image: "https://weather-web-anya.vercel.app/a.png",
    imageAlt: "Weather Web App screenshot",
    description:
      "A clean, responsive weather web app that delivers real-time forecasts with a polished interface. Search any city and get instant weather data — temperature, humidity, wind speed and more — wrapped in a smooth, minimal UI built for everyday use.",
    tags: [
      { name: "TypeScript", icon: FileType, color: "#3178c6" },
      { name: "CSS", icon: Palette, color: "#264de4" },
      { name: "Weather API", icon: Cloud, color: "#00dcd8" },
    ],
    accentColor: "#00dcd8",
    links: [
      { href: "https://weather-web-anya.vercel.app/", label: "Live App", icon: Globe, primary: true },
      { href: "https://github.com/Itz-Anya/Weather-App/", label: "Source Code", icon: Github, primary: false },
    ],
  },
  {
    title: "Chiku Tube",
    image: "https://chiku-tube.vercel.app/chiku.png",
    imageAlt: "Chiku Tube screenshot",
    description:
      "Chiku Tube is a distraction-free, AI-powered video discovery app. No endless infinite scroll. No autoplay traps. No notifications screaming for your attention. Just a clean player and content that actually matters to you. 🌼",
    tags: [
      { name: "TanStack Start", icon: Layers, color: "#ff3ac8" },
      { name: "TypeScript", icon: FileType, color: "#3178c6" },
      { name: "CSS", icon: Palette, color: "#264de4" },
    ],
    accentColor: "#ff3ac8",
    links: [
      { href: "https://chiku-tube.vercel.app/", label: "Open App", icon: Play, primary: true },
      { href: "https://github.com/Itz-Anya/Chiku-Tube", label: "Source Code", icon: Github, primary: false },
    ],
  },
];

type Project = (typeof projects)[number];

const ProjectCard = ({ project, delay }: { project: Project; delay: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <ScrollReveal delay={delay}>
      <div
        className="glass rounded-2xl sm:rounded-3xl overflow-hidden card-hover h-full flex flex-col"
        style={{ borderColor: `${project.accentColor}18` }}
      >
        <div className="aspect-video overflow-hidden relative flex-shrink-0">
          {!imageLoaded && (
            <div
              className="absolute inset-0 animate-pulse"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--muted)), hsl(var(--muted)/0.5), hsl(var(--muted)))",
              }}
            />
          )}
          <img
            src={project.image}
            alt={project.imageAlt}
            className={`w-full h-full object-cover hover:scale-105 transition-all duration-700 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{
              background: `linear-gradient(90deg, ${project.accentColor}00, ${project.accentColor}, ${project.accentColor}00)`,
              boxShadow: `0 0 12px ${project.accentColor}70`,
            }}
          />
        </div>

        <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-1">
          <h3
            className="font-display text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3"
            style={{ color: "hsl(var(--foreground))", letterSpacing: "-0.01em" }}
          >
            {project.title}
          </h3>
          <p
            className="text-foreground/70 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base flex-1"
            style={{ textWrap: "pretty" } as React.CSSProperties}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className="flex items-center gap-1 sm:gap-1.5 text-xs font-semibold rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 font-mono"
                style={{
                  background: `${tag.color}14`,
                  border: `1px solid ${tag.color}28`,
                  color: "hsl(var(--foreground)/0.85)",
                }}
              >
                <tag.icon className="w-3 h-3 flex-shrink-0" style={{ color: tag.color }} />
                <span className="truncate">{tag.name}</span>
              </span>
            ))}
          </div>

          <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 mt-auto">
            {project.links.map((link) =>
              link.primary ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-4 sm:px-5 font-semibold text-sm hover:-translate-y-0.5 active:scale-95 transition-all duration-300 touch-manipulation min-h-[44px]"
                  style={{
                    background: `linear-gradient(135deg, ${project.accentColor}cc, ${project.accentColor}88)`,
                    color: "#ffffff",
                    boxShadow: `0 4px 20px ${project.accentColor}35`,
                  }}
                >
                  <link.icon className="w-4 h-4 flex-shrink-0" />
                  <span>{link.label}</span>
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 glass rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-4 sm:px-5 font-semibold text-sm text-foreground hover:-translate-y-0.5 active:scale-95 transition-all duration-300 touch-manipulation min-h-[44px]"
                >
                  <link.icon className="w-4 h-4 flex-shrink-0" style={{ color: project.accentColor }} />
                  <span>{link.label}</span>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto w-full">
      <ScrollReveal>
        <div className="flex items-center justify-center gap-3 mb-10 sm:mb-14">
          <div
            className="h-px w-8 sm:w-12"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)/0.5))" }}
          />
          <h2
            className="font-display italic text-3xl sm:text-4xl md:text-5xl text-center text-gradient"
            style={{ lineHeight: "1.15", letterSpacing: "-0.01em" }}
          >
            Projects <Rocket className="inline w-4 h-4 sm:w-5 sm:h-5" style={{ color: "hsl(var(--primary))" }} />
          </h2>
          <div
            className="h-px w-8 sm:w-12"
            style={{ background: "linear-gradient(90deg, hsl(var(--primary)/0.5), transparent)" }}
          />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} delay={i * 100} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
