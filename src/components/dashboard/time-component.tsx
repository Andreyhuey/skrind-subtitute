"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { RiArrowDropDownLine } from "react-icons/ri";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const TimeComponent = () => {
  const timeData = [
    {
      name: "Last 24 Hours",
      value: "Last 24 Hours",
    },
    { name: "Last 7 Days", value: "Last 7 Days" },
    { name: "Last Month", value: "Last Month" },
  ];

  const [showLast24Hours, setShowLast24Hours] = React.useState<Checked>(true);
  const [showLast7Days, setShowLast7Days] = React.useState<Checked>(false);
  const [showLastMonth, setShowLastMonth] = React.useState<Checked>(false);

  return (
    <>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              Last 24 hours
              <RiArrowDropDownLine className="text-[30px]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Time</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showLast24Hours}
              onCheckedChange={setShowLast24Hours}
            >
              Last 24 hours
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showLast7Days}
              onCheckedChange={setShowLast7Days}
            >
              Last 7 Days
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showLastMonth}
              onCheckedChange={setShowLastMonth}
            >
              Last Month
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* <>
        <Select value={``}>
          <SelectTrigger>
            <SelectValue placeholder={timeData[0].value} />
          </SelectTrigger>
          <SelectContent>
            {["Last 24 Hours", "Last 7 Days", "Last Month"].map((timeData) => (
              <SelectItem key={timeData} value={`${timeData}`}>
                {timeData}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </> */}
    </>
  );
};

export default TimeComponent;
