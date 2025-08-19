import { ProductsType } from "@/types/global";
import { create } from "zustand";
import {Products} from "../../public/data"

type useAuthStore = {
  isAuthonticated: boolean;
  setIsAuthonticated: (value: boolean) => void;
};

type useSearchStore = {
  searchQuery: string;
  setsearchQuery: (value: string) => void;
};

type useProductsStore = {
  Products: ProductsType[];
  selectedProduct: ProductsType | null;
  setProducts: (value: ProductsType[]) => void;
  setSelectedProduct: (product: ProductsType | null) => void;
};

export const useAuthStore = create<useAuthStore>((set) => ({
  isAuthonticated: false,
  setIsAuthonticated: (value) => set({ isAuthonticated: value }),
}));

export const useSearchStore = create<useSearchStore>((set) => ({
  searchQuery: "",
  setsearchQuery: (value) => set({ searchQuery: value }),
}));

export const useProductsStore = create<useProductsStore>((set) => ({
  Products: Products,
  selectedProduct: null,
  setProducts: (value) => set({ Products: value }),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));


