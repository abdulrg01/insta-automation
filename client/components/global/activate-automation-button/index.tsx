import { Button } from "@/components/ui/button";
import React from "react";
import { ActivitySquare, Loader2 } from "lucide-react";
import {
  useEditAutomationMutation,
  useGetAutomationInfoQuery,
} from "@/lib/redux/services/automation";

type Props = {
  id: string;
};

const ActivateAutomationButton = ({ id }: Props) => {
  const { data } = useGetAutomationInfoQuery(id);
  const [editAutomation, { isLoading }] = useEditAutomationMutation();

  const onToggleAutomation = async () => {
    const state = !data?.active;
    await editAutomation({ active: state });
  };

  return (
    <Button
      disabled={isLoading}
      onClick={onToggleAutomation}
      className="lg:px-10 bg-gradient-to-br text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] hover:opacity-80 transition duration-100 ml-4"
    >
      {isLoading ? <Loader2 className="animate-spin" /> : <ActivitySquare />}
      <p className="lg:inline hidden">
        {data?.active ? "Disable" : "Activate"}
      </p>
    </Button>
  );
};

export default ActivateAutomationButton;
