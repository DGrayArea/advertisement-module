export type Campaign = {
  name: string;
  id: string;
  type: string;
  maturity: string;
  impressions: number;
  clicks: number;
  length: string;
  saleValue: string;
  discount: string;
  history: string;
  status: "active" | "pending" | "stop";
};

export type Promotion = {
  name: string;
  promotion: string;
  type: string;
  impressions: number;
  clicks: number;
  shares: number;
  conversions: number;
  length: string;
  details: string;
};

export type TabState = {
  tab: string;
  status: Status;
  banner: BannerType;
  page: PageType;
  selectTab: (tab: string) => void;
  selectStatus: (status: Status) => void;
  selectBanner: (banner: BannerType) => void;
  selectPage: (banner: PageType) => void;
};

export type Status = "all" | "active" | "pending" | "stop";

export type BannerType =
  | "All banner type"
  | "H1"
  | "H2"
  | "H3"
  | "H4"
  | "H5"
  | "H6"
  | "H7"
  | "E1"
  | "E2"
  | "E3"
  | "E4"
  | "E5";

export type PageType = "Home Page" | "Event Page";

export interface PrimaryButtonProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  className?: string;
}
