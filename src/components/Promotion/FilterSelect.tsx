"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterSelect = ({
  selectItems,
  type,
  label,
}: {
  selectItems: string[];
  type: boolean;
  label: string;
}) => {
  return (
    <div className="flex flex-row items-center font-normal text-base md:text-lg text-[#494949] space-x-4">
      <div>{label}</div>

      {type ? (
        <Select defaultValue={selectItems[0]}>
          <SelectTrigger className="w-[220px] h-[40px] text-lg">
            <SelectValue
              className=" text-basemd:text-lg"
              placeholder={selectItems[0]}
            />
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
          onValueChange={(e) => console.log(e)}
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
      )}
    </div>
  );
};

export default FilterSelect;
