"use client";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setiIsOpen] = useState(false);

  const toogleSidebar = () => {
    setiIsOpen(!isOpen);
  };

  return (
    <div
      className={`min-h-screen ${isOpen ? "w-72" : "w-16"} bg-[#456770] transition-all delay-75 ease-in-out`}
    >
      {isOpen ? (
        <>
          <div className="flex flex-row items-center pt-4 justify-between px-4 h-[82px] border-b-2 border-b-white py-3">
            <div className="text-white font-medium text-xl">
              MiningLifeOnline
            </div>
            <div
              className="flex items-center justify-center rounded-lg cursor-pointer hover:bg-neutral-300/20 p-1"
              onClick={toogleSidebar}
            >
              <MenuIcon className="text-white" size={40} />
            </div>
          </div>
          <div className="flex flex-col justify-between items-start px-4 h-[114px] mt-8">
            <div className={`text-white font-semibold text-lg cursor-pointer`}>
              Promotions Dashboard
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center space-y-7 pt-5">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={48} height={1080} />
          </Link>
          <div
            className="flex items-center justify-center rounded-lg cursor-pointer hover:bg-neutral-300/20 p-1"
            onClick={toogleSidebar}
          >
            <MenuIcon className="text-white" size={40} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
