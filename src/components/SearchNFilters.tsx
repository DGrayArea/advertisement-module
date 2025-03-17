import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import FilterSelect from "./Advertisement/FilterSelect";
import StatusSelect from "./Advertisement/StatusSelect";
import CampaignTable from "./User/CampaignTable";

const SearchNFilters = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-white px-6 py-2 h-[72px] flex items-center justify-between">
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
        <div className="flex flex-row items-center space-x-6">
          <div className="flex flex-row items-center space-x-6">
            <div className="font-medium text-lg text-[#494949] text-nowrap ml-3">
              Filter By:
            </div>
            <FilterSelect
              selectItems={["earliest maturity"]}
              type={true}
              label="Maturity"
            />
            <FilterSelect selectItems={["all"]} type={false} label="Type" />

            <StatusSelect
              selectItems={["all", "active", "pending", "stop"]}
              label="Status"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Label
              htmlFor="mobile-view"
              className="font-normal text-lg text-[#494949] text-nowrap"
            >
              Mobile View
            </Label>
            <Switch
              id="mobile-view"
              className="data-[state=checked]:bg-[#4D7C8A]"
            />
          </div>
        </div>
      </div>
      <CampaignTable />
    </div>
  );
};

export default SearchNFilters;
