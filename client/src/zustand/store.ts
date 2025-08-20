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
export interface CartVariant {
  variantKey: string;
  color?: ColorOption;
  size: string;
  quantity: number;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  path: string;
  totalQuantity: number; 
  variants: CartVariant[]; 
  selected?: boolean;
}

interface CartStore {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;

  addToCart: (item: {
    id: number;
    name: string;
    price: number;
    color?: ColorOption;
    size: string;
    quantity: number;
    image: string;
    path: string;
  }) => void;
  removeFromCart: (id: number, variantKey?: string) => void;
  updateQuantity: (id: number, variantKey: string, quantity: number) => void;
  clearCart: () => void;
  getItemById: (id: number) => CartItem | undefined;
  getItemByProductVariant: (
    id: number,
    colorId?: string,
    size?: string
  ) => CartVariant | undefined;
  toggleItemSelection: (id: number) => void;
  toggleAllSelection: () => void;
  calculateTotals: () => { total: number; selectedTotal: number };
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addToCart: (newItem) => {
        const state = get();
        const variantKey = `${newItem.id}-${newItem.color?.id || "no-color"}-${
          newItem.size || "no-size"
        }`;

        const existingItemIndex = state.items.findIndex(
          (item) => item.id === newItem.id
        );

        if (existingItemIndex !== -1) {
          // Product exists, check if variant exists
          const existingItem = state.items[existingItemIndex];
          const existingVariantIndex = existingItem.variants.findIndex(
            (variant) => variant.variantKey === variantKey
          );

          if (existingVariantIndex !== -1) {
            // Variant exists, update quantity
            set((state) => ({
              items: state.items.map((item, index) =>
                index === existingItemIndex
                  ? {
                      ...item,
                      totalQuantity: item.totalQuantity + newItem.quantity,
                      variants: item.variants.map((variant, vIndex) =>
                        vIndex === existingVariantIndex
                          ? {
                              ...variant,
                              quantity: variant.quantity + newItem.quantity,
                            }
                          : variant
                      ),
                    }
                  : item
              ),
            }));
          } else {
            // New variant for existing product
            const newVariant: CartVariant = {
              variantKey,
              color: newItem.color,
              size: newItem.size,
              quantity: newItem.quantity,
            };

            set((state) => ({
              items: state.items.map((item, index) =>
                index === existingItemIndex
                  ? {
                      ...item,
                      totalQuantity: item.totalQuantity + newItem.quantity,
                      variants: [...item.variants, newVariant],
                    }
                  : item
              ),
            }));
          }
        } else {
          // New product
          const newVariant: CartVariant = {
            variantKey,
            color: newItem.color,
            size: newItem.size,
            quantity: newItem.quantity,
          };

          const newCartItem: CartItem = {
            id: newItem.id,
            name: newItem.name,
            price: newItem.price,
            image: newItem.image,
            path: newItem.path,
            totalQuantity: newItem.quantity,
            variants: [newVariant],
            selected: false,
          };

          set((state) => ({
            items: [...state.items, newCartItem],
          }));
        }

        get().calculateTotals();
      },

      removeFromCart: (id, variantKey) => {
        if (variantKey) {
          // Remove specific variant
          set((state) => ({
            items: state.items
              .map((item) =>
                item.id === id
                  ? {
                      ...item,
                      variants: item.variants.filter(
                        (variant) => variant.variantKey !== variantKey
                      ),
                      totalQuantity: item.variants
                        .filter((variant) => variant.variantKey !== variantKey)
                        .reduce((sum, variant) => sum + variant.quantity, 0),
                    }
                  : item
              )
              .filter((item) => item.variants.length > 0), // Remove items with no variants
          }));
        } else {
          // Remove entire product
          set((state) => ({
            items: state.items.filter((item) => item.id !== id),
          }));
        }
        get().calculateTotals();
      },

      updateQuantity: (id, variantKey, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id, variantKey);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  variants: item.variants.map((variant) =>
                    variant.variantKey === variantKey
                      ? { ...variant, quantity }
                      : variant
                  ),
                  totalQuantity: item.variants
                    .map((variant) =>
                      variant.variantKey === variantKey
                        ? quantity
                        : variant.quantity
                    )
                    .reduce((sum, qty) => sum + qty, 0),
                }
              : item
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
        const item = get().items.find((item) => item.id === id);
        return item?.variants.find(
          (variant) => variant.variantKey === variantKey
        );
      },

      toggleItemSelection: (id) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, selected: !item.selected } : item
          ),
        }));
      },

      toggleAllSelection: () => {
        set((state) => {
          const allSelected = state.items.every((item) => item.selected);
          return {
            items: state.items.map((item) => ({
              ...item,
              selected: !allSelected,
            })),
          };
        });
      },

      calculateTotals: () => {
        const { items } = get();
        const totalItems = items.reduce(
          (sum, item) => sum + item.totalQuantity,
          0
        );
        const totalPrice = items.reduce(
          (sum, item) => sum + item.price * item.totalQuantity,
          0
        );

        const selectedTotal = items
          .filter((item) => item.selected)
          .reduce((sum, item) => sum + item.price * item.totalQuantity, 0);

        set({ totalItems, totalPrice });

        return { total: totalPrice, selectedTotal };
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
