"use client";

import * as React from "react";

import {
  AlertCircle,
  Calendar,
  Clock,
  Copy,
  Sparkles,
  Truck,
} from "lucide-react";
import { OrderDetails } from "@/types/tracking.type";

interface TrackingBannerProps {
  order: OrderDetails;
}

export function TrackingBanner({ order }: TrackingBannerProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(order.trackingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const config = React.useMemo(() => {
    switch (order.scenario) {
      case "delayed":
        return {
          wrapper:
            "bg-amber-50/70 dark:bg-amber-950/20 border-amber-200/80 dark:border-amber-900/40 text-amber-950 dark:text-amber-100",
          pill: "bg-amber-100/80 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-800/60",
          icon: Clock,
          friendlyStatus: "Running a Little Late",
          friendlySummary:
            "Weather disruptions delayed the route. Package is secure and resuming transit soon.",
        };
      case "delivered_not_received":
        return {
          wrapper:
            "bg-rose-50/70 dark:bg-rose-950/20 border-rose-200/80 dark:border-rose-900/40 text-rose-950 dark:text-rose-100",
          pill: "bg-rose-100/80 dark:bg-rose-900/40 text-rose-800 dark:text-rose-200 border-rose-200 dark:border-rose-800/60",
          icon: AlertCircle,
          friendlyStatus: "Looking Into Your Delivery",
          friendlySummary:
            "Marked delivered by courier, but reported missing. We are reviewing driver dropoff notes.",
        };
      case "tracking_pending":
        return {
          wrapper:
            "bg-sky-50/70 dark:bg-sky-950/20 border-sky-200/80 dark:border-sky-900/40 text-sky-950 dark:text-sky-100",
          pill: "bg-sky-100/80 dark:bg-sky-900/40 text-sky-800 dark:text-sky-200 border-sky-200 dark:border-sky-800/60",
          icon: Sparkles,
          friendlyStatus: "Preparing Your Order",
          friendlySummary:
            "Items are packed at the warehouse. Live GPS triggers once scanned by the courier.",
        };
      default:
        return {
          wrapper:
            "bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-200/80 dark:border-emerald-900/40 text-emerald-950 dark:text-emerald-100",
          pill: "bg-emerald-100/80 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800/60",
          icon: Truck,
          friendlyStatus: "Arriving Today",
          friendlySummary:
            "Your driver is on the road and arriving before the scheduled window.",
        };
    }
  }, [order.scenario]);

  const StatusIcon = config.icon;

  return (
    <div className="space-y-2.5">
      {/* Soft Hero Container */}
      <div
        className={`rounded-3xl border p-5 shadow-xs transition-colors ${config.wrapper}`}
      >
        {/* Courier & Tracking Code */}
        <div className="flex items-center justify-between">
          <div
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${config.pill}`}
          >
            <StatusIcon className="h-3.5 w-3.5" />
            <span>{order.courier.name}</span>
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-background/60 px-3 py-1 font-mono text-xs font-medium text-foreground backdrop-blur-xs transition hover:bg-background"
          >
            <span>{order.trackingId}</span>
            <Copy className="h-3 w-3 text-muted-foreground" />
            {copied && (
              <span className="font-sans text-[10px] text-emerald-600 font-semibold">
                Copied
              </span>
            )}
          </button>
        </div>

        {/* Status Message */}
        <div className="mt-4">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            {config.friendlyStatus}
          </h2>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {config.friendlySummary}
          </p>
        </div>

        {/* ETA Strip */}
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-black/5 bg-background/80 p-3 shadow-2xs backdrop-blur-xs">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">
            <Calendar className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {order.actualDelivery ? "Delivered Date" : "Estimated Arrival"}
            </p>
            <p className="truncate text-xs font-bold text-foreground">
              {order.actualDelivery
                ? new Date(order.actualDelivery).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })
                : order.estimatedDelivery
                  ? new Date(order.estimatedDelivery).toLocaleString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    })
                  : "Awaiting Carrier Update"}
            </p>
          </div>
        </div>
      </div>

      {/* Optional Contextual Alert Banner */}
      {order.alertBanner && (
        <div className="flex items-start gap-2.5 rounded-2xl border border-border/80 bg-muted/40 p-3.5 text-xs">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
          <div className="flex-1 space-y-0.5">
            <p className="font-semibold text-foreground">
              {order.alertBanner.title}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {order.alertBanner.message}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
