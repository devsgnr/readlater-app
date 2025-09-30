"use client";

import Currency from "@/components/custom/Currency";
import DateView from "@/components/custom/Date";
import PaymentBadge from "@/components/custom/PaymentBadge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Copy from "./copy";

export const columns: ColumnDef<{}>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return (
        <div className="max-w-20">
          <p className="truncate" title={row.getValue("id")}>
            {row.getValue("id")}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "accessCode",
    header: "Access Code",
    cell: ({ row }) => {
      return (
        <div className="max-w-20">
          <p className="truncate" title={row.getValue("accessCode")}>
            {row.getValue("accessCode")}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return (
        <div className="max-w-40">
          <p className="truncate" title={row.getValue("description")}>
            {row.getValue("description")}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div>
          <PaymentBadge status={row.getValue("status")} />
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      return (
        <div>
          <Currency amount={row.getValue("amount")} />
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      return (
        <div>
          <DateView date={row.getValue("createdAt")} />
        </div>
      );
    },
  },
  {
    accessorKey: "paymentDate",
    header: "Paid On",
    cell: ({ row }) => {
      return (
        <div>
          <DateView date={row.getValue("paymentDate")} />
        </div>
      );
    },
  },
  {
    accessorKey: "trxref",
    header: "Transaction Reference",
    cell: ({ row }) => {
      return (
        <div>
          <p>{row.getValue("trxref") || "N/A"}</p>
        </div>
      );
    },
  },
  {
    id: "options",
    header: "Options",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-56" align="end">
            <DropdownMenuLabel className="text-xs">Options</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <Copy value={row.getValue("trxref")}>Copy Transaction Ref</Copy>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
