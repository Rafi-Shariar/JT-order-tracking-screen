"use client";

import { Button } from "@/components/ui/button";
import { PackageSearch, RefreshCw } from "lucide-react";

interface TrackingEmptyProps {
  searchedId?: string;
  onReset?: () => void;
}

export function TrackingEmpty({ searchedId, onReset }: TrackingEmptyProps) {
  return (
    <div className="px-4 py-8">
      <div className="flex flex-col items-center justify-center rounded-3xl border border-border/70 bg-card p-6 text-center shadow-xs">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted/60 text-muted-foreground mb-4">
          <PackageSearch className="h-8 w-8 stroke-[1.5]" />
        </div>

        <h3 className="text-base font-bold text-foreground">Order Not Found</h3>
        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed max-w-[260px]">
          We couldn't find any shipment matching{" "}
          <span className="font-mono font-semibold text-foreground">
            {searchedId || "this number"}
          </span>
          . Please double check the ID.
        </p>

        <div className="mt-6 w-full space-y-2">
          {onReset && (
            <Button
              onClick={onReset}
              className="w-full rounded-2xl font-semibold shadow-xs"
              size="lg"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Another Number
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}