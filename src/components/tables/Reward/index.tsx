import * as React from "react";

import { ArrowUpDown, HardDriveDownload, ChevronLeftIcon, ChevronRightIcon, ChevronsRightIcon, ChevronsLeftIcon } from "lucide-react";
import RewardBadge from "../../ui/badge/RewardBadge";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table/index";
import Button from "../../ui/button/Button";
import { Reward } from "../../../lib/interfaces";
import { rewardData } from "../../../lib/constants";
import { cn } from "../../../lib/utils";
import Select from "../../form/Select";

const columns: ColumnDef<Reward>[] = [
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant=""
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <RewardBadge
        variant={row.getValue("status")}
      />
    )
  },
  {
    accessorKey: "first_name",
    header: ({ column }) => {
      return (
        <Button
          variant=""
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          First Name
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("first_name"),
  },
  {
    accessorKey: "last_name",
    header: ({ column }) => {
      return (
        <Button
          variant=""
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Name
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("last_name"),
  },
  {
    accessorKey: "pet_name",
    header: ({ column }) => {
      return (
        <Button
          variant=""
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Pet Name
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("pet_name"),
  },
  {
    accessorKey: "issue_date",
    header: ({ column }) => {
      return (
        <Button
          variant=""
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Issue Date
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("issue_date"),
  },
  {
    accessorKey: "redeemed_date",
    header: ({ column }) => {
      return (
        <Button
          variant=""
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Redeemed Date
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("redeemed_date"),
  },
  {
    accessorKey: "expiry_date",
    header: ({ column }) => {
      return (
        <Button
          variant=""
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Expiry Date
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("expiry_date"),
  },
  {
    accessorKey: "size",
    header: ({ column }) => {
      return (
        <Button
          variant=""
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Size
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("size"),
  },
  {
    accessorKey: "id",
    header: () => (<HardDriveDownload className="cursor-pointer w-6 h-6 ml-2" />),
    cell: "",
  },
];

export function RewardTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const options = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "20", label: "20" },
  ];

  const table = useReactTable({
    data: rewardData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleSelectChange = (value: string) => {
    table.setPageSize(Number(value));
  }

  const rewards = ["issued", "redeemed", "reconciled", "expired"];

  return (
    <div
      className={` border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] `}
    >
      <div className="flex flex-wrap gap-6 items-center justify-end  p-6">
        {rewards.map((status) => (
          <div key={status}>
            <RewardBadge variant={status} />
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 dark:border-gray-800">
        <div>
          <Table className="text-center">
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
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center flex-wrap gap-2 justify-between p-5">
          <div className="flex flex-wrap items-center gap-6 lg:gap-8">
            <div className="flex gap-3 justify-center items-center">
              <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">Rows per page</p>
              <Select
                options={options}
                defaultValue="10"
                onChange={handleSelectChange}
                className="dark:bg-dark-900 w-[10px]"
              />
            </div>
            <div className="flex-1 text-sm text-muted-foreground whitespace-nowrap">
              Displaying {table.getRowModel().rows.length} of {table.getPrePaginationRowModel().rows.length} results
            </div>
          </div>
          <div className="flex items-center">
            <Button
              variant="outline"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              className="w-8 h-8 border rounded-none"
              startIcon={<ChevronsLeftIcon className="w-4 h-4" />}
            />
            <Button
              variant="outline"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="w-8 h-8  rounded-none"
              startIcon={<ChevronLeftIcon className="w-4 h-4" />}
            />

            {table.getPageOptions().map((page, pageIdx) => (
              <Button
                key={`basic-data-table-${pageIdx}`}
                onClick={() => table.setPageIndex(pageIdx)}
                variant="outline"
                className={cn("w-8 h-8  rounded-none")}
              >
                {page + 1}
              </Button>
            ))}
            <Button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              variant="outline"
              className="w-8 h-8  rounded-none"
              startIcon={<ChevronRightIcon className="w-4 h-4" />}
            />
            <Button
              variant="outline"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              className="w-8 h-8  rounded-none"
              startIcon={<ChevronsRightIcon className="w-4 h-4" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RewardTable;
