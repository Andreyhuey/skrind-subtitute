import KitCodesComponent from "@/components/kit-codes/kit-component";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function KitCodesPage() {
  return (
    <>
      <div className="px-4 md:px-10 lg:px-16 py-10 min-h-screen flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
          <div>
            <p className="md:text-[48px] font-[700]">Kit Codes</p>
            <p>list of all the Kits code generated</p>
          </div>
          <Button
            variant="default"
            className="flex items-center gap-1 bg-[#3072B4]"
          >
            <Plus />
            Create Kit Code
          </Button>
        </div>
        <div className="flex flex-col w-full text-[#1A202C] dark:text-[#FFFFFFEB]">
          <KitCodesComponent />
        </div>
      </div>
    </>
  );
}
