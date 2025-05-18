import AutomationList from "@/components/global/automation-list";
import CreateAutomation from "@/components/global/create-automation";
import { Check } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
      <div className="lg:col-span-4">
        <AutomationList />
      </div>
      <div className="lg:col-span-2">
        <div className="flex flex-col rounded-xl bg-[#1D1D1D] gap-y-6 p-5 border-[1px] overflow-hidden border-gray-400">
          <div>
            <h2 className="text-xl">Automations</h2>
            <p className="text-[#9B9CA0]">
              Your live automations will be listed here. You can create new
              automations by clicking the button below.
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            {[1, 2, 3].map((item, i) => (
              <div key={i} className="flex justify-between items-start">
                <div className="flex flex-col">
                  <h2 className="font-medium">Direct traffic toward website</h2>
                  <p className="text-[#9B9CA0] text-sm">March 5th 2025</p>
                </div>
                <Check />
              </div>
            ))}
          </div>
          <CreateAutomation />
        </div>
      </div>
    </div>
  );
};

export default page;
