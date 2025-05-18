import React from "react";
import PopOver from "../../pop-over";
import { PlusCircle } from "lucide-react";

type Props = {
  label: string;
  children: React.ReactNode;
};

const TriggerButton = ({ label, children }: Props) => {
  return (
    <PopOver
      className="w-[400px]"
      trigger={
        <div className="border-2 text-[#768BDD] border-dashed flex w-full border-[#3352cc] hover-opacity-80 cursor-pointer transition duration-100 rounded-xl gap-x-2 justify-center items-center p-5">
          <PlusCircle />
          <p className="font-bold">{label}</p>
        </div>
      }
    >
      {children}
    </PopOver>
  );
};

export default TriggerButton;
