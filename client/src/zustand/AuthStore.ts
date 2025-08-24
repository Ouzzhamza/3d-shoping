import { create } from "zustand";



// -------- Auth Store --------


type DialogType = "login" | "signup" | "forgotPassword" | null;

interface DialogState {
  activeDialog: DialogType;
  openDialog: (type: DialogType) => void;
  closeDialog: () => void;
  switchDialog: (to: DialogType) => void;
}

type useAuthStore = {
  isAuthenticated: boolean;
  setisAuthenticated: (value: boolean) => void;
};



export const useAuthStore = create<useAuthStore>((set) => ({
  isAuthenticated: false,
  setisAuthenticated: (value) => set({ isAuthenticated: value }),
}));


export const useDialogStore = create<DialogState>((set) => ({
  activeDialog: null,
  openDialog: (type) => set({ activeDialog: type }),
  closeDialog: () => set({ activeDialog: null }),
  switchDialog: (to) => set({ activeDialog: to }),
}));



