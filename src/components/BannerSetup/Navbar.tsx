import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { SaveChanges } from "./SaveChanges";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-row justify-between items-center min-h-[72px] mt-8 border-b-2 border-b-[#E8E8E8] pb-6">
      <div className="flex flex-row text-lg md:text-2xl font-semibold items-center whitespace-nowrap">
        <ArrowLeftIcon
          className="w-[36px] mr-1 md:mr-8 cursor-pointer rounded-lg"
          onClick={() => router.back()}
        />
        Banner Setup Page
      </div>
      <div>
        <SaveChanges />
      </div>
    </div>
  );
};

export default Navbar;
