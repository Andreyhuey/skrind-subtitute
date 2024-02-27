"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import moment from "moment";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Result = {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
  contactNumber: string;
  state: string;
  test: "hepatitis b" | "malaria" | "hepatitis c" | "hiv";
  treatedBy: string;
  status: "pending" | "confirmed";
  time: string;
};

export const columns: ColumnDef<Result>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "firstName",
    accessorFn: (row) => `${row.firstName} ${row.lastName} ${row.treatedBy}`,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0 bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-5 w-5" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <img
          src={row.original.avatar}
          alt="Avatar"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
        <div className="flex flex-col lg:flex-row gap-2">
          <p>{row.original.firstName}</p>
          <div>{row.original.lastName}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "contactNumber",
    header: "Contact Number",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "test",
    header: "Test",
  },
  {
    accessorKey: "treatedBy",
    header: "Treated By",
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-5 w-5" />
        </Button>
      );
    },
  },
  {
    accessorKey: "time",
    header: "Date/Time",
    cell: ({ row }) => (
      <div>{moment(row.original.time).format("Do MMM YYYY, h:mm A")}</div>
    ),
  },
];
