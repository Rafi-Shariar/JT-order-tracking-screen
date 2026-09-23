"use client";

import * as React from "react";
import { OrderDetails } from "@/types/tracking.type";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ExternalLink, Headphones, PhoneCall, Send } from "lucide-react";

interface TrackingActionsProps {
  order: OrderDetails;
}

export function TrackingActions({ order }: TrackingActionsProps) {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setMessage("");
      setOpen(false);
    }, 1500);
  };

  return (
    <div className="pt-1">
      <div className="grid grid-cols-2 gap-2.5">
        {/* Rider Phone or Courier Site */}
        {order.courier.driverPhone ? (
          <Button
            variant="outline"
            size="lg"
            className="rounded-2xl border-border/80 py-6 font-bold shadow-xs hover:bg-muted/80"
          >
            <PhoneCall className="mr-2 h-4 w-4 text-emerald-600" />
            Call Rider
          </Button>
        ) : (
          <Button
            variant="outline"
            size="lg"
            className="rounded-2xl border-border/80 py-6 font-bold shadow-xs hover:bg-muted/80"
          >
            <ExternalLink className="mr-2 h-4 w-4 text-primary" />
            Carrier Info
          </Button>
        )}

        {/* Contact Support Dialog Modal */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="rounded-2xl py-6 font-bold shadow-xs">
              <Headphones className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-[380px] rounded-3xl p-6">
            <DialogHeader className="text-left">
              <DialogTitle className="text-base font-bold">
                Contact Support
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                We typically respond within 15 minutes.
              </DialogDescription>
            </DialogHeader>

            {submitted ? (
              <div className="rounded-2xl bg-emerald-500/10 p-4 text-center text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                Message sent successfully. An agent will contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="order-id"
                    className="text-xs font-medium text-muted-foreground"
                  >
                    Order Reference
                  </Label>
                  <Input
                    id="order-id"
                    value={order.orderId}
                    readOnly
                    className="h-10 rounded-xl bg-muted/50 font-mono text-xs font-semibold"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="issue"
                    className="text-xs font-medium text-muted-foreground"
                  >
                    How can we help?
                  </Label>
                  <Textarea
                    id="issue"
                    placeholder="Describe your issue or missing package details..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="resize-none rounded-xl text-xs leading-relaxed"
                    required
                  />
                </div>

                <DialogFooter className="pt-2">
                  <Button
                    type="submit"
                    className="w-full rounded-xl font-semibold"
                    disabled={!message.trim()}
                  >
                    <Send className="mr-2 h-3.5 w-3.5" />
                    Submit Request
                  </Button>
                </DialogFooter>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
