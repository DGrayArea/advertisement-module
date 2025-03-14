"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function PromotionManager() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 14))
  );
  const [promotionType, setPromotionType] = useState("discount");
  const [discountValue, setDiscountValue] = useState("25");
  const [promotionName, setPromotionName] = useState("March Madness");
  const [promotionId, setPromotionId] = useState("123-CABC");
  const [promotions, setPromotions] = useState([
    {
      name: "March Madness",
      type: "discount",
      value: "20",
      startDate: new Date(2025, 2, 2),
      endDate: new Date(2025, 2, 3),
      banner: "/banner1.jpg",
      company: "Company A",
    },
    {
      name: "Fall Promotion",
      type: "discount",
      value: "20",
      startDate: new Date(2025, 2, 2),
      endDate: new Date(2025, 2, 3),
      banner: "/banner2.jpg",
      company: "Company B",
    },
  ]);

  const handleAddPromotion = () => {
    const newPromotion = {
      name: promotionName,
      type: promotionType,
      value: discountValue,
      startDate: startDate,
      endDate: endDate,
      banner: "/banner1.jpg",
      company: "Company A",
    };
    setPromotions([...promotions, newPromotion]);
  };

  return (
    <div className="space-y-8 mt-4 w-full">
      <div className="font-normal text-xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="space-y-4 font-normal text-xl text-nowrap">
            <div className="flex flex-row items-center space-x-3">
              <Label htmlFor="promotionName" className="min-w-[200px]">
                Name the Promotion:
              </Label>
              <Input
                id="promotionName"
                value={promotionName}
                onChange={(e) => setPromotionName(e.target.value)}
                className="w-[320px] h-[40px] rounded-sm"
              />
            </div>

            <div className="flex flex-row items-center space-x-3">
              <Label htmlFor="promotionId" className="min-w-[200px]">
                ID:
              </Label>
              <Input
                id="promotionId"
                value={promotionId}
                onChange={(e) => setPromotionId(e.target.value)}
                className="w-[320px] h-[40px] rounded-sm"
              />
            </div>

            <div className="flex flex-row items-center space-x-3">
              <Label className="min-w-[200px]">Date:</Label>
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {format(startDate, "MM-dd-yyyy")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                        className="w-[200px] h-[40px] rounded-sm"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <span className="text-center">--</span>

                <div className="flex-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {format(endDate, "MM-dd-yyyy")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        initialFocus
                        className="w-[200px] h-[40px] rounded-sm"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            <Button
              onClick={handleAddPromotion}
              className="bg-[#4D7C8A] hover:bg-slate-700"
            >
              Add Promotion
            </Button>
          </div>

          <div className="space-y-4 flex flex-row items-center w-full">
            <div className="text-lg font-normal">
              <Label className="text-xl font-normal">Type of Promotion</Label>
              <RadioGroup
                value={promotionType}
                onValueChange={setPromotionType}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="discount" id="discount" />
                  <Label htmlFor="discount">1. % Discount</Label>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <RadioGroupItem value="flat" id="flat" />
                  <Label htmlFor="flat">2. Flat Rate</Label>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <RadioGroupItem value="contingent" id="contingent" />
                  <Label htmlFor="contingent">3. Contingent</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Input
                value={discountValue}
                onChange={(e) => setDiscountValue(e.target.value)}
                className="w-32 ml-auto"
              />
              <span>%</span>
            </div>
            <div>
              <Label>Choose Type</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between mt-2"
                  >
                    select
                    <span>▼</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem>Home Page</DropdownMenuItem>
                  <DropdownMenuItem className="pl-8">• H1</DropdownMenuItem>
                  <DropdownMenuItem className="pl-8">• H2</DropdownMenuItem>
                  <DropdownMenuItem className="pl-8">• H3</DropdownMenuItem>
                  <DropdownMenuItem className="pl-8">• H4</DropdownMenuItem>
                  <DropdownMenuItem className="pl-8">• H5</DropdownMenuItem>
                  <DropdownMenuItem className="pl-8">• H7</DropdownMenuItem>
                  <DropdownMenuItem>Sub - Category Page</DropdownMenuItem>
                  <DropdownMenuItem>Event Page</DropdownMenuItem>
                  <DropdownMenuItem>Article Page</DropdownMenuItem>
                  <DropdownMenuItem>Mine Page</DropdownMenuItem>
                  <DropdownMenuItem>Exploration Page</DropdownMenuItem>
                  <DropdownMenuItem>Page</DropdownMenuItem>
                  <DropdownMenuItem>Types: 1, 2, 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#4D7C8A] text-white">
                <th className="p-3 text-left">Listing of all Promotions</th>
                <th className="p-3 text-left">Promo Banner</th>
                <th className="p-3 text-left">Type of Promotion</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {promotions.slice(0, 2).map((promo, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="p-3">{promo.name}</td>
                  <td className="p-3">
                    <div className="relative w-32 h-24 bg-gray-100 flex items-center justify-center">
                      <div className="absolute top-0 left-0 bg-[#4D7C8A] text-white text-xs p-1 w-full">
                        Advertisement
                      </div>
                      <div className="absolute bottom-0 left-0 bg-[#4D7C8A] text-white text-xs p-1 w-full">
                        Image
                      </div>
                    </div>
                  </td>
                  <td className="p-3">1. 20% Discount</td>
                  <td className="p-3">02-03-2025 to 03-03-2025</td>
                  <td className="p-3">
                    {index === 0 ? (
                      <Button
                        variant="outline"
                        className="bg-[#4D7C8A] text-white hover:bg-slate-700"
                      >
                        Content Page
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="bg-[#4D7C8A] text-white hover:bg-slate-700"
                      >
                        Content Page
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#4D7C8A] text-white">
                <th className="p-3 text-left">Company Name</th>
                <th className="p-3 text-left">Advertisement Image</th>
                <th className="p-3 text-left">Type of Promotion</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Analytics</th>
              </tr>
            </thead>
            <tbody>
              {promotions.map((promo, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="p-3">
                    {index === 0 ? "Company A" : "Company B"}
                  </td>
                  <td className="p-3">
                    <div className="relative w-32 h-24 bg-gray-100 flex items-center justify-center">
                      <div className="absolute top-0 left-0 bg-[#4D7C8A] text-white text-xs p-1 w-full">
                        Advertisement
                      </div>
                      <div className="absolute bottom-0 left-0 bg-[#4D7C8A] text-white text-xs p-1 w-full">
                        Image
                      </div>
                    </div>
                  </td>
                  <td className="p-3">1. 20% Discount</td>
                  <td className="p-3">02-03-2025 to 03-03-2025</td>
                  <td className="p-3">
                    <Button className="bg-[#4D7C8A] hover:bg-slate-700">
                      Promo Analytics
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
