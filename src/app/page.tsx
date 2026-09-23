"use client";

import * as React from "react";
import { ScenarioSwitcher } from "@/components/tracking/scenario-switcher";
import { TrackingCard } from "@/components/tracking/tracking-card";
import { OrderScenario } from "@/types/tracking.type";
import { mockOrders } from "@/data/mockData";
import { ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrackingSkeleton } from "@/components/tracking-states/tracking-skeleton";
import { TrackingEmpty } from "@/components/tracking-states/tracking-empty";
import { TrackingError } from "@/components/tracking-states/tracking-error";

type ViewState = "success" | "loading" | "empty" | "error";

export default function TrackingPage() {
  const [activeScenario, setActiveScenario] = React.useState<OrderScenario>("standard");
  const [viewState, setViewState] = React.useState<ViewState>("success");

  const currentOrder =
    Object.values(mockOrders).find((order) => order.scenario === activeScenario) ??
    mockOrders["ORD-90211"];

  return (
    <main className="min-h-screen bg-muted/40 text-foreground">
      <div className="mx-auto min-h-screen max-w-[430px] border-x border-border/60 bg-background shadow-xs">
        
        {/* App Bar */}
        <div className="flex h-12 items-center justify-between border-b border-border/40 px-3">
          <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Back">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="text-center">
            <h1 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Shipment Tracking
            </h1>
            <p className="text-[11px] font-medium text-foreground">{currentOrder.orderId}</p>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Share">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* State Simulator (Toggle for testing) */}
       <div className="flex gap-1.5 border-b border-border/40 bg-muted/20 p-2 overflow-x-auto text-[11px]">
  {(["success", "loading", "empty", "error"] as ViewState[]).map((state) => (
    <Button
      key={state}
      size="sm"
      variant={viewState === state ? "default" : "secondary"}
      onClick={() => setViewState(state)}
      className="h-7 px-2.5 text-[11px] font-semibold uppercase tracking-wide rounded-lg"
    >
      {state}
    </Button>
  ))}
</div>

        {/* Scenario Switcher (Active on success) */}
        {viewState === "success" && (
          <ScenarioSwitcher
            currentScenario={activeScenario}
            onScenarioChange={setActiveScenario}
          />
        )}

        {/* State Content Router */}
        <div className="pb-8">
          {viewState === "loading" && <TrackingSkeleton />}
          {viewState === "empty" && (
            <TrackingEmpty
              searchedId="ORD-INVALID-99"
              onReset={() => setViewState("success")}
            />
          )}
          {viewState === "error" && (
            <TrackingError onRetry={() => setViewState("loading")} />
          )}
          {viewState === "success" && <TrackingCard order={currentOrder} />}
        </div>
      </div>
    </main>
  );
}