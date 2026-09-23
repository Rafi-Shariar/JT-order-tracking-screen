export type OrderScenario =
  | "standard"
  | "delayed"
  | "delivered_not_received"
  | "tracking_pending";

export type TrackingStatus =
  | "order_placed"
  | "processing"
  | "shipped"
  | "out_for_delivery"
  | "delivered"
  | "delayed"
  | "investigating";

export interface TimelineCheckpoint {
  id: string;
  title: string;
  description: string;
  location: string;
  timestamp: string | null;
  status: "completed" | "current" | "upcoming" | "alert";
}

export interface CourierInfo {
  name: string;
  service: string;
  trackingNumber: string;
  driverName?: string;
  driverPhone?: string;
  supportPhone?: string;
}

export interface OrderItem {
  id: string;
  name: string;
  variant: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

export interface OrderDetails {
  orderId: string;
  trackingId: string;
  scenario: OrderScenario;
  status: TrackingStatus;
  statusLabel: string;
  statusDescription: string;
  placedAt: string;
  estimatedDelivery: string | null;
  actualDelivery: string | null;
  alertBanner?: {
    type: "warning" | "destructive" | "info";
    title: string;
    message: string;
    actionLabel?: string;
  };
  shippingAddress: {
    recipientName: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
  };
  courier: CourierInfo;
  items: OrderItem[];
  pricing: {
    subtotal: number;
    shippingFee: number;
    discount: number;
    total: number;
    paymentMethod: string;
  };
  timeline: TimelineCheckpoint[];
}
