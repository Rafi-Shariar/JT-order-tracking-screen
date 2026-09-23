"use client";

import * as React from "react";
import { ScenarioSwitcher } from "@/components/tracking/scenario-switcher";
import { TrackingCard } from "@/components/tracking/tracking-card";
import { OrderScenario } from "@/types/tracking.type";
import { mockOrders } from "@/data/mockData";
import { ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TrackingPage() {
  const [activeScenario, setActiveScenario] =
    React.useState<OrderScenario>("standard");

  const currentOrder =
    Object.values(mockOrders).find(
      (order) => order.scenario === activeScenario,
    ) ?? mockOrders["ORD-90211"];

  return (
    <main className="min-h-screen bg-muted/40 text-foreground">
      {/* Mobile Shell: strictly bounded for 360px - 430px */}
      <div className="mx-auto min-h-screen max-w-[430px] border-x border-border/60 bg-background shadow-xs">
        {/* Top App Bar */}
        <div className="flex h-12 items-center justify-between border-b border-border/40 px-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            aria-label="Go back"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>

          <div className="text-center">
            <h1 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Shipment Tracking
            </h1>
            <p className="text-[11px] font-medium text-foreground">
              {currentOrder.orderId}
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            aria-label="Share tracking details"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Sticky Scenario Controller */}
        <ScenarioSwitcher
          currentScenario={activeScenario}
          onScenarioChange={setActiveScenario}
        />

        {/* Active Order Card View */}
        <div className="pb-8">
          <TrackingCard order={currentOrder} />
        </div>
      </div>
    </main>
  );
}
