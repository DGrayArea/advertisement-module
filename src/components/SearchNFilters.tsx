import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchNFilters = () => {
  return (
    <div className="bg-white px-4 py-2 h-[72px] flex items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-row items-center"
      >
        <input className="w-60 h-[40px] rounded-l-sm outline-none border border-[#E8E8E8] px-1.5" />
        <button
          className={`bg-[#4D7C8A] rounded-r-sm w-[90px] h-[40px] text-white active:bg-[#446e7a] transition-all`}
        >
          search
        </button>
      </form>
      <div>
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="mobile-view" />
          <Label htmlFor="mobile-view">Mobile View</Label>
        </div>
      </div>
    </div>
  );
};

export default SearchNFilters;
