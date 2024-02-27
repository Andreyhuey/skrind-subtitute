import React from "react";

interface ChildProps {
  percentage: number;
}

const ProgressCircle = ({ percentage }: ChildProps) => {
  return (
    <div>
      <div className="relative w-[70px] h-[70px]">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* <!-- Background circle --> */}
          <circle
            className="text-gray-200 stroke-current"
            strokeWidth="10"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          ></circle>
          {/* <!-- Progress circle --> */}
          <circle
            className="text-indigo-500  progress-ring__circle stroke-current"
            strokeWidth="10"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDashoffset="calc(400 - (400 * 45) / 100)"
          ></circle>

          {/* <!-- Center text --> */}
          <text
            x="50"
            y="50"
            fontFamily="Verdana"
            fontSize="12"
            textAnchor="middle"
            alignmentBaseline="middle"
            className="dark:text-white text-[ #1A202C]"
          >
            {percentage}%
          </text>
        </svg>
      </div>
    </div>
  );
};

export default ProgressCircle;
