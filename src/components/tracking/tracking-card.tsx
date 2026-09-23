"use client";

import * as React from "react";
import { OrderDetails } from "@/types/tracking.type";
import { TrackingBanner } from "./tracking-banner";
import { TrackingTimeline } from "./tracking-timeline";
import { TrackingItems } from "./tracking-items";
import { TrackingBilling } from "./tracking-billing";
import { TrackingActions } from "./tracking-action";

interface TrackingCardProps {
  order: OrderDetails;
}

export function TrackingCard({ order }: TrackingCardProps) {
  return (
    <div className="space-y-3.5 px-4 py-3">
      {/* 1. Banner Info */}
      <TrackingBanner order={order} />

      {/* 2. Step Timeline */}
      <TrackingTimeline timeline={order.timeline} />

      {/* 3. Items Breakdown */}
      <TrackingItems items={order.items} />

      {/* 4. Billing Ledger */}
      <TrackingBilling pricing={order.pricing} />

      {/* 5. Driver Call & Support Modal */}
      <TrackingActions order={order} />
    </div>
  );
}
