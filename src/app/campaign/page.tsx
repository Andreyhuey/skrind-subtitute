import CampaignComponent from "@/components/campaign/campaign-component";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function CampaignPage() {
  return (
    <>
      <div className="px-4 md:px-10 lg:px-16 py-10 min-h-screen flex flex-col gap-4 w-full">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
          <div>
            <p className="md:text-[48px] text-[38px] font-[700]">
              Campaign Management
            </p>
            <p>Create different campaigns and notifications </p>
          </div>
          <Button
            variant="default"
            className="flex items-center gap-1 bg-[#3072B4]"
          >
            <Plus />
            Add new Campaign
          </Button>
        </div>
        <div className="flex flex-col w-full text-[#1A202C] dark:text-[#FFFFFFEB]">
          <CampaignComponent />
        </div>
      </div>
    </>
  );
}
