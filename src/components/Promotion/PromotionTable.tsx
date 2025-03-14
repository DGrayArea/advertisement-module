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
import { Card, CardContent } from "@/components/ui/card";

function PromotionLink() {
  const promotions = [
    {
      id: 1,
      title: "Spring Sale",
      url: "/promotions/spring-sale",
    },
    {
      id: 2,
      title: "New Collection",
      url: "/promotions/new-collection",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-medium text-gray-800 pb-2 border-b border-gray-300 mb-8">
        Promotion link
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {promotions.map((promo) => (
          <Card
            className="overflow-hidden border-0 shadow-sm hover:shadow-md duration-300 transition-all"
            key={promo.id}
          >
            <CardContent className="p-0">
              <div className="bg-gray-100 aspect-video w-full flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                      transform="rotate(180 12 12)"
                    />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

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
