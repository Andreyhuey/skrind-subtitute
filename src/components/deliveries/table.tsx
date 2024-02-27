"use client";
import React from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getFilteredRowModel,
  getPaginationRowModel,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowUpDown,
  ChevronDown,
  ChevronLeftIcon,
  ChevronRightIcon,
  Download,
  ListFilter,
  RotateCw,
} from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DeliveriesTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <div className="rounded-md border">
      <div className="p-5">
        <p className="text-[18px] font-bold flex gap-2 items-center">
          Deliveries
          <span className="bg-[#3072b442] text-[#3072b4ff] py-1 px-3 rounded-xl font-normal text-[12px]">
            {table.getFilteredRowModel().rows.length}
          </span>
        </p>
      </div>
      <>
        <div className="lg:flex lg:flex-row grid grid-cols-2 items-center justify-end gap-3 p-3 border">
          <Input
            placeholder="Search Customer Name"
            value={
              (table.getColumn("firstName")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("firstName")?.setFilterValue(event.target.value)
            }
            className="max-w-sm focus:outline-none"
          />
          <Button variant="outline" className="flex items-center gap-1">
            Country
            <ChevronDown />
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            Daily (2023)
            <ChevronDown />
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            <ArrowUpDown />
            Sort
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            Filters
            <ListFilter />
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            <Download />
            Download
          </Button>
          <RotateCw />
        </div>
      </>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <>
        <div className="flex items-center justify-between p-5">
          <Button
            variant="outline"
            className="flex gap-2"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="">Previous</span>
          </Button>
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>
          <Button
            variant="outline"
            className="flex gap-2"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="">Next</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </>
    </div>
  );
}
