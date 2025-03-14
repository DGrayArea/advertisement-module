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
import { Badge } from "@/components/ui/badge";
import { Campaign } from "@/types";
import { campaigns } from "@/config";
import { useTab } from "@/hooks/use-tab";

const CampaignTableRow: React.FC<{ campaign: Campaign }> = ({ campaign }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500 hover:bg-green-600";
      case "pending":
        return "bg-amber-500 hover:bg-amber-600";
      case "stop":
        return "bg-red-500 hover:bg-red-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <TableRow className="bg-white mb-2 text-base font-medium">
      <TableCell className="text-base font-medium w-[200px]">
        {campaign.name}
      </TableCell>
      <TableCell className="text-base font-medium w-[100px]">
        {campaign.id}
      </TableCell>
      <TableCell className="text-base font-medium w-[100px]">
        {campaign.type}
      </TableCell>
      <TableCell className="text-base font-medium w-[120px]">
        <div className="bg-gray-200 w-16 h-16 flex items-center justify-center rounded">
          <svg
            className="w-8 h-8 text-gray-400"
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
      </TableCell>
      <TableCell className="text-base font-medium w-[120px]">
        {campaign.maturity}
      </TableCell>
      <TableCell className="text-base font-medium w-[120px]">
        {campaign.impressions.toLocaleString()}
      </TableCell>
      <TableCell className="text-base font-medium w-[100px]">
        {campaign.clicks}
      </TableCell>
      <TableCell className="text-base font-medium w-[100px]">
        {campaign.length}
      </TableCell>
      <TableCell className="text-base font-medium w-[120px]">
        {campaign.saleValue}
      </TableCell>
      <TableCell className="text-base font-medium w-[120px]">
        {campaign.discount}
      </TableCell>
      <TableCell className="text-base font-medium w-[120px]">
        {campaign.history}
      </TableCell>
      <TableCell className="text-base font-medium w-[120px]">
        <Badge
          className={`${getStatusColor(campaign.status)} text-white capitalize rounded-3xl w-[90px] h-[38px] text-base font-medium`}
        >
          {campaign.status}
        </Badge>
      </TableCell>
    </TableRow>
  );
};

const CampaignTable = () => {
  const { status } = useTab();
  const filteredCampaigns = useMemo(() => {
    if (status === "all") return campaigns;
    return campaigns.filter((campaign) => campaign.status === status);
  }, [status]);

  return (
    <div className="w-full mt-2.5">
      <div className="overflow-x-auto">
        <Table className="border-separate border-spacing-y-4 table-fixed w-full">
          <TableHeader className="sticky top-0 z-10">
            <TableRow className="bg-[#4D7C8A] hover:bg-[#4D7C8A] text-white text-lg font-semibold">
              <TableHead className="text-white w-[200px]">Name</TableHead>
              <TableHead className="text-white w-[100px]">ID</TableHead>
              <TableHead className="text-white w-[100px]">Type</TableHead>
              <TableHead className="text-white w-[120px]">Image</TableHead>
              <TableHead className="text-white w-[120px]">Maturity</TableHead>
              <TableHead className="text-white w-[120px]">
                Impressions
              </TableHead>
              <TableHead className="text-white w-[100px]">Clicks</TableHead>
              <TableHead className="text-white w-[100px]">Length</TableHead>
              <TableHead className="text-white w-[120px]">Sale Value</TableHead>
              <TableHead className="text-white w-[120px]">Discount</TableHead>
              <TableHead className="text-white w-[120px]">History</TableHead>
              <TableHead className="text-white w-[120px]">Status</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </div>

      <div className="max-h-[82vh] overflow-y-auto scrollbar-hide transition-all">
        <Table className="border-separate border-spacing-y-4 table-fixed w-full">
          <TableBody>
            {filteredCampaigns.map((campaign, index) => (
              <CampaignTableRow key={index} campaign={campaign} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CampaignTable;
