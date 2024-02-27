import TimeComponent from "./time-component";
import TestComponent from "./test-component";
import TestResultComponent from "./test-results/test-results-component";

const DashboardComponent = () => {
  return (
    <>
      <div className="px-4 md:px-10 lg:px-16 py-10 min-h-screen flex flex-col gap-4 w-full">
        <div>
          <p className="md:text-[48px] font-[700]">Admin Dashboard</p>
          <p>welcome to the admin dashboard</p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <TimeComponent />
          </div>
          <TestComponent />
          <TestResultComponent />
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
