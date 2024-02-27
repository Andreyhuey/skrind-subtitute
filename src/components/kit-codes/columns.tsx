"use client";

import { ColumnDef } from "@tanstack/react-table";
import { FolderClosed, ArrowUpDown } from "lucide-react";
import moment from "moment";
import { Button } from "@/components/ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type KitCodes = {
  id: number;
  testType: "hepatitis b" | "malaria" | "hepatitis c" | "Hiv/Aids";
  code: string;
  dateCreated: string;
  usedBy: string;
  status: "used" | "active";
};

export const columns: ColumnDef<KitCodes>[] = [
  {
    accessorKey: "testType",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0 bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Test Type
          <ArrowUpDown className="ml-2 h-5 w-5" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center gap-2 text-[#3072B4]">
        <FolderClosed />
        <p className="capitalize">{row.original.testType}</p>
      </div>
    ),
  },
  {
    accessorKey: "code",
    accessorFn: (row) => `${row.code} ${row.usedBy}`,
    header: "Code",
    cell: ({ row }) => <p className="uppercase">{row.original.code}</p>,
  },
  {
    accessorKey: "time",
    header: "Date Created",
    cell: ({ row }) => (
      <div>{moment(row.original.dateCreated).format("Do MMM YYYY")}</div>
    ),
  },
  {
    header: "Used by",
    accessorKey: "usedBy",
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
    cell: ({ row }) => (
      <div>
        {row.original.status && (
          <div
            className={` ${
              row.original.status == "used" ? "bg-[#FF00001A] " : "bg-[#F0FFF4]"
            }
          flex items-center justify-center gap-2 rounded-xl p-2 w-fit`}
          >
            <span
              className={`${
                row.original.status == "used" ? "bg-[#DF0000]" : "bg-[#276749]"
              }   h-[6px] w-[6px] rounded-full`}
            />
            <p
              className={`${
                row.original.status == "used"
                  ? "text-[#DF0000]"
                  : "text-[#276749]"
              }   `}
            >
              {row.original.status == "used" ? <>Used</> : <>Active</>}
            </p>
          </div>
        )}
      </div>
    ),
  },
];
