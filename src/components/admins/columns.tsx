"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Admin = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  lastActive:
    | "pending invite"
    | "2 hrs ago"
    | "Yesterday"
    | "Jan 6,2023"
    | "active";
  role: "Admin" | "Super Admin";
};

export const columns: ColumnDef<Admin>[] = [
  {
    accessorKey: "name",
    accessorFn: (row) => `${row.name} ${row.email}`,
    header: "Name",
    cell: ({ row }) => (
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <img
          src={row.original.avatar}
          alt="Avatar"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
        <div>
          <div>{row.original.name}</div>
          <div>{row.original.email}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "lastActive",
    header: "Last Active",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
];
