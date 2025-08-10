import {create} from "zustand"


type useAuthStore = {
    isAuthonticated: boolean;
    setIsAuthonticated: (value: boolean) => void;
};


type useSearchStore = {
    searchQuery: string;
    setsearchQuery: (value: string) => void;
}

export const useAuthStore = create<useAuthStore>((set) => ({
    isAuthonticated: false,
    setIsAuthonticated: (value) => set({isAuthonticated: value}),
}));


export const useSearchStore = create<useSearchStore>((set) => ({
  searchQuery: "",
  setsearchQuery: (value) => set({searchQuery: value}),
}));