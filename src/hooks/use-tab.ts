import { TabState } from "@/types";
import { create } from "zustand";

export const useTab = create<TabState>((set) => ({
  tab: "Advertisement Dashboard",
  status: "active",
  banner: "All banner type",
  page: "Home Page",
  selectTab: (tab) => set(() => ({ tab })),
  selectStatus: (status) => set(() => ({ status })),
  selectBanner: (banner) => set(() => ({ banner })),
  selectPage: (page) => set(() => ({ page })),
}));
