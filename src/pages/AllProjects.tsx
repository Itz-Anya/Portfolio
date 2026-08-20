import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Star, LayoutGrid } from 'lucide-react';
import PageNav from '@/components/PageNav';
import ConfettiCanvas from '@/components/ConfettiCanvas';
import Footer from '@/components/Footer';
import ImageWithSkeleton from '@/components/ImageWithSkeleton';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { projects } from '@/data/projects';

const AllProjects = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ConfettiCanvas />
      <ScrollProgressBar />
      <PageNav />

      <main className="pt-28 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tag mb-4">
              <LayoutGrid className="w-3.5 h-3.5" />
              {projects.length} builds and counting
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-gradient mb-3">
              All Projects
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
              Every bot, website and small experiment that made it out of the drafts folder.
            </p>
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-24">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const reversed = index % 2 === 1;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`relative flex flex-col ${
                    reversed ? 'md:flex-row-reverse' : 'md:flex-row'
                  } items-center gap-6 md:gap-10`}
                >
                  <span
                    className="hidden md:block absolute -top-10 text-7xl lg:text-8xl font-display font-bold text-foreground/5 select-none pointer-events-none"
                    style={{ [reversed ? 'right' : 'left']: 0 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="relative w-full md:w-1/2 flex-shrink-0">
                    {project.featured && (
                      <span className="absolute -top-3 left-4 z-10 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary to-pink-medium text-primary-foreground shadow-cute">
                        <Star className="w-3 h-3 fill-current" />
                        Featured
                      </span>
                    )}
                    <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm shadow-card hover:shadow-hover transition-all duration-500">
                      {project.image ? (
                        <ImageWithSkeleton
                          src={project.image}
                          alt={project.title}
                          className="w-full h-60 md:h-64"
                          imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div
                          className={`w-full h-56 md:h-64 flex items-center justify-center bg-gradient-to-br ${
                            project.color ?? 'from-primary/30 to-accent/30'
                          }`}
                        >
                          {Icon ? <Icon className="w-14 h-14 text-foreground/70" /> : null}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-display text-foreground mb-3">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {project.tags.length > 0 && (
                      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {(project.liveUrl || project.repoUrl) && (
                      <div className="flex items-center justify-center md:justify-start gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="cute-button inline-flex items-center gap-1.5 !py-2.5 !px-5 text-sm"
                          >
                            <ExternalLink className="w-4 h-4" /> Live
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold border border-border/60 text-foreground/80 hover:text-foreground hover:border-primary/40 transition-colors"
                          >
                            <Github className="w-4 h-4" /> Code
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>

          {projects.length === 0 && (
            <div className="flex flex-col items-center justify-center text-center py-16 px-4 rounded-2xl border border-dashed border-border/70 bg-card/40 backdrop-blur-sm">
              <Sparkles className="w-10 h-10 text-primary animate-bounce-soft mb-4" />
              <p className="text-lg md:text-xl font-semibold text-foreground font-display">
                Projects coming soon...
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default AllProjects;
