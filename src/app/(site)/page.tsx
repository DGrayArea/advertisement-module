"use client";

import Advertise from "@/components/Advertisement/Advertise";
import Promotion from "@/components/Promotion/Promotion";
import { useTab } from "@/hooks/use-tab";

export default function Home() {
  const { tab } = useTab();
  return (
    <div className="flex flex-col items-center justify-center max-w-screen overflow-auto md:w-full h-full transition">
      {tab === "Advertisement Dashboard" ? <Advertise /> : <Promotion />}
    </div>
  );
}
