import React from "react";
import { PromotionData } from "@/types";
import { Separator } from "@/components/ui/separator";
import { promotionsData } from "@/config";

export default function AdvertisingBannersPage() {
  const PromotionItem = ({ promotion }: { promotion: PromotionData }) => {
    return (
      <div className="py-4 w-full">
        <h3 className="text-lg md:text-xl font-semibold text-[#4D7C8A] mb-2">
          {promotion.title}
        </h3>

        <div className="flex flex-col md:flex-row items-start md:items-center mb-2">
          <div className="bg-[#1FB544] text-white px-4 py-1 rounded-md font-medium mb-2 md:mb-0 md:mr-4">
            {promotion.discount}
          </div>
          <span className="text-gray-600">
            {promotion.startDate} - {promotion.endDate}
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex flex-col md:flex-row">
            <span className="text-gray-700 font-semibold md:w-48">
              Type of Banners:
            </span>
            <div className="flex gap-2 flex-wrap">
              {promotion.bannerTypes.map((type, index) => (
                <React.Fragment key={type}>
                  <span className="text-[#4D7C8A] underline">{type}</span>
                  {index < promotion.bannerTypes.length - 1 && (
                    <span className="text-[#4D7C8A]">&</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <span className="text-gray-700 font-semibold md:w-48">
              Sections Applicable:
            </span>
            <div className="flex gap-6 flex-wrap">
              {promotion.sections.map((section) => (
                <span key={section} className="text-gray-600">
                  {section}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <span className="text-gray-700 font-semibold md:w-48">
              Minimum Length:
            </span>
            <span className="text-gray-600">{promotion.minimumLength}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto space-y-6 border-[#E8E8E8] border rounded-md md:min-w-[1200px]">
      <h1 className="text-[20px] md:text-[26px] font-semibold border-b border-[#E8E8E8] pb-2 py-8 md:py-16 px-5">
        Promotions
      </h1>

      <div className="flex flex-col md:flex-row justify-between p-4 border-r h-full border-[#E8E8E8]">
        <div className="space-y-6 md:w-[80%]">
          {promotionsData.map((promotion, index) => (
            <React.Fragment key={promotion.id}>
              <PromotionItem promotion={promotion} />
              {index < promotionsData.length - 1 && (
                <Separator className="my-2" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="space-y-6 flex justify-start items-center flex-col border-t md:border-t-0 md:border-l border-r border-[#E8E8E8] md:w-[280px] md:ml-10">
          <div className="bg-[#9BB8F2] p-4 h-[150px] md:h-[200px] w-[150px] md:w-[200px] flex items-center justify-center rounded-xs">
            <div className="bg-white w-16 md:w-20 h-12 md:h-16 flex items-center justify-center rounded p-2">
              <svg
                className="h-[60px] md:h-[100px] w-[60px] md:w-[100px] text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-[#9BB8F2]"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <div className="bg-[#9BB8F2] p-4 h-[150px] md:h-[200px] w-[150px] md:w-[200px] flex items-center justify-center rounded-xs">
            <div className="bg-white w-16 md:w-20 h-12 md:h-16 flex items-center justify-center rounded p-2">
              <svg
                className="h-[60px] md:h-[100px] w-[60px] md:w-[100px] text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-[#9BB8F2]"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#9BB8F2] p-6 md:p-10 h-36 md:h-48 flex items-center justify-center rounded-md">
        <div className="bg-white w-20 md:w-24 h-16 md:h-20 flex items-center justify-center rounded">
          <svg
            className="h-10 md:h-12 w-10 md:w-12 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="text-[#9BB8F2]"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
