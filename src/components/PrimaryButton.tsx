"use client";

import clsx from "clsx";
import { PrimaryButtonProps } from "@/types";
import { Button } from "./ui/button";

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  width = "156px",
  height = "48px",
  className = "",
}) => {
  return (
    <Button
      className={clsx(
        "bg-[#4D7C8A] min-h-[48px] min-w-[156px] px-4 py-2 text-white rounded-sm hover:bg-[#3a606d] transition text-lg font-normal cursor-pointer",
        className
      )}
      style={{ width, height }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
