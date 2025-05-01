import { ChevronRight, PencilIcon } from "lucide-react";
import React from "react";
import ActivateAutomationButton from "../../activate-automation-button";

type Props = {
  id: string;
};

const AutomationBreadcrumb = ({ id }: Props) => {
  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#9B9CA0] truncate">Automations</p>
        <ChevronRight color="#9B9CA0" className="flex-shrink-0" />
        <span className="flex gap-x-3 items-center min-w-0">
          <p className="text-[#9B9CA0] truncate">
            This is the automation title
          </p>
          <span className="mr-4 cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0">
            <PencilIcon size={14} />
          </span>
        </span>
      </div>

      <div className="flex items-center gap-x-5 ml-auto">
        <p className="hidden md:block truncate text-[#9B9CA0] text-sm">
          All state are automatically saved
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-secondary text-sm truncate min-w-0">
            Changes saved
          </p>
          <p className="text-secondary text-sm truncate min-w-0">Undo | Redo</p>
        </div>
      </div>

      {id && <p></p>}

      <ActivateAutomationButton />
    </div>
  );
};

export default AutomationBreadcrumb;
