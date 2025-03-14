import {
  ArrowLeftIcon,
  ChartColumnBigIcon,
  ChevronDownIcon,
  ClockArrowUp,
  CodeXml,
  CogIcon,
  Redo2Icon,
  Settings,
  Undo2Icon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { SaveChanges } from "./SaveChanges";
import { Button } from "../ui/button";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-row items-center h-[52px] bg-[#324B51] font-medium text-sm justify-between">
      <div className="flex flex-row items-center text-white space-x-8">
        <div className="ml-16">MigningLifeOnline</div>
        <Button
          className="min-w-[125px] h-[25px] py-0 rounded-sm bg-white text-black cursor-pointer hover:bg-neutral-100"
          onClick={() => router.push("/")}
        >
          Back to Dashboard
        </Button>
        <div className="min-h-[52px] min-w-[190px] flex justify-center items-center flex-row space-x-4 border-r-2 border-l-2 border-[#E8E8E8]">
          The Homepage <ChevronDownIcon className="w-[16px] text-white ml-2" />
          <Settings className="w-[16px] text-white" />
        </div>
        <div className="min-h-[52px] min-w-[112px] flex justify-between items-center flex-row space-x-4 border-r-2 border-[#E8E8E8] -ml-3 pr-3">
          <Undo2Icon className="w-[16px] text-white" />
          <ClockArrowUp className="w-[16px] text-white" />
          <Redo2Icon className="w-[16px] text-white" />
        </div>
      </div>
      <div className="flex flex-row items-center text-white">
        <div className="min-h-[52px] min-w-[142px] flex justify-center items-center flex-row space-x-4  border-l-2 border-[#E8E8E8]">
          <CodeXml className="w-[16px] text-white ml-2" />
          <ChartColumnBigIcon className="w-[16px] text-white mr-1" />
          Preview
        </div>
        <div className="min-h-[52px] min-w-[74px] flex justify-center items-center flex-row space-x-4 border-r-2 border-l-2 border-[#E8E8E8]">
          Publish
        </div>
        <div className="min-h-[52px] min-w-[48px] flex justify-center items-center flex-row space-x-4  border-[#E8E8E8]">
          <ChevronDownIcon className="w-[30px] text-white ml-2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
