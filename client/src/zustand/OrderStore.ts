import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItem } from "./CartStore";
import {
  Order,
  OrderStatus,
  PaymentDetails,
  ShippingAddressInputs,
} from "@/types/global";

interface OrderStore {
  orders: Order[];
  currentOrder: Order | null;
  isProcessingOrder: boolean;

  // Order Creation
  createOrder: (
    items: CartItem[],
    shippingAddress: ShippingAddressInputs,
    paymentDetails: PaymentDetails
  ) => Promise<Order>;

  // Order Management
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  addTrackingNumber: (orderId: string, trackingNumber: string) => void;
  cancelOrder: (orderId: string) => void;

  // Order Retrieval
  getOrderById: (orderId: string) => Order | undefined;
  getOrdersByStatus: (status: OrderStatus) => Order[];
  getRecentOrders: (limit?: number) => Order[];

  // Current Order (for checkout process)
  setCurrentOrder: (order: Order | null) => void;
  clearCurrentOrder: () => void;

  // Utility
  generateOrderNumber: () => string;
  calculateOrderTotals: (items: CartItem[]) => {
    totalItems: number;
    totalPrice: number;
  };
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set, get) => ({
      orders: [],
      currentOrder: null,
      isProcessingOrder: false,

      createOrder: async (items, shippingAddress, paymentDetails) => {
        set({ isProcessingOrder: true });

        try {
          const { totalItems, totalPrice } = get().calculateOrderTotals(items);
          const orderId = crypto.randomUUID();
          const orderNumber = get().generateOrderNumber();

          const newOrder: Order = {
            id: orderId,
            orderNumber,
            items: [...items], // Deep copy items
            totalItems,
            totalPrice,
            shippingAddress: { ...shippingAddress },
            paymentDetails: {
              method: paymentDetails.method,
              cardHolderName: paymentDetails.cardHolderName,
              paypalEmail: paymentDetails.paypalEmail,
              // Don't store sensitive card info
            },
            status: "pending",
            createdAt: new Date(),
            updatedAt: new Date(),
            estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
          };

          // Simulate API call delay
          await new Promise((resolve) => setTimeout(resolve, 2000));

          // Here you would typically make an API call to your backend
          // const response = await fetch('/api/orders', { ... });

          set((state) => ({
            orders: [newOrder, ...state.orders],
            currentOrder: newOrder,
            isProcessingOrder: false,
          }));

          return newOrder;
        } catch (error) {
          set({ isProcessingOrder: false });
          throw error;
        }
      },

      updateOrderStatus: (orderId, status) => {
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === orderId
              ? { ...order, status, updatedAt: new Date() }
              : order
          ),
          currentOrder:
            state.currentOrder?.id === orderId
              ? { ...state.currentOrder, status, updatedAt: new Date() }
              : state.currentOrder,
        }));
      },

      addTrackingNumber: (orderId, trackingNumber) => {
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === orderId
              ? {
                  ...order,
                  trackingNumber,
                  status: "shipped",
                  updatedAt: new Date(),
                }
              : order
          ),
        }));
      },

      cancelOrder: (orderId) => {
        get().updateOrderStatus(orderId, "cancelled");
      },

      getOrderById: (orderId) => {
        return get().orders.find((order) => order.id === orderId);
      },

      getOrdersByStatus: (status) => {
        return get().orders.filter((order) => order.status === status);
      },

      getRecentOrders: (limit = 10) => {
        return get()
          .orders.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .slice(0, limit);
      },

      setCurrentOrder: (order) => {
        set({ currentOrder: order });
      },

      clearCurrentOrder: () => {
        set({ currentOrder: null });
      },

      generateOrderNumber: () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const random = Math.floor(Math.random() * 10000)
          .toString()
          .padStart(4, "0");
        return `ORD-${year}${month}${day}-${random}`;
      },

      calculateOrderTotals: (items) => {
        const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        return { totalItems, totalPrice };
      },
    }),
    {
      name: "order-storage",
      storage: createJSONStorage(() => localStorage),
      // Only persist orders, not current order or processing state
      partialize: (state) => ({ orders: state.orders }),
    }
  )
);
