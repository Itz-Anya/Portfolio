import { motion } from 'framer-motion';
import type { ComponentChildren } from 'preact';

interface RevealProps {
  children: ComponentChildren;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  margin?: string;
}

const Reveal = ({ children, className, delay = 0, y = 24, duration = 0.55, margin = '-60px' }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin }}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

export default Reveal;
