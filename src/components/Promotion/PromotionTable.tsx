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
import { Promotion } from "@/types";
import { promotions } from "@/config";

const PromotionTableRow: React.FC<{ promotion: Promotion }> = ({
  promotion,
}) => {
  return (
    <TableRow className="bg-white mb-2 text-base font-medium border border-[#E8E8E8]">
      <TableCell className="text-base font-medium w-[200px]">
        {promotion.name}
      </TableCell>
      <TableCell className="text-base font-medium w-[100px]">
        {promotion.promotion}
      </TableCell>
      <TableCell className="text-base font-medium w-[100px]">
        {promotion.type}
      </TableCell>
      <TableCell className="text-base font-medium w-[120px]">
        {promotion.impressions.toLocaleString()}
      </TableCell>
      <TableCell className="text-base font-medium w-[120px]">
        {promotion.clicks}
      </TableCell>
      <TableCell className="text-base font-medium w-[100px]">
        {promotion.shares}
      </TableCell>
      <TableCell className="text-base font-medium w-[100px]">
        {promotion.shares}
      </TableCell>
      <TableCell className="text-base font-medium w-[120px]">
        {promotion.conversions}
      </TableCell>
      <TableCell className="text-base font-medium w-[120px]">
        {promotion.length}
      </TableCell>
      <TableCell className="text-base font-medium w-[120px]">
        <TableCell className="text-base font-medium w-[160px] flex flex-col items-start space-y-4 cursor-pointer">
          <div className="underline text-base font-medium text-left">
            Promotion link
          </div>
          <div className="w-full flex flex-row items-center space-x-4">
            <div className="bg-[#F7F7F7] w-20 h-16 flex items-center justify-center rounded">
              <svg
                className="w-8 h-8 text-[#AAAAAA]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="bg-[#F7F7F7] w-16 h-16 flex items-center justify-center rounded">
              <svg
                className="w-8 h-8 text-[#AAAAAA]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </TableCell>
      </TableCell>
    </TableRow>
  );
};

const PromotionTable = () => {
  const filteredCampaigns = useMemo(() => {
    return promotions;
  }, []);

  return (
    <div className="w-full mt-2.5">
      <div className="overflow-x-auto">
        <Table className="border-separate border-spacing-y-4 table-fixed w-full">
          <TableHeader className="sticky top-0 z-10">
            <TableRow className="bg-[#4D7C8A] hover:bg-[#4D7C8A] text-white text-lg font-semibold">
              <TableHead className="text-white w-[200px]">
                Name of the Company
              </TableHead>
              <TableHead className="text-white w-[100px]">
                Name of the Promotion
              </TableHead>
              <TableHead className="text-white w-[100px]">
                Type of Promo
              </TableHead>
              <TableHead className="text-white w-[120px]">
                Impressions
              </TableHead>
              <TableHead className="text-white w-[120px]">Clicks</TableHead>
              <TableHead className="text-white w-[120px]">Shares</TableHead>
              <TableHead className="text-white w-[100px]">
                Conversions
              </TableHead>
              <TableHead className="text-white w-[100px]">Length</TableHead>
              <TableHead className="text-white w-[120px]">Details</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </div>

      <div className="max-h-[82vh] overflow-y-auto scrollbar-hide transition-all">
        <Table className="border-separate border-spacing-y-4 table-fixed w-full">
          <TableBody>
            {filteredCampaigns.map((promotion, index) => (
              <PromotionTableRow key={index} promotion={promotion} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PromotionTable;
