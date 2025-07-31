import {create} from "zustand"


type useAuthStore = {
    isAuthonticated: boolean;
    setIsAuthonticated: (value: boolean) => void;
};


export const useAuthStore = create<useAuthStore>((set) => ({
    isAuthonticated: false,
    setIsAuthonticated: (value) => set({isAuthonticated: value}),
}));