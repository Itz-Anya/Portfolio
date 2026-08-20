import { useState, useEffect } from 'preact/hooks';
import { motion } from 'framer-motion';
import { Moon, Sun, Heart, ArrowLeft } from 'lucide-react';

const PageNav = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDark(savedTheme === 'dark' || document.documentElement.classList.contains('dark'));
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-card/90 backdrop-blur-xl shadow-lg border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.a
          href="/"
          className="flex items-center gap-2 text-xl font-bold font-display text-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heart className="w-6 h-6 fill-primary" />
          <span className="hidden sm:inline">Anya</span>
        </motion.a>

        <div className="flex items-center gap-2">
          <motion.a
            href="/"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground bg-card/50 backdrop-blur-sm border border-border/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back home</span>
          </motion.a>

          <motion.button
            onClick={toggleTheme}
            className="relative w-14 h-8 rounded-full bg-gradient-to-r from-amber-200 to-amber-400 dark:from-indigo-800 dark:to-purple-900 p-1 transition-all duration-500 shadow-inner"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center"
              animate={{ x: isDark ? 24 : 0, rotate: isDark ? 360 : 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              {isDark ? (
                <Moon className="w-4 h-4 text-indigo-600" />
              ) : (
                <Sun className="w-4 h-4 text-amber-500" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default PageNav;
