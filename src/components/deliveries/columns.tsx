"use client";

import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Deliveries = {
  id: number;
  product: string;
  avatar: string;
  firstName: string;
  lastName: string;
  time: string;
  amount: number;
  location: string;
  deliveryStatus: "Processing" | "Dispatched" | "Delivered";
};

export const columns: ColumnDef<Deliveries>[] = [
  {
    accessorKey: "product",
    header: "Product",
  },
  {
    accessorKey: "firstName",
    accessorFn: (row) => `${row.firstName} ${row.lastName}`,
    header: "Customer",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <img
          src={row.original.avatar}
          alt="Avatar"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
        <div>
          <div>{row.original.firstName}</div>
          <div>{row.original.lastName}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "time",
    header: "Date/Time",
    cell: ({ row }) => (
      <div>{moment(row.original.time).format("Do MMM YYYY, h:mm A")}</div>
    ),
  },
  {
    header: "Amount",
    accessorKey: "amount",
    cell: ({ row }) => (
      <>
        <p> ₦{row.original.amount}.00</p>
      </>
    ),
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "deliveryStatus",
    header: "Delivery Status",
  },
];
