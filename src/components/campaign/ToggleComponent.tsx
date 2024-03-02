import React from "react";
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";

interface ToggleProps {
  isToggled: boolean;
}

const ToggleComponent: React.FC<ToggleProps> = ({ isToggled }) => {
  return (
    <div className="text-3xl ">
      {isToggled ? (
        <>
          <BsToggleOn className="text-[#90CDF4]" />
        </>
      ) : (
        <>
          <BsToggleOff className="text-[#CBD5E0]" />
        </>
      )}
    </div>
  );
};

export default ToggleComponent;
