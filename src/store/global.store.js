import { create } from 'zustand';

export const useMenu = create((set) => ({
    isOpen: false,
    openMenu: () => set((state) => ({ isOpen: !state.isOpen })),
    closeMenu: () => set({ isOpen: false }),
}));