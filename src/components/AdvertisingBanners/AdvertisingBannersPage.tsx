import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AdvertisingBannersPage() {
  const router = useRouter();
  return (
    <div className="container mx-auto space-y-6 border-[#E8E8E8] border rounded-md min-w-[1200px]">
      <h1 className="text-[26px] font-semibold border-b border-[#E8E8E8] pb-2 py-16 px-5">
        Advertising Banners
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 border-r h-full border-[#E8E8E8]">
        <div className="space-y-6">
          <BannerCategory
            title="Home Page Banners"
            types={["H1", "H2", "H3", "H4", "H5", "H7"]}
          />

          <BannerCategory
            title="Category Banners"
            types={["N1", "N2", "N3", "N4", "N5", "N6", "N7"]}
          />

          <BannerCategory
            title="Sub - Category Banners"
            types={["N1", "N2", "N3", "N4", "N5", "N6", "N7"]}
          />

          <BannerCategory
            title="Article Banners"
            types={["N1", "N2", "N3", "N4", "N5", "N6", "N7"]}
          />

          <BannerCategory
            title="Event Pages"
            types={["E1", "E2", "E3", "E4", "E5"]}
          />

          <BannerCategory
            title="Suppliers Landing Page"
            types={["S1", "S2", "S3", "S4"]}
          />

          <BannerCategory
            title="Mine Landing Page"
            types={["M1", "M2", "M3", "M4", "M5", "M6"]}
          />

          {/* <BannerCategory
            title="Exploration Landing Page"
            types={["E1", "E2", "E3", "E4"]}
          /> */}

          {/* <BannerCategory
            title="Product Landing Page"
            types={["P1", "P2", "P3", "P4", "P5", "P6", "P7"]}
          /> */}
        </div>

        <div className="space-y-6">
          <Card className="bg-[#F9F9F9] border-[#E8E8E8]">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Banner Specifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-base">
                <div className="font-semibold">Type:</div>
                <div className="font-bold">H2</div>

                <div className="font-semibold">Location:</div>
                <div className="font-bold">Home Page Banners</div>
              </div>

              {/* <Tabs defaultValue="desktop">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="desktop">Desktop View</TabsTrigger>
                  <TabsTrigger value="mobile">Mobile View</TabsTrigger>
                </TabsList>
                <TabsContent value="desktop" className="py-4">
                  <div className="bg-gray-100 flex items-center justify-center h-32">
                    <div className="bg-gray-300 w-16 h-12 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">688 × 300</span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="mobile" className="py-4">
                  <div className="bg-gray-100 flex items-center justify-center h-32">
                    <div className="bg-gray-300 w-12 h-8 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">360 × 200</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs> */}
              <Image
                src="/view.png"
                alt="view"
                width={500}
                height={300}
                className="aspect-ratio"
              />
              <div className="space-y-4 text-base">
                <h3 className="font-semibold w-full border-t border-t-[#E8E8E8] mt-6 pt-6 mb-6">
                  Select Advertising Period
                </h3>
                <RadioGroup
                  defaultValue="6-months"
                  className="text-sm font-normal"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3-days" id="3-days" />
                    <Label htmlFor="3-days">3 Days</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-month" id="1-month" />
                    <Label htmlFor="1-month">1 month</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2-months" id="2-months" />
                    <Label htmlFor="2-months">2 months</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3-months" id="3-months" />
                    <Label htmlFor="3-months">3 months</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="6-months"
                      id="6-months"
                      defaultChecked
                    />
                    <Label htmlFor="6-months">6 months</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-year" id="1-year" />
                    <Label htmlFor="1-year">1 year</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-base w-full border-t border-t-[#E8E8E8] mt-6 pt-6 pb-6">
                  Select Plan
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-2 border-[#E8E8E8]">
                    <CardContent className="p-4 text-center">
                      <RadioGroup defaultValue="one-time">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <RadioGroupItem
                            value="one-time"
                            id="one-time"
                            defaultChecked
                          />
                          <Label
                            htmlFor="one-time"
                            className="text-[#494949] text-sm font-medium"
                          >
                            1 Time Payment
                          </Label>
                        </div>
                      </RadioGroup>
                      <p className="text-[36px] font-semibold">$1400</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <RadioGroup defaultValue="monthly">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <RadioGroupItem value="monthly" id="monthly" />
                          <Label
                            htmlFor="monthly"
                            className="text-[#494949] text-sm font-medium"
                          >
                            Monthly
                          </Label>
                        </div>
                      </RadioGroup>
                      <p className="text-[36px] font-semibold">$270</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-[#4D7C8A] hover:bg-[#4D7C8A]/90 min-h-[40px] min-w-[210px] text-base font-normal cursor-pointer mt-[125px]"
                onClick={() => router.push("checkout")}
              >
                Proceed to check out
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 flex justify-start items-center flex-col border-l border-r border-[#E8E8E8] w-[280px] ml-10">
          <div className="bg-[#9BB8F2] p-4 h-[200px] w-[200px] flex items-center justify-center rounded-xs">
            <div className="bg-white w-20 h-16 flex items-center justify-center rounded p-2">
              <svg
                className="h-[100px] w-[100px] text-gray-300"
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

          <div className="bg-[#9BB8F2] p-4 h-[200px] w-[200px] flex items-center justify-center rounded-xs">
            <div className="bg-white w-20 h-16 flex items-center justify-center rounded p-2">
              <svg
                className="h-[100px] w-[100px] text-gray-300"
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

      <div className="bg-[#9BB8F2] p-10 h-48 flex items-center justify-center rounded-md">
        <div className="bg-white w-24 h-20 flex items-center justify-center rounded">
          <svg
            className="h-12 w-12 text-gray-300"
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

function BannerCategory({ title, types }) {
  return (
    <div className="border-b pb-4 border-[#E8E8E8]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-[#4D7C8A]">{title}</h2>
        <Button
          size="lg"
          className="bg-[#4D7C8A] hover:bg-[#4D7C8A]/90 min-h-[40px] min-w-[85px] text-base font-normal cursor-pointer"
        >
          View
        </Button>
      </div>
      <div>
        <span className="font-semibold text-base mr-2">Type:</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {types.map((type) => (
            <span
              key={type}
              className="px-2 py-1 text-base font-normal text-[#494949] rounded"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
