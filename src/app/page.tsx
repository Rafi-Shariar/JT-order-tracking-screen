"use client";

import * as React from "react";

import { ScenarioSwitcher } from "@/components/tracking/scenario-switcher";
import { OrderScenario } from "@/types/tracking.type";
import { mockOrders } from "@/data/mockData";

export default function TrackingPage() {
  const [activeScenario, setActiveScenario] =
    React.useState<OrderScenario>("standard");

  // Find the order matching the active scenario
  const currentOrder =
    Object.values(mockOrders).find(
      (order) => order.scenario === activeScenario
    ) ?? mockOrders["ORD-90211"];

  return (
    <main className="min-h-screen bg-muted/30">
      {/* Mobile Shell: bounded to 430px */}
      <div className="mx-auto min-h-screen max-w-[430px] border-x bg-background shadow-sm">
        <ScenarioSwitcher
          currentScenario={activeScenario}
          onScenarioChange={setActiveScenario}
        />

        {/* Temporary preview container */}
        <div className="p-4">
          <div className="rounded-lg border p-3 text-xs">
            <p className="font-semibold text-foreground">
              Loaded: {currentOrder.orderId}
            </p>
            <p className="text-muted-foreground">
              Status: {currentOrder.statusLabel}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}