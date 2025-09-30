"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePaymentsContext } from "@/lib/hooks";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const PaginateTable = () => {
  const { pageData, setPageData } = usePaymentsContext();
  const { page, pageSize } = pageData;

  return (
    <div className="flex items-center gap-3 justify-end">
      <div className="flex items-center gap-2">
        <p className="text-[13px] font-medium">Show per Page</p>
        <Select
          value={String(pageSize)}
          onValueChange={(v) => setPageData((p) => ({ ...p, pageSize: parseInt(v) }))}
        >
          <SelectTrigger className="bg-white h-7 text-[13px] font-medium drop-shadow-sm">
            <SelectValue className="text-[13px] font-medium" placeholder={pageSize} />
          </SelectTrigger>

          <SelectContent className="text-[13px] font-medium">
            <SelectItem value={"5"}>5</SelectItem>
            <SelectItem value={"10"}>10</SelectItem>
            <SelectItem value={"20"}>20</SelectItem>
            <SelectItem value={"50"}>50</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <p className="text-[13px] font-medium">
        {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, 0)} of {0}
      </p>

      <div className="grid grid-cols-2 gap-0 drop-shadow-sm">
        <Button
          className="bg-white h-7 w-7 rounded-tr-none rounded-br-none"
          disabled={page === 1}
          variant="outline"
          size="icon"
          onClick={() => setPageData((v) => ({ ...v, page: v.page - 1 }))}
        >
          <ChevronLeft strokeWidth={3} size={14} />
        </Button>
        <Button
          className="bg-white h-7 w-7 rounded-tl-none rounded-bl-none"
          disabled={page === 0}
          variant="outline"
          size="icon"
          onClick={() => setPageData((v) => ({ ...v, page: v.page + 1 }))}
        >
          <ChevronRight strokeWidth={3} size={14} />
        </Button>
      </div>
    </div>
  );
};

export default PaginateTable;
