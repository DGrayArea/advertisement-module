"use client";

import Users from "@/components/User/Users";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center max-w-screen overflow-auto md:w-full h-full transition">
      <Users />
    </div>
  );
}
