"use client";

import React, { useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { data, durations } from "@/config";
import { useTab } from "@/hooks/use-tab";

const BannerTable = () => {
  const { page, banner } = useTab();

  const filteredData = useMemo(() => {
    if (page === "Home Page") {
      if (banner === "All banner type") {
        return data.filter((item) => item.headerType.startsWith("H"));
      } else if (banner.match(/^H[1-7]$/)) {
        return data.filter((item) => item.headerType === banner);
      }
    } else if (page === "Event Page") {
      if (banner === "All banner type") {
        return data.filter((item) => item.headerType.startsWith("E"));
      } else if (banner.match(/^E[1-5]$/)) {
        return data.filter((item) => item.headerType === banner);
      }
    }
  }, [banner, page]);

  return (
    <div className="max-h-[85vh] overflow-auto scrollbar-hide transition-all mobile:overflow-x-scroll md:overflow-visible">
      <Table className="w-full border-separate border-spacing-y-4 border-spacing-x-0 mobile:table-fixed md:table-auto">
        <TableHeader>
          <TableRow className="bg-[#4D7C8A] hover:bg-[#4D7C8A]">
            <TableHead className="text-white font-semibold w-56">
              Banner Details
            </TableHead>
            <TableHead className="text-white font-semibold" colSpan={8}>
              Length
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="w-full">
          {filteredData?.map((section, sectionIndex) => (
            <React.Fragment key={`section-${sectionIndex}`}>
              <TableRow className="cursor-pointer">
                <TableCell className="font-medium p-2">
                  {section.headerType}
                </TableCell>
                {durations.map((duration, index) => (
                  <TableCell key={index} className="p-2 text-left">
                    {duration}
                  </TableCell>
                ))}
              </TableRow>
              {section.rows.map((row, rowIndex) => (
                <TableRow
                  key={`${sectionIndex}-${rowIndex}`}
                  className="cursor-pointer"
                >
                  <TableCell className="font-medium p-2">{row.label}</TableCell>
                  {row.values.map((value, colIndex) => (
                    <TableCell
                      key={colIndex}
                      className="items-center mobile:min-w-[100px] mobile:min-h-[40px] md:min-w-[120px] md:min-h-[40px]"
                    >
                      <div className="bg-[#F3F3F3] p-2 text-left rounded-sm border-2 border-[#E8E8E8] mobile:min-w-[100px] mobile:min-h-[40px] md:min-w-[120px] md:min-h-[40px]">
                        {value}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
              <TableRow className="cursor-pointer">
                <TableCell className="font-medium p-2 cursor-pointer border-b-2 border-b-[#E8E8E8]"></TableCell>
                <TableCell className="font-medium p-2 cursor-pointer border-b-2 border-b-[#E8E8E8]"></TableCell>
                <TableCell className="font-medium p-2 cursor-pointer border-b-2 border-b-[#E8E8E8]"></TableCell>
                <TableCell className="font-medium p-2 cursor-pointer border-b-2 border-b-[#E8E8E8]"></TableCell>
                <TableCell className="font-medium p-2 cursor-pointer border-b-2 border-b-[#E8E8E8]"></TableCell>
                <TableCell className="font-medium p-2 cursor-pointer border-b-2 border-b-[#E8E8E8]"></TableCell>
                <TableCell className="font-medium p-2 cursor-pointer border-b-2 border-b-[#E8E8E8]"></TableCell>
                <TableCell className="font-medium p-2 cursor-pointer border-b-2 border-b-[#E8E8E8]"></TableCell>
                <TableCell className="font-medium p-2 cursor-pointer border-b-2 border-b-[#E8E8E8]"></TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BannerTable;
