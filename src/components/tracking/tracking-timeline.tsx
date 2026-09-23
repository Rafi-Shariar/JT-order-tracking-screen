"use client";

import * as React from "react";
import { TimelineCheckpoint } from "@/types/tracking.type";
import { AlertCircle, Check, MapPin } from "lucide-react";

interface TrackingTimelineProps {
  timeline: TimelineCheckpoint[];
}

export function TrackingTimeline({ timeline }: TrackingTimelineProps) {
  const completedCount = timeline.filter(
    (s) => s.status === "completed",
  ).length;

  return (
    <div className="rounded-3xl border border-border/70 bg-card p-5 shadow-xs">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
          Delivery Steps
        </h3>
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
          {completedCount} of {timeline.length} completed
        </span>
      </div>

      <div className="relative pl-1">
        {timeline.map((step, index) => {
          const isLast = index === timeline.length - 1;
          const isDone = step.status === "completed";
          const isAlert = step.status === "alert";
          const isCurrent = step.status === "current";

          return (
            <div key={step.id} className="relative flex gap-3.5 pb-6 last:pb-1">
              {/* Connecting Line */}
              {!isLast && (
                <span
                  className={`absolute left-[11px] top-5 -bottom-2 w-[2px] rounded-full transition-colors ${
                    isDone
                      ? "bg-emerald-500/80"
                      : isAlert
                        ? "bg-rose-500/80"
                        : "bg-border"
                  }`}
                />
              )}

              {/* Node */}
              <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-card">
                {isDone ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xs">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                ) : isAlert ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-white shadow-xs">
                    <AlertCircle className="h-3 w-3 stroke-[2.5]" />
                  </div>
                ) : isCurrent ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                ) : (
                  <div className="h-2.5 w-2.5 rounded-full border border-muted-foreground/40 bg-muted" />
                )}
              </div>

              {/* Details */}
              <div className="min-w-0 flex-1 pt-0.5">
                <div className="flex items-baseline justify-between gap-2">
                  <p
                    className={`text-xs font-bold ${
                      isAlert
                        ? "text-rose-600 dark:text-rose-400"
                        : isCurrent
                          ? "text-foreground font-black"
                          : isDone
                            ? "text-foreground"
                            : "text-muted-foreground/60"
                    }`}
                  >
                    {step.title}
                  </p>
                  {step.timestamp && (
                    <span className="shrink-0 text-[10px] font-medium text-muted-foreground">
                      {new Date(step.timestamp).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </span>
                  )}
                </div>

                <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {step.location && (
                  <div className="mt-1 flex items-center gap-1 text-[11px] font-medium text-muted-foreground/80">
                    <MapPin className="h-3 w-3 text-muted-foreground/60" />
                    <span>{step.location}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
