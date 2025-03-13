import { create } from "zustand";

type TabState = {
  tab: string;
  selectTab: (tab: string) => void;
};

export const useTab = create<TabState>((set) => ({
  tab: "Advertisement Dashboard",
  selectTab: (tab) => set(() => ({ tab })),
}));
