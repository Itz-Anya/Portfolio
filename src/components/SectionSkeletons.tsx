import { SkeletonBlock, SkeletonCircle, SkeletonText } from './Skeleton';

export const AboutSkeleton = () => (
  <div>
    <div className="max-w-xl mx-auto space-y-3 mb-8">
      <SkeletonText className="w-full" />
      <SkeletonText className="w-11/12 mx-auto" />
      <SkeletonText className="w-3/4 mx-auto" />
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="rounded-2xl border border-border/50 bg-card/40 p-4 text-center">
          <SkeletonCircle className="w-5 h-5 mx-auto mb-3" />
          <SkeletonText className="w-2/3 mx-auto mb-2" />
          <SkeletonText className="w-4/5 mx-auto" />
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="rounded-2xl border border-border/50 bg-card/40 p-5 space-y-3">
          <SkeletonText className="w-1/2 h-3.5" />
          {Array.from({ length: 4 }).map((__, j) => (
            <SkeletonText key={j} className="w-3/4" />
          ))}
        </div>
      ))}
    </div>

    <div className="flex justify-center mt-8">
      <SkeletonBlock className="w-48 h-8 rounded-full" />
    </div>
  </div>
);

export const SkillsSkeleton = () => {
  const groupSizes = [5, 2, 1];

  return (
    <div className="space-y-8">
      {groupSizes.map((count, g) => (
        <div key={g}>
          <SkeletonText className="w-36 h-4 mb-4" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {Array.from({ length: count }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-border/50 bg-card/40 p-4">
                <div className="flex items-center gap-3">
                  <SkeletonCircle className="w-8 h-8 shrink-0" />
                  <div className="flex-1 min-w-0 space-y-2">
                    <SkeletonText className="w-3/4" />
                    <SkeletonText className="w-1/2" />
                  </div>
                </div>
                <SkeletonBlock className="mt-3 h-1 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const ProjectsSkeleton = ({ count = 3 }: { count?: number }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="rounded-2xl border border-border/50 bg-card/40 overflow-hidden">
        <SkeletonBlock className="w-full h-40 rounded-none" />
        <div className="p-4 space-y-2.5">
          <SkeletonText className="w-2/3 h-3.5" />
          <SkeletonText className="w-full" />
          <SkeletonText className="w-4/5" />
          <div className="flex gap-2 pt-1">
            <SkeletonBlock className="w-14 h-5 rounded-full" />
            <SkeletonBlock className="w-16 h-5 rounded-full" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const ContactSkeleton = () => (
  <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 py-2">
    {Array.from({ length: 4 }).map((_, i) => (
      <SkeletonCircle key={i} className="w-14 h-14 md:w-16 md:h-16" />
    ))}
  </div>
);
