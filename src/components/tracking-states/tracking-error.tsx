"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertOctagon, Home } from "lucide-react";

interface TrackingErrorProps {
  message?: string;
  onRetry?: () => void;
}

export function TrackingError({
  message = "Something went wrong while fetching shipment details.",
  onRetry,
}: TrackingErrorProps) {
  return (
    <div className="px-4 py-8">
      <div className="flex flex-col items-center justify-center rounded-3xl border border-rose-200/70 bg-rose-50/40 p-6 text-center shadow-xs dark:border-rose-900/40 dark:bg-rose-950/20">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 mb-4 dark:bg-rose-900/40 dark:text-rose-400">
          <AlertOctagon className="h-8 w-8 stroke-[1.5]" />
        </div>

        <h3 className="text-base font-bold text-foreground">Unable to Load Order</h3>
        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed max-w-[260px]">
          {message}
        </p>

        <div className="mt-6 flex w-full flex-col gap-2">
          {onRetry && (
            <Button
              variant="outline"
              onClick={onRetry}
              className="w-full rounded-2xl font-semibold bg-background"
              size="lg"
            >
              Retry Connection
            </Button>
          )}
          <Button asChild size="lg" className="w-full rounded-2xl font-semibold shadow-xs">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}