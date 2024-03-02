"use client";

import { ColumnDef } from "@tanstack/react-table";
import { FolderClosed } from "lucide-react";
import moment from "moment";
import ToggleComponent from "./ToggleComponent";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuPen } from "react-icons/lu";

export type Campaign = {
  id: number;
  name: string;
  noOfImages: number;
  dateCreated: string;
  dateEdited: string;
  status: boolean;
};

export const columns: ColumnDef<Campaign>[] = [
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => (
      <div className="flex gap-2 items-center text-[#3072B4]">
        <FolderClosed />
        <p>{row.original.name}</p>
      </div>
    ),
  },
  {
    header: "No of Images",
    accessorKey: "noOfImages",
  },
  {
    accessorKey: "dateCreated",
    header: "Date Created",
    cell: ({ row }) => (
      <div>{moment(row.original.dateCreated).format("Do MMM YYYY")}</div>
    ),
  },
  {
    accessorKey: "dateEdited",
    header: "Date Edited",
    cell: ({ row }) => (
      <div>{moment(row.original.dateEdited).format("Do MMM YYYY")}</div>
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => <ToggleComponent isToggled={row.original.status} />,
  },
  {
    header: "",
    accessorKey: "icons",
    cell: () => (
      <div className="flex items-center justify-center gap-3 cursor-pointer text-xl">
        <FaRegTrashAlt />

        <LuPen />
      </div>
    ),
  },
];
