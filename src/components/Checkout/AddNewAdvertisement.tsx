import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeftIcon, BellIcon, CalendarDaysIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import Image from "next/image";

export default function AddNewAdvertisement() {
  const router = useRouter();

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="container mx-auto p-2 md:p-4 pb-16 max-w-full">
      <div className="flex items-center mb-6 border-b border-[#E8E8E8] pb-4">
        <div className="flex flex-row items-center">
          <ArrowLeftIcon
            className="w-8 md:w-16 cursor-pointer"
            onClick={() => router.back()}
          />
          <span className="font-semibold text-lg md:text-2xl">
            Add New Advertisement
          </span>
        </div>
      </div>

      <div className="max-w-full overflow-clip md:w-full flex flex-col px-2 md:px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="grid gap-4">
              <div className="font-normal text-sm md:text-base flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                <Label htmlFor="company-name" className="w-full md:w-[160px]">
                  Name of Company:
                </Label>
                <Input
                  id="company-name"
                  defaultValue="Company 123 New"
                  className="font-normal text-sm w-full md:w-[350px] h-[40px] border-[#E8E8E8] border"
                />
              </div>

              <div className="font-normal text-sm md:text-base flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                <Label htmlFor="contact-name" className="w-full md:w-[160px]">
                  Name of Contact:
                </Label>
                <Input
                  id="contact-name"
                  defaultValue="John Doe"
                  className="font-normal text-sm w-full md:w-[350px] h-[40px] border-[#E8E8E8] border"
                />
              </div>

              <div className="font-normal text-sm md:text-base flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                <Label htmlFor="contact-email" className="w-full md:w-[160px]">
                  Contact Email:
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  defaultValue="johndoe@gmail.com"
                  className="font-normal text-sm w-full md:w-[350px] h-[40px] border-[#E8E8E8] border"
                />
              </div>

              <div className="font-normal text-sm md:text-base flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                <Label htmlFor="phone-number" className="w-full md:w-[160px]">
                  Phone Number:
                </Label>
                <Input
                  id="phone-number"
                  defaultValue="+1234567890"
                  className="font-normal text-sm w-full md:w-[350px] h-[40px] border-[#E8E8E8] border"
                />
              </div>

              <div className="font-normal text-sm md:text-base flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                <Label htmlFor="other-contact" className="w-full md:w-[160px]">
                  Other Contact:
                </Label>
                <Input
                  id="other-contact"
                  defaultValue="John Doe"
                  className="font-normal text-sm w-full md:w-[350px] h-[40px] border-[#E8E8E8] border"
                />
              </div>

              <div className="font-normal text-sm md:text-base flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                <Label htmlFor="website" className="w-full md:w-[160px]">
                  Website:
                </Label>
                <Input
                  id="website"
                  defaultValue="https://company123new.com"
                  className="font-normal text-sm w-full md:w-[350px] h-[40px] border-[#E8E8E8] border"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 text-[#494949]">
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3">
                Advertisement MLO:
              </h3>
              <div className="space-y-4 flex flex-col items-start justify-start">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="flex flex-col md:flex-row items-start md:items-center justify-start space-y-2 md:space-y-0 md:space-x-6"
                  >
                    <span className="text-sm md:text-base font-normal border border-[#E8E8E8] p-2 rounded w-full md:w-[350px] h-[40px] whitespace-nowrap">
                      123 adname 02-03-2025 $200 6 months...
                    </span>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="text-sm md:text-base font-normal hover:bg-[#4D7C8A]/95 bg-[#4D7C8A] h-[40px] text-white cursor-pointer"
                    >
                      Details
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-base md:text-lg font-semibold mb-6">
            Add New Advertisement
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 font-normal text-sm md:text-lg">
            <div className="space-y-2 md:space-x-2 flex flex-col md:flex-row items-start md:items-center">
              <Label htmlFor="banner-location" className="w-full md:w-[160px]">
                Select Banner Location:
              </Label>
              <Select defaultValue="homepage">
                <SelectTrigger className="w-full md:w-[200px] h-[40px]">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="homepage">Homepage</SelectItem>
                  <SelectItem value="category">Category</SelectItem>
                  <SelectItem value="article">Article</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:space-x-2 flex flex-col md:flex-row items-start md:items-center">
              <Label htmlFor="banner-type" className="w-full md:w-[160px]">
                Select Type:
              </Label>
              <Select defaultValue="h2">
                <SelectTrigger className="w-full md:w-[200px] h-[40px]">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="h1">H1</SelectItem>
                  <SelectItem value="h2">H2</SelectItem>
                  <SelectItem value="h3">H3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:space-x-2 flex flex-col md:flex-row items-start md:items-center">
              <Label htmlFor="start-date" className="w-full md:w-[160px]">
                Start Date:
              </Label>
              <div className="relative">
                <div className="flex-1">
                  <Popover>
                    <PopoverTrigger asChild className="rounded-sm">
                      <Button
                        variant="outline"
                        className="justify-start text-left font-normal w-full md:w-[200px] h-[40px] rounded-sm"
                      >
                        {startDate ? (
                          format(startDate, "MM-dd-yyyy")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarDaysIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        //@ts-expect-error error
                        onSelect={setStartDate}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            <div className="space-y-2 md:space-x-2 flex flex-col md:flex-row items-start md:items-center">
              <Label htmlFor="length" className="w-full md:w-[160px]">
                Length:
              </Label>
              <Select defaultValue="6-months">
                <SelectTrigger className="w-full md:w-[200px] h-[40px]">
                  <SelectValue placeholder="Select length" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3-days">3 days</SelectItem>
                  <SelectItem value="1-month">1 month</SelectItem>
                  <SelectItem value="6-months">6 months</SelectItem>
                  <SelectItem value="1-year">1 year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:space-x-2 flex flex-col md:flex-row items-start md:items-center">
              <Label htmlFor="sales-value" className="w-full md:w-[160px]">
                Sales Value:
              </Label>
              <Input
                id="sales-value"
                defaultValue="$500"
                className="h-[40px] w-full md:w-[200px]"
              />
            </div>

            <div className="space-y-2 md:space-x-2 flex flex-col md:flex-row items-start md:items-center">
              <Label className="w-full md:w-[160px]">Discount Applied</Label>
              <div className="flex items-center space-y-2 md:space-x-2 border border-[#E8E8E8] p-2 rounded w-full md:w-[200px] h-[40px]">
                <span>1 - 20% discount</span>
              </div>
              <div className="ring-1 ring-[#EA4335] bg-[#EA4335] rounded-full p-1 cursor-pointer ml-1">
                <BellIcon className="w-[28px] h-fit text-white fill-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-base md:text-lg font-semibold mb-4">
            Choose Payment Type:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 rounded-md p-4 flex flex-col items-center justify-center border-[#494949] min-w-full md:min-w-[168px] min-h-[160px]">
              <div className="flex items-center justify-center space-y-2 md:space-x-2 mb-2">
                <RadioGroup defaultValue="one-time">
                  <div className="flex items-center space-y-2 md:space-x-2">
                    <RadioGroupItem value="one-time" id="one-time" checked />
                    <Label htmlFor="one-time" className="text-sm font-semibold">
                      1 Time Payment
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <span className="text-2xl md:text-4xl font-semibold">$1400</span>
            </div>

            <div className="border-2 rounded-md p-4 flex flex-col items-center justify-center border-[#E8E8E8] min-w-full md:min-w-[168px] min-h-[160px]">
              <div className="flex items-center justify-center space-y-2 md:space-x-2 mb-2">
                <RadioGroup defaultValue="one-time">
                  <div className="flex items-center space-y-2 md:space-x-2">
                    <RadioGroupItem value="one-time" id="one-time" checked />
                    <Label htmlFor="one-time" className="text-sm font-semibold">
                      Monthly
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <span className="text-2xl md:text-4xl font-semibold">$270</span>
            </div>
          </div>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-base md:text-lg font-medium mb-3">
              Upload Banner (Desktop)
            </h3>
            <p className="text-sm md:text-lg font-normal text-gray-500 mb-2">
              H2 size: 588×280
            </p>
            <div className="relative border border-[#E8E8E8] rounded overflow-hidden max-w-full md:max-w-fit">
              <Image
                src="/upload.png"
                alt="placeholder"
                className="w-full md:w-[299px] h-auto md:h-[213px]"
                width={300}
                height={213}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 w-[700px]">
            <div>
              <h3 className="text-base md:text-lg font-medium mb-3">
                Upload Banner (Tablet)
              </h3>
              <p className="text-sm md:text-lg font-normal text-gray-500 mb-2">
                H2 size: 400×250
              </p>
              <div className="relative border border-[#E8E8E8] rounded overflow-hidden max-w-[43%] md:max-w-fit">
                <Image
                  src="/upload.png"
                  alt="placeholder"
                  className="w-full md:w-[299px] h-auto md:h-[213px]"
                  width={300}
                  height={213}
                />
              </div>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-medium mb-3">
                Upload Banner (Mobile)
              </h3>
              <p className="text-sm md:text-lg font-normal text-gray-500 mb-2">
                H2 size: 350×175
              </p>
              <div className="relative border border-[#E8E8E8] rounded overflow-hidden max-w-[43%] md:max-w-fit">
                <Image
                  src="/upload.png"
                  alt="placeholder"
                  className="w-full md:w-[299px] h-auto md:h-[213px]"
                  width={300}
                  height={213}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Button className="bg-[#4D7C8A] hover:bg-slate-700 cursor-pointer rounded-sm w-full md:w-auto">
            Proceed to checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
