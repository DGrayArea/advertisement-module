import React from "react";
import FilterSelect from "./FilterSelect";
import StatusSelect from "./StatusSelect";
import PromotionTable from "./PromotionTable";

const SearchNFilters = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center space-x-6 w-full py-4 text-left">
        <div className="font-medium text-lg text-[#494949] text-nowrap ml-3 text-left">
          Filter By:
        </div>
        <FilterSelect
          selectItems={["1 month"]}
          type={true}
          label="Length of time"
        />

        <StatusSelect
          selectItems={["select", "active", "pending", "stop"]}
          label="Page"
        />
      </div>

      <div className="px-3">
        <PromotionTable />
      </div>
    </div>
  );
};

export default SearchNFilters;
