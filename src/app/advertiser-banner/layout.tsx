import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promotion Page",
  description: "Promotion Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
