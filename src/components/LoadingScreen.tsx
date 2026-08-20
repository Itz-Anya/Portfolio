import { useState, useEffect } from 'preact/hooks';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Star, Flower2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const FloatingIcon = ({ delay, icon: Icon, className }: { delay: number; icon: any; className: string }) => (
  <motion.div
    initial={{ y: 100, opacity: 0, scale: 0 }}
    animate={{ 
      y: [-20, -40, -20],
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1, 0.5],
      rotate: [0, 10, -10, 0]
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={className}
  >
    <Icon className="w-6 h-6" />
  </motion.div>
);

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 600);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-background via-pink-50/30 to-primary/10 dark:from-background dark:via-pink-950/20 dark:to-primary/5"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingIcon delay={0} icon={Heart} className="absolute top-[20%] left-[15%] text-primary/60" />
            <FloatingIcon delay={0.5} icon={Sparkles} className="absolute top-[30%] right-[20%] text-pink-400/60" />
            <FloatingIcon delay={1} icon={Star} className="absolute bottom-[30%] left-[25%] text-amber-400/60" />
            <FloatingIcon delay={1.5} icon={Flower2} className="absolute bottom-[25%] right-[15%] text-rose-400/60" />
            <FloatingIcon delay={0.3} icon={Heart} className="absolute top-[50%] left-[10%] text-primary/40" />
            <FloatingIcon delay={0.8} icon={Star} className="absolute top-[15%] right-[30%] text-amber-300/50" />
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="relative mb-8">
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="w-32 h-32 rounded-full border-4 border-dashed border-primary/30"
              />
              <motion.div
                animate={{ 
                  rotate: -360,
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute inset-2 rounded-full border-4 border-dotted border-pink-300/50"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-pink-300/30 flex items-center justify-center backdrop-blur-sm">
                  <Heart className="w-10 h-10 text-primary fill-primary/30" />
                </div>
              </motion.div>
            </div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-display text-primary mb-2"
            >
              Welcome
            </motion.h2>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground font-body mb-8"
            >
              Preparing something special...
            </motion.p>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 200, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative h-3 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm"
              style={{ width: 200 }}
            >
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-pink-400 to-primary rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </motion.div>

            <div className="flex gap-2 mt-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [-3, 3, -3],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 rounded-full bg-primary/60"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
