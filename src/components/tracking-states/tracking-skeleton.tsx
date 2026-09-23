import { Skeleton } from "@/components/ui/skeleton";

export function TrackingSkeleton() {
  return (
    <div className="space-y-3.5 px-4 py-3 animate-pulse">
      {/* 1. Hero Banner Skeleton */}
      <div className="rounded-3xl border border-border/60 bg-muted/20 p-5 space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-28 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
        <div className="space-y-2 pt-2">
          <Skeleton className="h-6 w-3/4 rounded-lg" />
          <Skeleton className="h-4 w-full rounded-md" />
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-border/40 bg-background/50 p-3">
          <Skeleton className="h-9 w-9 rounded-xl shrink-0" />
          <div className="space-y-1.5 flex-1">
            <Skeleton className="h-3 w-20 rounded" />
            <Skeleton className="h-4 w-36 rounded" />
          </div>
        </div>
      </div>

      {/* 2. Timeline Skeleton */}
      <div className="rounded-3xl border border-border/60 bg-card p-5 space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-28 rounded" />
          <Skeleton className="h-4 w-20 rounded-full" />
        </div>
        <div className="space-y-5 pl-1 pt-1">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-3.5 items-start">
              <Skeleton className="h-5 w-5 rounded-full shrink-0 mt-0.5" />
              <div className="space-y-1.5 flex-1">
                <div className="flex justify-between">
                  <Skeleton className="h-3.5 w-24 rounded" />
                  <Skeleton className="h-3 w-12 rounded" />
                </div>
                <Skeleton className="h-3 w-4/5 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Items Skeleton */}
      <div className="rounded-3xl border border-border/60 bg-card p-4">
        <div className="flex items-center justify-between mb-3">
          <Skeleton className="h-4 w-32 rounded" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-muted/40 p-2.5">
          <Skeleton className="h-12 w-12 rounded-xl shrink-0" />
          <div className="space-y-1.5 flex-1">
            <Skeleton className="h-3.5 w-3/4 rounded" />
            <Skeleton className="h-3 w-1/2 rounded" />
          </div>
        </div>
      </div>

      {/* 4. Billing Skeleton */}
      <div className="rounded-3xl border border-border/60 bg-card p-4 space-y-3">
        <div className="flex items-center justify-between border-b border-border/40 pb-3">
          <Skeleton className="h-8 w-28 rounded-lg" />
          <Skeleton className="h-6 w-20 rounded-md" />
        </div>
        <div className="space-y-2 pt-1">
          <div className="flex justify-between">
            <Skeleton className="h-3 w-20 rounded" />
            <Skeleton className="h-3 w-12 rounded" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-3 w-24 rounded" />
            <Skeleton className="h-3 w-10 rounded" />
          </div>
        </div>
      </div>

      {/* 5. Actions Skeleton */}
      <div className="grid grid-cols-2 gap-2.5 pt-1">
        <Skeleton className="h-14 rounded-2xl" />
        <Skeleton className="h-14 rounded-2xl" />
      </div>
    </div>
  );
}