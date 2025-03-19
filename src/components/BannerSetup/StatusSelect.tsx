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
import { PageType } from "@/types";

const StatusSelect = ({
  selectItems,
  label,
  type,
  defaultValue,
}: {
  selectItems: string[];
  label: string;
  type: boolean;
  defaultValue: string;
}) => {
  const { selectPage, selectBanner } = useTab();

  return (
    <div className="flex flex-row items-center font-normal text-base md:text-lg text-[#494949] space-x-2 whitespace-nowrap">
      <div className="w-full sm:w-auto whitespace-nowrap text-nowrap">
        {label}:
      </div>
      {type ? (
        <Select
          onValueChange={(e: PageType) => {
            if (e) {
              selectPage(e);
              selectBanner("All banner type");
            }
          }}
          defaultValue={defaultValue}
          value={defaultValue}
        >
          <SelectTrigger className="w-full sm:w-[fit] h-[40px] text-base sm:text-lg">
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
      ) : (
        <Select
          onValueChange={(e: PageType) => {
            if (e) {
              selectPage(e);
            }
          }}
          defaultValue={defaultValue}
          value={defaultValue}
        >
          <SelectTrigger className="w-full sm:w-[fit] h-[40px] text-base sm:text-lg">
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
      )}
    </div>
  );
};

export default StatusSelect;
