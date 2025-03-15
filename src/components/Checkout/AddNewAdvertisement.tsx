import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AlertCircle } from "lucide-react";

export default function AddNewAdvertisement() {
  return (
    <div className="container mx-auto p-4 pb-16 max-w-5xl">
      {/* Header with back button */}
      <div className="flex items-center mb-6 border-b pb-4">
        <Button variant="ghost" size="sm" className="mr-2">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          Add New Advertisement
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Company Information */}
        <div className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="company-name">Name of Company:</Label>
              <Input id="company-name" defaultValue="Company 123 New" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-name">Name of Contact:</Label>
              <Input id="contact-name" defaultValue="John Doe" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email">Contact Email:</Label>
              <Input
                id="contact-email"
                type="email"
                defaultValue="johndoe@gmail.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone-number">Phone Number:</Label>
              <Input id="phone-number" defaultValue="+1234567890" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="other-contact">Other Contact:</Label>
              <Input id="other-contact" defaultValue="John Doe" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website:</Label>
              <Input id="website" defaultValue="https://company123new.com" />
            </div>
          </div>
        </div>

        {/* Right Column - Advertisement MLO */}
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-medium mb-3">Advertisement MLO:</h3>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between bg-gray-50 p-2 rounded"
                >
                  <span className="text-sm">
                    123 adname 02-03-2025 $200 6 months...
                  </span>
                  <Button variant="secondary" size="sm">
                    Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advertisement Settings */}
      <div className="mt-8">
        <h2 className="text-lg font-medium mb-6">Add New Advertisement</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          <div className="space-y-2">
            <Label htmlFor="banner-location">Select Banner Location:</Label>
            <Select defaultValue="homepage">
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="homepage">Homepage</SelectItem>
                <SelectItem value="category">Category</SelectItem>
                <SelectItem value="article">Article</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="banner-type">Select Type:</Label>
            <Select defaultValue="h2">
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="h1">H1</SelectItem>
                <SelectItem value="h2">H2</SelectItem>
                <SelectItem value="h3">H3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="start-date">Start Date:</Label>
            <div className="relative">
              <Input id="start-date" type="text" defaultValue="02-03-2025" />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="length">Length:</Label>
            <Select defaultValue="6-months">
              <SelectTrigger>
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

          <div className="space-y-2">
            <Label htmlFor="sales-value">Sales Value:</Label>
            <Input id="sales-value" defaultValue="$500" />
          </div>

          <div className="space-y-2">
            <Label>Discount Applied</Label>
            <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded">
              <span>1 - 20% discount</span>
              <AlertCircle className="h-5 w-5 text-red-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Type Selection */}
      <div className="mt-8">
        <h3 className="text-base font-medium mb-4">Choose Payment Type:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
          <div className="border rounded-md p-4 flex flex-col items-center justify-center border-black">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <RadioGroup defaultValue="one-time">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="one-time" id="one-time" checked />
                  <Label htmlFor="one-time">1 Time Payment</Label>
                </div>
              </RadioGroup>
            </div>
            <span className="text-2xl font-bold">$1400</span>
          </div>

          <div className="border rounded-md p-4 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <RadioGroup defaultValue="monthly">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly">Monthly</Label>
                </div>
              </RadioGroup>
            </div>
            <span className="text-2xl font-bold">$270</span>
          </div>
        </div>
      </div>

      {/* Banner Upload Sections */}
      <div className="mt-8 space-y-6">
        <div>
          <h3 className="text-base font-medium mb-3">
            Upload Banner (Desktop)
          </h3>
          <p className="text-sm text-gray-500 mb-2">H2 size: 588×280</p>
          <div className="relative border border-gray-300 rounded overflow-hidden max-w-xl">
            <img
              src="/api/placeholder/588/280"
              alt="placeholder"
              className="w-full"
            />
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <Button variant="secondary" size="sm">
                done cropping
              </Button>
              <Button variant="secondary" size="sm">
                replace image
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-base font-medium mb-3">
              Upload Banner (Tablet)
            </h3>
            <p className="text-sm text-gray-500 mb-2">H2 size: 400×250</p>
            <div className="relative border border-gray-300 rounded overflow-hidden">
              <img
                src="/api/placeholder/400/250"
                alt="placeholder"
                className="w-full"
              />
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button variant="secondary" size="sm">
                  done cropping
                </Button>
                <Button variant="secondary" size="sm">
                  replace image
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium mb-3">
              Upload Banner (Mobile)
            </h3>
            <p className="text-sm text-gray-500 mb-2">H2 size: 350×175</p>
            <div className="relative border border-gray-300 rounded overflow-hidden">
              <img
                src="/api/placeholder/350/175"
                alt="placeholder"
                className="w-full"
              />
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button variant="secondary" size="sm">
                  done cropping
                </Button>
                <Button variant="secondary" size="sm">
                  replace image
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proceed Button */}
      <div className="mt-8">
        <Button className="bg-teal-700 hover:bg-teal-800">
          Proceed to check out
        </Button>
      </div>
    </div>
  );
}
