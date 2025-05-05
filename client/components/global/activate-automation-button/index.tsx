import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../loader";
import { ActivitySquare } from "lucide-react";

const ActivateAutomationButton = () => {
  return (
    <Button className="lg:px-10 bg-gradient-to-br text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] hover:opacity-80 transition duration-100 ml-4">
        <Loader state={false}>
            <ActivitySquare />
            <p className="lg:inline hidden">Activate</p>
        </Loader>
    </Button>
  );
};

export default ActivateAutomationButton;
