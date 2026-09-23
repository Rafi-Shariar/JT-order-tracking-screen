"use client";

import * as React from "react";
import Image from "next/image";
import { OrderItem } from "@/types/tracking.type";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Package } from "lucide-react";

interface TrackingItemsProps {
  items: OrderItem[];
}

export function TrackingItems({ items }: TrackingItemsProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const primaryItem = items[0];

  return (
    <div className="rounded-3xl border border-border/70 bg-card p-4 shadow-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-muted text-muted-foreground">
            <Package className="h-4 w-4" />
          </div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
            Items in shipment ({items.length})
          </h3>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="h-7 rounded-full px-2.5 text-xs font-semibold text-primary hover:bg-primary/10"
        >
          {isExpanded ? (
            <>
              Less <ChevronUp className="ml-1 h-3.5 w-3.5" />
            </>
          ) : (
            <>
              See All <ChevronDown className="ml-1 h-3.5 w-3.5" />
            </>
          )}
        </Button>
      </div>

      {/* Collapsed Single Item View */}
      {!isExpanded && primaryItem && (
        <div className="mt-3 flex items-center gap-3 rounded-2xl bg-muted/40 p-2.5">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border bg-background">
            <Image
              src={primaryItem.imageUrl}
              alt={primaryItem.name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-foreground">
              {primaryItem.name}
            </p>
            <p className="text-[11px] text-muted-foreground">
              {primaryItem.variant} &bull; Qty {primaryItem.quantity}
            </p>
          </div>
          {items.length > 1 && (
            <span className="shrink-0 rounded-xl bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary">
              +{items.length - 1} more
            </span>
          )}
        </div>
      )}

      {/* Expanded All Items View */}
      {isExpanded && (
        <div className="mt-3 space-y-2.5">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 rounded-2xl bg-muted/30 p-2.5"
            >
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border bg-background">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-foreground">
                  {item.name}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {item.variant}
                </p>
                <p className="text-[11px] font-medium text-muted-foreground">
                  {item.quantity} &times; ${item.price.toFixed(2)}
                </p>
              </div>
              <span className="text-xs font-bold text-foreground">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
