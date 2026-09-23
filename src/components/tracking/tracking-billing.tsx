"use client";

import * as React from "react";
import { OrderDetails } from "@/types/tracking.type";
import { CreditCard } from "lucide-react";

interface TrackingBillingProps {
  pricing: OrderDetails["pricing"];
}

export function TrackingBilling({ pricing }: TrackingBillingProps) {
  return (
    <div className="rounded-3xl border border-border/70 bg-card p-4 shadow-xs">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-muted text-muted-foreground">
            <CreditCard className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Payment Method
            </p>
            <p className="text-xs font-bold text-foreground">
              {pricing.paymentMethod}
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Total Paid
          </span>
          <p className="text-base font-extrabold tracking-tight text-foreground">
            ${pricing.total.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="space-y-1.5 pt-3 text-[11px]">
        <div className="flex justify-between text-muted-foreground">
          <span>Items subtotal</span>
          <span className="font-semibold text-foreground">
            ${pricing.subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Delivery fee</span>
          <span className="font-semibold text-foreground">
            ${pricing.shippingFee.toFixed(2)}
          </span>
        </div>
        {pricing.discount > 0 && (
          <div className="flex justify-between font-semibold text-emerald-600 dark:text-emerald-400">
            <span>Discount</span>
            <span>-${pricing.discount.toFixed(2)}</span>
          </div>
        )}
      </div>
    </div>
  );
}
