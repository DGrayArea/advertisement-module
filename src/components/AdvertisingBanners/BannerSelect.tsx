"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTab } from "@/hooks/use-tab";
import { BannerType } from "@/types";

const BannerSelect = ({
  selectItems,
  label,
  defaultValue,
}: {
  selectItems: string[];
  label: string;
  defaultValue: string;
}) => {
  const { selectBanner } = useTab();

  return (
    <div className="flex flex-row items-center font-normal text-xl text-[#494949] space-x-4">
      <div>{label}:</div>
      <Select
        onValueChange={(e: BannerType) => {
          if (e) {
            selectBanner(e);
          }
        }}
        defaultValue={defaultValue}
        value={defaultValue}
      >
        <SelectTrigger className="w-[fit] h-[40px] text-lg">
          <SelectValue placeholder={defaultValue} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {selectItems.map((item, index) => (
              <SelectItem value={item} key={index}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default BannerSelect;
