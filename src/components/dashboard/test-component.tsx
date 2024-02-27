import React from "react";
import { tests } from "../../assets/data";
import Image from "next/image";
import ProgressCircle from "./progress-circle";

const TestComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {tests.map((test, index) => (
        <div
          key={index}
          className="border-[1px] border-[#CBD5E0] rounded-xl p-4 flex flex-col gap-3"
        >
          <Image
            src={test.img}
            alt={`image of test`}
            className="dark:text-[#ffffff]"
          />
          <p className="font-medium">{test.label}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-[24px]">{test.number}</p>
              <p className="text-[#718096]">{test.waiting} awaiting result</p>
            </div>
            <ProgressCircle percentage={test.percentage} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestComponent;
