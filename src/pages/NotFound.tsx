import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import PageNav from '@/components/PageNav';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col">
      <PageNav />

      <main className="flex-1 flex items-center justify-center px-4 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="cute-card relative text-center max-w-md"
        >
          <span className="ribbon">
            <Compass className="w-8 h-8 md:w-10 md:h-10 text-pink-400" />
          </span>

          <h1 className="text-3xl md:text-4xl font-display text-gradient mb-3">
            404
          </h1>
          <p className="text-muted-foreground text-sm md:text-base mb-6">
            This page wandered off somewhere. Let's get you back home.
          </p>
          <a href="/" className="cute-button inline-flex items-center gap-2">
            Back to home
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
