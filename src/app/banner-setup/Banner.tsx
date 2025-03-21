import BannerSelect from "@/components/BannerSetup/BannerSelect";
import BannerTable from "@/components/BannerSetup/BannerTable";
import StatusSelect from "@/components/BannerSetup/StatusSelect";
import { useTab } from "@/hooks/use-tab";

const Banner = () => {
  const { page, banner } = useTab();

  return (
    <div className="flex flex-col w-full text-lg md:text-xl font-normal mt-7">
      <div className="flex flex-row flex-wrap w-full mb-7">
        <div className="flex flex-row items-center space-x-6 w-full md:w-auto overflow-auto whitespace-nowrap">
          <div className="font-semibold text-[#494949]">Filter By:</div>
          <StatusSelect
            selectItems={["Home Page", "Event Page"]}
            label="Page Category"
            defaultValue={page}
            type={true}
          />

          {page === "Home Page" ? (
            <BannerSelect
              defaultValue={banner}
              selectItems={[
                "All banner type",
                "H1",
                "H2",
                "H3",
                "H4",
                "H5",
                "H6",
                "H7",
              ]}
              label="Banner Type"
            />
          ) : (
            <BannerSelect
              defaultValue={banner}
              selectItems={["All banner type", "E1", "E2", "E3", "E4", "E5"]}
              label="Banner Type"
            />
          )}
        </div>
        <div className="flex flex-row items-center space-x-6 w-full md:w-auto mt-4 md:mt-0">
          <div className="font-semibold text-[#494949] text-nowrap">
            Pricing Rules:
          </div>
          <div>
            {page} - {banner}
          </div>
        </div>
      </div>
      <BannerTable />
    </div>
  );
};

export default Banner;
