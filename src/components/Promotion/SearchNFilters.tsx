import React from "react";
import FilterSelect from "./FilterSelect";
import StatusSelect from "./StatusSelect";
import PromotionTable from "./PromotionTable";

const SearchNFilters = () => {
  return (
    <div className="flex flex-col max-w-screen overflow-x-auto w-full md:w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 w-full py-2 md:py-4 text-left">
        <div className="font-medium text-base md:text-lg text-[#494949] text-nowrap ml-3 md:ml-0 text-left">
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
