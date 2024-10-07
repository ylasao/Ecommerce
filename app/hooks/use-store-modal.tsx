import { create } from "zustand";

interface useStoreModalInterface {
  isOpen: boolean;
  onOpen: () => {};
  onClose: () => {};
}
export const useStoreModal = create<useStoreModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  inClose: () => ({ isOpen: false }),
}));
