"use client";

import Navbar from "@/components/Promo/Navbar";
import Banner from "./Banner";

export default function Home() {
  return (
    <div className="flex flex-col w-full transition">
      <Navbar />
      <Banner />
    </div>
  );
}
