import { cn } from '@/lib/utils';

export const SkeletonBlock = ({ className }: { className?: string }) => (
  <div className={cn('skeleton-shimmer rounded-xl bg-muted/60', className)} />
);

export const SkeletonCircle = ({ className }: { className?: string }) => (
  <div className={cn('skeleton-shimmer rounded-full bg-muted/60', className)} />
);

export const SkeletonText = ({ className }: { className?: string }) => (
  <div className={cn('skeleton-shimmer rounded-full bg-muted/60 h-3', className)} />
);
