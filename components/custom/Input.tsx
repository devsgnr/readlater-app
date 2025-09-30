"use client";

import { Loader, LucideIcon } from "lucide-react";
import { InputHTMLAttributes } from "react";
import { Input } from "../ui/input";
import React from "react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { AlertCircle } from "@untitled-ui/icons-react";

interface DayterInput extends InputHTMLAttributes<HTMLInputElement> {
  RightIcon?: LucideIcon;
  LeftIcon?: LucideIcon;
  Component?: JSX.Element;
  error?: string;
  isLoading?: boolean;
}

const DayterInput = ({
  RightIcon,
  LeftIcon,
  Component,
  error,
  isLoading,
  ...rest
}: DayterInput) => {
  return (
    <div className="relative w-full">
      {LeftIcon &&
        (isLoading ? (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-muted-foreground">
            <Loader width={16} size={16} className="animate-spin duration-2000" />
          </div>
        ) : (
          <LeftIcon
            width={16}
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-muted-foreground"
          />
        ))}
      {RightIcon && !error && (
        <RightIcon
          width={16}
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-muted-foreground"
        />
      )}
      {error && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-[18px] w-[18px]">
          <Tooltip delayDuration={0}>
            <TooltipTrigger className="text-red-500" tabIndex={-1}>
              <AlertCircle width={18} height={18} />
            </TooltipTrigger>
            <TooltipContent className="text-red-500 text-xs">{error}</TooltipContent>
          </Tooltip>
        </div>
      )}

      {Component && (
        <div className="absolute h-6 right-1 top-1/2 -translate-y-1/2 text-muted-foreground">
          {Component}
        </div>
      )}

      <Input
        {...rest}
        className={cn(
          "w-full h-8 !text-[13px] py-0",
          {
            "pl-9": LeftIcon,
            "pr-9": RightIcon,
            "ring-2 ring-destructive/30 border border-red-600 ring-offset-1 placeholder:text-red-500 placeholder:text-[13px]":
              error,
          },
          rest.className,
        )}
        onKeyDown={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default DayterInput;
