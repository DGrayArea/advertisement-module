"use client";

import Navbar from "@/components/BannerSetup/Navbar";
import Banner from "./Banner";

export default function Home() {
  return (
    <div className="flex flex-col w-full px-8 transition">
      <Navbar />
      <Banner />
    </div>
  );
}
