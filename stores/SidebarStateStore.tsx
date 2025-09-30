import { createStore, useStore } from "zustand";
import { persist } from "zustand/middleware";

type SidebarState = { open: boolean };
type SidebarStateAction = {
  actions: {
    setSidebarState: (bool: SidebarState["open"]) => void;
  };
};

type SidebarStateStoreType = SidebarState & SidebarStateAction;

const SidebarStateStore = createStore<SidebarStateStoreType>()(
  persist(
    (set) => ({
      open: true,
      actions: {
        setSidebarState: (open) => set({ open }),
      },
    }),
    { name: "readlater-sidebar", partialize: (state) => ({ open: state.open }) },
  ),
);

const useSidebarStore = () => ({
  open: useStore(SidebarStateStore, (s) => s.open),
  actions: useStore(SidebarStateStore, (s) => s.actions),
});

export default SidebarStateStore;
export { useSidebarStore };
