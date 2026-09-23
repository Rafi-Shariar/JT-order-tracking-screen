import { OrderDetails } from "@/types/tracking.type";

export const mockOrders: Record<string, OrderDetails> = {
  // Scenario: Standard Active Order (Out for Delivery)
  "ORD-90211": {
    orderId: "ORD-90211",
    trackingId: "TRK-STD-4401",
    scenario: "standard",
    status: "out_for_delivery",
    statusLabel: "Out for Delivery",
    statusDescription:
      "Your driver is nearby and arriving before 4:00 PM today.",
    placedAt: "2026-09-20T10:15:00Z",
    estimatedDelivery: "2026-09-23T16:00:00Z",
    actualDelivery: null,
    shippingAddress: {
      recipientName: "Rafi Shariar",
      street: "House 14, Road 4, Sector 7, Uttara",
      city: "Dhaka",
      state: "Dhaka Division",
      zipCode: "1230",
      phone: "+880 1712-345678",
    },
    courier: {
      name: "Pathao Express",
      service: "Next-Day Priority",
      trackingNumber: "PTH-8839210",
      driverName: "Kamal Hossain",
      driverPhone: "+880 1890-112233",
    },
    items: [
      {
        id: "item-101",
        name: "Minimalist Leather Backpack",
        variant: "Matte Black / 16-inch",
        quantity: 1,
        price: 89.0,
        imageUrl:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80",
      },
      {
        id: "item-102",
        name: "Insulated Stainless Steel Tumbler",
        variant: "Graphite / 750ml",
        quantity: 1,
        price: 24.5,
        imageUrl:
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80",
      },
    ],
    pricing: {
      subtotal: 113.5,
      shippingFee: 5.0,
      discount: 10.0,
      total: 108.5,
      paymentMethod: "Visa ending in 4242",
    },
    timeline: [
      {
        id: "step-1",
        title: "Order Placed",
        description: "Payment confirmed and sent to warehouse.",
        location: "Dhaka Hub",
        timestamp: "2026-09-20T10:15:00Z",
        status: "completed",
      },
      {
        id: "step-2",
        title: "Packed & Processed",
        description: "Package sealed and labeled for dispatch.",
        location: "Warehouse Central, Gazipur",
        timestamp: "2026-09-21T14:30:00Z",
        status: "completed",
      },
      {
        id: "step-3",
        title: "In Transit",
        description: "Arrived at sorting facility.",
        location: "Dhaka North Hub",
        timestamp: "2026-09-22T21:00:00Z",
        status: "completed",
      },
      {
        id: "step-4",
        title: "Out for Delivery",
        description: "Assigned to driver Kamal Hossain.",
        location: "Uttara Delivery Station",
        timestamp: "2026-09-23T08:45:00Z",
        status: "current",
      },
      {
        id: "step-5",
        title: "Delivered",
        description: "Package handed over to recipient.",
        location: "Recipient Address",
        timestamp: null,
        status: "upcoming",
      },
    ],
  },

  // Scenario 1: Delayed Order (Weather/Customs disruption)
  "ORD-84192": {
    orderId: "ORD-84192",
    trackingId: "TRK-DLY-9912",
    scenario: "delayed",
    status: "delayed",
    statusLabel: "Shipment Delayed",
    statusDescription:
      "Severe weather conditions in transit corridors have delayed your estimated arrival.",
    placedAt: "2026-09-17T09:00:00Z",
    estimatedDelivery: "2026-09-26T18:00:00Z",
    actualDelivery: null,
    alertBanner: {
      type: "warning",
      title: "Delivery Rescheduled",
      message:
        "Original ETA was Sep 21. Transit transport was halted due to highway flooding. Your package is safe in the regional sorting hub.",
      actionLabel: "View Transit Notice",
    },
    shippingAddress: {
      recipientName: "Rafi Shariar",
      street: "Plot 88, Block E, Banani",
      city: "Dhaka",
      state: "Dhaka Division",
      zipCode: "1213",
      phone: "+880 1712-345678",
    },
    courier: {
      name: "DHL Express",
      service: "Standard Air & Road",
      trackingNumber: "DHL-550192837",
      supportPhone: "+880 9612-345678",
    },
    items: [
      {
        id: "item-201",
        name: "Mechanical Wireless Keyboard",
        variant: "75% Layout / Gateron Yellow",
        quantity: 1,
        price: 135.0,
        imageUrl:
          "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80",
      },
    ],
    pricing: {
      subtotal: 135.0,
      shippingFee: 12.0,
      discount: 0.0,
      total: 147.0,
      paymentMethod: "Mastercard ending in 8110",
    },
    timeline: [
      {
        id: "step-1",
        title: "Order Placed",
        description: "Order verified.",
        location: "Online",
        timestamp: "2026-09-17T09:00:00Z",
        status: "completed",
      },
      {
        id: "step-2",
        title: "Dispatched from Port",
        description: "Cleared local sorting.",
        location: "Chattogram Hub",
        timestamp: "2026-09-19T11:20:00Z",
        status: "completed",
      },
      {
        id: "step-3",
        title: "Transit Interruption",
        description: "Halted at highway checkpoint due to severe flooding.",
        location: "Feni Transit Depot",
        timestamp: "2026-09-21T06:15:00Z",
        status: "alert",
      },
      {
        id: "step-4",
        title: "Out for Delivery",
        description: "Resumed transit to destination hub.",
        location: "Dhaka Sorting Terminal",
        timestamp: null,
        status: "upcoming",
      },
      {
        id: "step-5",
        title: "Delivered",
        description: "Package received.",
        location: "Recipient Address",
        timestamp: null,
        status: "upcoming",
      },
    ],
  },

  // Scenario 2: Delivered but Not Received (Dispute / Missing package)
  "ORD-77631": {
    orderId: "ORD-77631",
    trackingId: "TRK-DNR-3011",
    scenario: "delivered_not_received",
    status: "investigating",
    statusLabel: "Marked Delivered — Disputed",
    statusDescription:
      "System marked this order delivered yesterday, but you reported missing items.",
    placedAt: "2026-09-18T16:40:00Z",
    estimatedDelivery: "2026-09-22T15:00:00Z",
    actualDelivery: "2026-09-22T14:38:00Z",
    alertBanner: {
      type: "destructive",
      title: "Delivery Dispute Open",
      message:
        "Courier claims delivery at 'Front Door/Porch' with proof of delivery photo. An agent is reviewing within 24 hours.",
      actionLabel: "Contact Support / File Claim",
    },
    shippingAddress: {
      recipientName: "Rafi Shariar",
      street: "Flat 4B, Road 12, Dhanmondi",
      city: "Dhaka",
      state: "Dhaka Division",
      zipCode: "1209",
      phone: "+880 1712-345678",
    },
    courier: {
      name: "Steadfast Courier",
      service: "Express Handover",
      trackingNumber: "STF-9908123",
      driverName: "Tareq Aziz",
      supportPhone: "+880 9678-000999",
    },
    items: [
      {
        id: "item-301",
        name: "Noise-Cancelling Over-Ear Headphones",
        variant: "Midnight Silver",
        quantity: 1,
        price: 249.99,
        imageUrl:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
      },
    ],
    pricing: {
      subtotal: 249.99,
      shippingFee: 0.0,
      discount: 25.0,
      total: 224.99,
      paymentMethod: "Apple Pay / Amex",
    },
    timeline: [
      {
        id: "step-1",
        title: "Order Placed",
        description: "Order processed successfully.",
        location: "Online",
        timestamp: "2026-09-18T16:40:00Z",
        status: "completed",
      },
      {
        id: "step-2",
        title: "Shipped",
        description: "Departed fulfilment warehouse.",
        location: "Savar Fulfilment Center",
        timestamp: "2026-09-20T08:00:00Z",
        status: "completed",
      },
      {
        id: "step-3",
        title: "Marked Delivered",
        description: "Carrier reported: Left at front door with security.",
        location: "Dhanmondi, Dhaka",
        timestamp: "2026-09-22T14:38:00Z",
        status: "completed",
      },
      {
        id: "step-4",
        title: "Missing Package Claim Submitted",
        description:
          "Customer reported non-receipt. Driver GPS check in progress.",
        location: "Customer Care Operations",
        timestamp: "2026-09-22T16:05:00Z",
        status: "alert",
      },
    ],
  },

  // Scenario 3: Tracking Not Available Yet (Just ordered / Awaiting 3PL scan)
  "ORD-61209": {
    orderId: "ORD-61209",
    trackingId: "TRK-PND-0019",
    scenario: "tracking_pending",
    status: "processing",
    statusLabel: "Tracking Details Pending",
    statusDescription:
      "Order confirmed. Carrier tracking numbers typically activate within 12-24 hours after dispatch scan.",
    placedAt: "2026-09-23T14:10:00Z",
    estimatedDelivery: "2026-09-27T18:00:00Z",
    actualDelivery: null,
    alertBanner: {
      type: "info",
      title: "Awaiting Carrier Sync",
      message:
        "The merchant is preparing your package. Live tracking coordinates will display once the courier scans the initial barcode.",
    },
    shippingAddress: {
      recipientName: "Rafi Shariar",
      street: "House 29, Road 2, Mirpur 1",
      city: "Dhaka",
      state: "Dhaka Division",
      zipCode: "1216",
      phone: "+880 1712-345678",
    },
    courier: {
      name: "RedX Logistics",
      service: "Standard Delivery",
      trackingNumber: "Pending Allocation",
    },
    items: [
      {
        id: "item-401",
        name: "Canvas Minimalist High-Top Sneakers",
        variant: "Off-White / EU 42",
        quantity: 1,
        price: 65.0,
        imageUrl:
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=80",
      },
      {
        id: "item-402",
        name: "Cotton Crewneck T-Shirt 3-Pack",
        variant: "Black / Grey / Olive (Size L)",
        quantity: 1,
        price: 32.0,
        imageUrl:
          "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=80",
      },
    ],
    pricing: {
      subtotal: 97.0,
      shippingFee: 3.5,
      discount: 5.0,
      total: 95.5,
      paymentMethod: "bKash Digital Payment",
    },
    timeline: [
      {
        id: "step-1",
        title: "Order Placed & Confirmed",
        description: "Merchant verified payment and items.",
        location: "Dhaka Central Store",
        timestamp: "2026-09-23T14:10:00Z",
        status: "completed",
      },
      {
        id: "step-2",
        title: "Packaging in Progress",
        description: "Warehouse team picking items from shelf.",
        location: "Warehouse Hub",
        timestamp: "2026-09-23T15:20:00Z",
        status: "current",
      },
      {
        id: "step-3",
        title: "Handover to Courier",
        description: "Awaiting pickup scan by RedX courier.",
        location: "Dock 3",
        timestamp: null,
        status: "upcoming",
      },
      {
        id: "step-4",
        title: "In Transit",
        description: "Live tracking updates will trigger here.",
        location: "Sorting Depot",
        timestamp: null,
        status: "upcoming",
      },
    ],
  },
};
