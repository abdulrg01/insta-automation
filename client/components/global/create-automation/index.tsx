"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Activity } from "lucide-react";

// type Props = {};

const CreateAutomation = () => {
  return (
    <Button className="lg:px-10 py-2 bg-gradient-to-br text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] hover:opacity-70 transition duration-100">
      <Activity />
    </Button>
  );
};

export default CreateAutomation;
