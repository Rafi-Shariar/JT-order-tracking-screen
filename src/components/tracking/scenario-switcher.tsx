"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Truck, AlertTriangle, PackageCheck, Clock } from "lucide-react";
import { OrderScenario } from "@/types/tracking.type";

interface ScenarioSwitcherProps {
  currentScenario: OrderScenario;
  onScenarioChange: (scenario: OrderScenario) => void;
}

const scenarios: {
  value: OrderScenario;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}[] = [
  {
    value: "standard",
    label: "Active",
    icon: Truck,
  },
  {
    value: "delayed",
    label: "Delayed",
    icon: AlertTriangle,
    badge: "Alert",
  },
  {
    value: "delivered_not_received",
    label: "Disputed",
    icon: PackageCheck,
    badge: "Action",
  },
  {
    value: "tracking_pending",
    label: "Pending",
    icon: Clock,
  },
];

export function ScenarioSwitcher({
  currentScenario,
  onScenarioChange,
}: ScenarioSwitcherProps) {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-md flex-col px-4 pt-3 pb-2.5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
            Test Scenario Switcher
          </span>
          <span className="text-[11px] text-muted-foreground">
            360px - 430px viewport
          </span>
        </div>

        <Tabs
          value={currentScenario}
          onValueChange={(val) => onScenarioChange(val as OrderScenario)}
          className="w-full"
        >
          {/* Scrollable list for tight mobile widths */}
          <TabsList className="grid h-10 w-full grid-cols-4 p-1">
            {scenarios.map((item) => {
              const Icon = item.icon;
              return (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="flex items-center justify-center gap-1.5 px-2 text-xs font-medium transition-all"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
}