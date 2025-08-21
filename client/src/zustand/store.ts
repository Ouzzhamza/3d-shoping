import { ColorOption, ProductsType } from "@/types/global";
import { create } from "zustand";
import { Products } from "../../public/data";
import { persist, createJSONStorage } from "zustand/middleware";

// -------- Auth Store --------
type useAuthStore = {
  isAuthonticated: boolean;
  setIsAuthonticated: (value: boolean) => void;
};

export const useAuthStore = create<useAuthStore>((set) => ({
  isAuthonticated: false,
  setIsAuthonticated: (value) => set({ isAuthonticated: value }),
}));

// -------- Search Store --------
type useSearchStore = {
  searchQuery: string;
  setsearchQuery: (value: string) => void;
};

export const useSearchStore = create<useSearchStore>((set) => ({
  searchQuery: "",
  setsearchQuery: (value) => set({ searchQuery: value }),
}));

// -------- Products Store --------
type useProductsStore = {
  Products: ProductsType[];
  selectedProduct: ProductsType | null;
  setProducts: (value: ProductsType[]) => void;
  setSelectedProduct: (product: ProductsType | null) => void;
};

export const useProductsStore = create<useProductsStore>((set) => ({
  Products,
  selectedProduct: null,
  setProducts: (value) => set({ Products: value }),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));

// -------- Cart Store --------
export interface CartItem {
  id: number; // keep numeric productId
  name: string;
  price: number;
  color?: ColorOption;
  size: string;
  quantity: number;
  image: string;
  path: string;

  // extra composite key to differentiate variants
  variantKey: string;
}

interface CartStore {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;

  addToCart: (item: Omit<CartItem, "variantKey">) => void;
  removeFromCart: (variantKey: string) => void;
  updateQuantity: (variantKey: string, quantity: number) => void;
  clearCart: () => void;
  getItemById: (id: number) => CartItem | undefined;
  getItemByProductVariant: (
    id: number,
    colorId?: string,
    size?: string
  ) => CartItem | undefined;

  calculateTotals: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addToCart: (newItem) => {
        const state = get();

        // Generate variantKey for uniqueness
        const variantKey = `${newItem.id}-${newItem.color?.id || "no-color"}-${
          newItem.size || "no-size"
        }`;

        const existingItem = state.items.find(
          (item) => item.variantKey === variantKey
        );

        if (existingItem) {
          // update quantity
          state.updateQuantity(
            existingItem.variantKey,
            existingItem.quantity + newItem.quantity
          );
        } else {
          // add new item
          const itemWithKey: CartItem = {
            ...newItem,
            variantKey,
          };

          set((state) => ({
            items: [...state.items, itemWithKey],
          }));
        }

        get().calculateTotals();
      },

      removeFromCart: (variantKey) => {
        set((state) => ({
          items: state.items.filter((item) => item.variantKey !== variantKey),
        }));
        get().calculateTotals();
      },

      updateQuantity: (variantKey, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(variantKey);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.variantKey === variantKey ? { ...item, quantity } : item
          ),
        }));
        get().calculateTotals();
      },

      clearCart: () => {
        set({ items: [], totalItems: 0, totalPrice: 0 });
      },

      getItemById: (id) => {
        return get().items.find((item) => item.id === id);
      },

      getItemByProductVariant: (id, colorId, size) => {
        const variantKey = `${id}-${colorId || "no-color"}-${
          size || "no-size"
        }`;
        return get().items.find((item) => item.variantKey === variantKey);
      },

      calculateTotals: () => {
        const { items } = get();
        const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        set({ totalItems, totalPrice });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
