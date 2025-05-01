"use client";
import { UsePaths } from "@/hooks/user-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import GradientButton from "../gradient-button";
import { Button } from "@/components/ui/button";

const AutomationList = () => {
  const { pathname } = UsePaths();
  return (
    <div className="flex flex-col gap-y-3">
      <Link
        href={`${pathname}/1234567`}
        className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] flex border-[#545454]"
      >
        <div className="flex flex-col flex-1 items-start">
          <h2 className="font-semibold text-xl">Automation Name</h2>
          <p className="text-[#9B9CA0] font-light mb-2 text-sm">
            This is from the comment
          </p>
          <div className="flex gap-x-2 flex-wrap mt-3">
            <div
              className={cn(
                "rounded-full px-4 py-1 capitalize",
                (0 + 1) % 1 == 0 && "bg-green-950 border-2 border-green-800",
                (1 + 1) % 2 == 0 && "bg-purple-950 border-2 border-purple-800",
                (2 + 1) % 3 == 0 && "bg-yellow-950 border-2 border-yellow-500",
                (3 + 1) % 4 == 0 && "bg-red-950 border-2 border-red-800"
              )}
            >
              getStarted
            </div>
          </div>
          <div className="rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1">
            <p className="text-sm text-[#bfc0c3]">No Keywords</p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="capitalize text-sm font-light text-[#9B9CA0]">
            2 days ago
          </p>
          <GradientButton
            type="BUTTON"
            className="w-full text-white hover:bg-background flex items-center justify-center"
          >
            Smart AI
          </GradientButton>
          <Button className="bg-background hover:bg-background text-white">Standard</Button>
        </div>
      </Link>
    </div>
  );
};

export default AutomationList;
