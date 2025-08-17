import { ProductsType } from "@/types/global";
import {create} from "zustand"
import { Products } from "../../public/data"


type useAuthStore = {
    isAuthonticated: boolean;
    setIsAuthonticated: (value: boolean) => void;
};


type useSearchStore = {
    searchQuery: string;
    setsearchQuery: (value: string) => void;
}


type useProductsStore = {
  Products: ProductsType[];
  selectedProduct: ProductsType | null;

  setProduct: (value: ProductsType[]) => void;
  setProductById: (id: number) => void;
};

export const useAuthStore = create<useAuthStore>((set) => ({
    isAuthonticated: false,
    setIsAuthonticated: (value) => set({isAuthonticated: value}),
}));


export const useSearchStore = create<useSearchStore>((set) => ({
  searchQuery: "",
  setsearchQuery: (value) => set({searchQuery: value}),
}));


export const useProductsStore = create<useProductsStore>((set) => ({
  Products: Products,
  selectedProduct: null,
  setProduct: (value) => set({ Products: value }),
  setProductById: (id: number) =>
    set((state) => {
      const foundProduct = state.Products.find((p) => p.id === id) || null;
      return { selectedProduct: foundProduct };
    }),
}));