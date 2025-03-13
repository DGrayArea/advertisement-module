"use client";

import { useTab } from "@/hooks/use-tab";

const Navbar = () => {
  const { tab } = useTab();

  return (
    <div
      className={`bg-[#324B51] w-full h-20 text-white font-semibold text-xl flex items-center transition-all`}
    >
      <div className="pl-10">{tab}</div>
    </div>
  );
};

export default Navbar;
