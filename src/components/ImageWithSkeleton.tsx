import { useState } from 'preact/hooks';
import { ImageOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: 'lazy' | 'eager';
}

const ImageWithSkeleton = ({ src, alt, className, imgClassName, loading = 'lazy' }: ImageWithSkeletonProps) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {!loaded && !errored && <div className="absolute inset-0 skeleton-shimmer bg-muted/60" />}

      {errored ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-muted/40 text-muted-foreground">
          <ImageOff className="w-6 h-6" />
          <span className="text-[11px]">Image unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={cn(imgClassName, 'transition-opacity duration-700', loaded ? 'opacity-100' : 'opacity-0')}
        />
      )}
    </div>
  );
};

export default ImageWithSkeleton;
