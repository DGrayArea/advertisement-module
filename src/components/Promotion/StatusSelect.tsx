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
import { Status } from "@/types";

const StatusSelect = ({
  selectItems,
  label,
}: {
  selectItems: string[];
  label: string;
}) => {
  const { selectStatus } = useTab();

  return (
    <div className="flex flex-row items-center font-normal text-lg text-[#494949] space-x-4">
      <div>{label}</div>

      <Select
        onValueChange={(e: Status) => selectStatus(e)}
        defaultValue={selectItems[0]}
      >
        <SelectTrigger className="w-[180px] h-[40px]">
          <SelectValue placeholder={selectItems[0]} />
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

export default StatusSelect;
