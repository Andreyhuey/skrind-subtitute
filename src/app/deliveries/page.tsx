import DeliveriesComponent from "@/components/deliveries/deliveries-component";

export default function DeliveriesPage() {
  return (
    <>
      <div className="px-4 md:px-10 lg:px-16 py-10 min-h-screen flex flex-col gap-4 w-full">
        <div className="flex flex-col w-full text-[#1A202C] dark:text-[#FFFFFFEB]">
          <DeliveriesComponent />
        </div>
      </div>
    </>
  );
}
