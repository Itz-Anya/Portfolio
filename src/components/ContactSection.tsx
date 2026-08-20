import { Mail, Send, Instagram, Github } from 'lucide-react';
import { PROFILE } from '@/data/profile';
import RevealSection from '@/components/RevealSection';
import { ContactSkeleton } from '@/components/SectionSkeletons';

const socialLinks = [
  { name: 'Telegram', icon: Send, url: PROFILE.telegram, color: 'from-sky-400 to-blue-500' },
  { name: 'Instagram', icon: Instagram, url: PROFILE.instagram, color: 'from-fuchsia-500 to-orange-400' },
  { name: 'Email', icon: Mail, url: PROFILE.email, color: 'from-rose-400 to-pink-500' },
  { name: 'GitHub', icon: Github, url: PROFILE.github, color: 'from-slate-600 to-slate-800' },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="cute-card relative text-center">
          <span className="ribbon">
            <Mail className="w-8 h-8 md:w-10 md:h-10 text-pink-400" />
          </span>

          <RevealSection skeleton={<ContactSkeleton />}>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 py-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.name}
                    title={link.name}
                    className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-border/60 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-primary/40"
                  >
                    <span
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                    <Icon className="relative w-6 h-6 md:w-7 md:h-7 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
