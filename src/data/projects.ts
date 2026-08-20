import type { LucideIcon } from 'lucide-react';
import {
  CloudSun,
  Play,
  Tv,
  BookOpen,
  Rocket,
  BarChart3,
  Bot,
  Cake,
  User,
} from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  icon?: LucideIcon;
  color?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Portfolio',
    description: 'My personal portfolio, the place where all these experiments live.',
    image: 'https://raw.githubusercontent.com/Itz-Anya/Portfolio/main/public/file_0000000052788208b9e567bfe68b9efa.jpg',
    tags: ['TypeScript', 'UI'],
    color: 'from-primary/30 to-accent/30',
    liveUrl: 'https://itz-anya.vercel.app/',
    repoUrl: 'https://github.com/Itz-Anya/Portfolio',
  },
  {
    title: 'Sylveon Music',
    description:
      'A real-time synchronized music listening bot for Telegram groups. Users can play, queue, search, and listen to songs together in sync, powered by a modern web player and Telegram bot integration.',
    image: 'https://sylveon-music.vercel.app/favicon.jpg',
    tags: ['TypeScript', 'Supabase'],
    color: 'from-pink-400/30 to-rose-400/30',
    liveUrl: 'https://t.me/SylveonMusicBot',
  },
  {
    title: 'Weather App',
    description: 'A modern weather platform with accurate, real-time forecasts and a smooth, elegant interface.',
    image: 'https://raw.githubusercontent.com/Itz-Anya/Weather-App/main/public/file_0000000051a882089c60b2276f48972c.jpg',
    tags: ['TypeScript', 'API', 'UI'],
    color: 'from-sky-400/40 to-blue-400/40',
    liveUrl: 'https://weather-web-anya.vercel.app/',
    repoUrl: 'https://github.com/Itz-Anya/Weather-App',
    featured: true,
  },
  {
    title: 'Chiku Tube',
    description: 'A distraction-free, AI-powered video discovery app with no infinite scroll and no autoplay traps.',
    image: 'https://raw.githubusercontent.com/Itz-Anya/Chiku-Tube/main/public/file_0000000068b4820898879604d111f68f.jpg',
    tags: ['TypeScript', 'YouTube API'],
    color: 'from-rose-400/40 to-red-400/40',
    liveUrl: 'https://chiku-tube.vercel.app',
    repoUrl: 'https://github.com/Itz-Anya/Chiku-Tube',
  },
  {
    title: 'Anime Hub',
    description: 'Browse trending, seasonal and top-rated anime, search the catalog and keep a local watchlist.',
    image: 'https://raw.githubusercontent.com/Itz-Anya/Anime-Hub/main/public/file-00000000c1147207ab7733ed4f6ac96f.jpg',
    tags: ['React', 'TypeScript'],
    color: 'from-violet-400/40 to-fuchsia-400/40',
    liveUrl: 'https://anya-anime-hub.vercel.app',
    repoUrl: 'https://github.com/Itz-Anya/Anime-Hub',
    featured: true,
  },
  {
    title: 'Manga Hub',
    description: 'A modern manga reader for discovering and reading your favourite manga.',
    image: 'https://anya-file-host.vercel.app/cznc5nha4b',
    tags: ['TypeScript', 'Reader'],
    color: 'from-amber-400/40 to-orange-400/40',
    liveUrl: 'https://anya-manga-hub.vercel.app/',
    repoUrl: 'https://github.com/Itz-Anya/Manga-Hub',
  },
  {
    title: 'Space Atlas',
    description: 'A free, open-source atlas of the observable universe, built entirely on the web.',
    image: 'https://anya-file-host.vercel.app/xg21f43ybm',
    tags: ['Svelte', 'Data Viz'],
    color: 'from-indigo-400/40 to-slate-400/40',
    liveUrl: 'https://spaceatlas.vercel.app/',
    repoUrl: 'https://github.com/Itz-Anya/Space-Atlas',
    featured: true,
  },
  {
    title: 'Anya File Hosting Web',
    description:
      'A fast, minimal file and image hosting service built on Next.js, Cloudflare D1, and a clean short-link API.',
    image: 'https://anya-file-host.vercel.app/o42ywwvug1',
    tags: ['TypeScript', 'API', 'Cloudflare'],
    color: 'from-blue-400/40 to-cyan-400/40',
    liveUrl: 'https://anya-file-host.vercel.app/',
  },
  {
    title: 'Anya Music Web',
    description:
      'Premium themed music streaming web app built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Zustand, and TanStack Query. Powered by the Saavnx API.',
    image: 'https://anya-file-host.vercel.app/d2k01s320w',
    tags: ['TypeScript', 'SaavnxApi'],
    color: 'from-pink-600/40 to-fuchsia-600/40',
    liveUrl: 'https://anya-music-web.vercel.app/',
  },
  {
    title: 'SaavnxApi',
    description: 'Unofficial JioSaavn REST API. Node.js and Express on the backend, Vite and React on the frontend, bundled for Vercel serverless.',
    image: 'https://anya-file-host.vercel.app/84mi4r4xoj',
    tags: ['TypeScript', 'Next.js'],
    color: 'from-green-600/40 to-emerald-600/40',
    liveUrl: 'https://saavnx.vercel.app/',
  },
];
