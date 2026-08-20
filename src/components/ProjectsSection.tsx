import { ArrowRight, Briefcase, ExternalLink, Github, Sparkles } from 'lucide-react';
import { projects } from '@/data/projects';
import RevealSection from '@/components/RevealSection';
import { ProjectsSkeleton } from '@/components/SectionSkeletons';
import ImageWithSkeleton from '@/components/ImageWithSkeleton';

const ProjectsSection = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="cute-card relative">
          <span className="ribbon">
            <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-pink-400" />
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-display text-gradient">
            Projects
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-sm md:text-base">
            Small experiments, bots, and websites.
          </p>

          <RevealSection skeleton={<ProjectsSkeleton count={featuredProjects.length || 3} />}>
            {featuredProjects.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center py-10 px-4 rounded-2xl border border-dashed border-border/70 bg-card/40 backdrop-blur-sm">
                <Sparkles className="w-10 h-10 text-primary animate-bounce-soft mb-4" />
                <p className="text-lg md:text-xl font-semibold text-foreground font-display">
                  Projects coming soon...
                </p>
                <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                  Currently building (and breaking) a few things. They'll show up here once they
                  survive.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {featuredProjects.map((project, index) => {
                  const Icon = project.icon;
                  return (
                    <article
                      key={project.title}
                      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.08}s` }}
                    >
                      {project.image ? (
                        <ImageWithSkeleton
                          src={project.image}
                          alt={project.title}
                          className="w-full h-60"
                          imgClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div
                          className={`w-full h-40 flex items-center justify-center bg-gradient-to-br ${
                            project.color ?? 'from-primary/30 to-accent/30'
                          }`}
                        >
                          {Icon ? <Icon className="w-10 h-10 text-foreground/70" /> : null}
                        </div>
                      )}

                      <div className="p-4">
                        <h3 className="text-base font-semibold text-foreground font-display break-words">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 break-words">
                          {project.description}
                        </p>

                        {project.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {project.tags.map((tag) => (
                              <span key={tag} className="tag text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {(project.liveUrl || project.repoUrl) && (
                          <div className="flex items-center gap-3 mt-4">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                              >
                                <ExternalLink className="w-4 h-4" /> Live
                              </a>
                            )}
                            {project.repoUrl && (
                              <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                              >
                                <Github className="w-4 h-4" /> Code
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            <div className="flex justify-center mt-8">
              <a href="/projects" className="cute-button inline-flex items-center gap-2 group">
                Explore All Projects
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
