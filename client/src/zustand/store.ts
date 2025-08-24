import { ProductsType } from "@/types/global";
import { create } from "zustand";
import { Products } from "../../public/data";


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
