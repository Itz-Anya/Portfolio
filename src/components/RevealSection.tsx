import { useEffect, useRef, useState } from 'preact/hooks';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import type { ComponentChildren } from 'preact';

interface RevealSectionProps {
  skeleton: ComponentChildren;
  children: ComponentChildren;
  minSkeletonMs?: number;
  margin?: string;
}

const RevealSection = ({ skeleton, children, minSkeletonMs = 450, margin = '-100px' }: RevealSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => setReady(true), minSkeletonMs);
    return () => clearTimeout(timer);
  }, [inView, minSkeletonMs]);

  return (
    <div ref={ref}>
      <AnimatePresence mode="wait" initial={false}>
        {!ready ? (
          <motion.div key="skeleton" exit={{ opacity: 0 }} transition={{ duration: 0.35, ease: 'easeInOut' }}>
            {skeleton}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RevealSection;
