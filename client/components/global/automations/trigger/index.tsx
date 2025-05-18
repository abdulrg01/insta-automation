"use client";
import {
  useAddTriggerMutation,
  useGetAutomationInfoQuery,
} from "@/lib/redux/services/automation";
import React, { useState } from "react";
import ActiveTrigger from "./ActiveTrigger";
import ThenAction from "../then/then-action";
import TriggerButton from "../trigger-buttom";
import { AUTOMATION_TRIGGER } from "@/constant/automation";
import { cn } from "@/lib/utils";
import Keywords from "./Keywords";
import { Button } from "@/components/ui/button";
import Loader from "../../loader";

type Props = {
  id: string;
};

const Trigger = ({ id }: Props) => {
  const { data } = useGetAutomationInfoQuery(id);

  const [addTrigger, { isLoading }] = useAddTriggerMutation();
  const [trigger, setTrigger] = useState("");

  const handleAddTrigger = async () => {
    await addTrigger({
      id: id,
      trigger,
    });
  };

  if (data?.trigger?.length ?? 0 > 0) {
    return (
      <div className="flex flex-col gap-y-6 items-center">
        <ActiveTrigger
          type={data?.trigger[0].type ?? ""}
          keywords={data?.keywords ?? []}
        />
        {(data?.trigger?.length ?? 0) > 1 && (
          <>
            <div className="relative w-6/12">
              <p className="absolute transform px-2 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2">
                or
              </p>
              <div className="w-full border-t border-muted" />
            </div>
            <ActiveTrigger
              type={data?.trigger[1].type ?? ""}
              keywords={data?.keywords ?? []}
            />
          </>
        )}

        {!data?.listener && <ThenAction id={id} />}
      </div>
    );
  }

  return (
    <TriggerButton label="Add Trigger">
      <div className="flex flex-col gap-y-2">
        {AUTOMATION_TRIGGER.map((trigger, i) => (
          <div
            key={i}
            onClick={() => setTrigger(trigger.type)}
            className={cn(
              "hover:opacity-80 text-white rounded-xl flex cursor-pointer flex-col p-3 gap-y-2",
              !AUTOMATION_TRIGGER.find((t) => t.type === trigger.type)
                ? "bg-background"
                : "bg-gradient-to-br from-[#3352CC] font-medium to-[#1C2D70]"
            )}
          >
            <div className="flex gap-x-2 items-center">
              {trigger.icon}
              <p className="font-bold">{trigger.label}</p>
            </div>
            <p className="text-sm font-light">{trigger.desc}</p>
          </div>
        ))}
        <Keywords id={id} />
        <Button
          onClick={handleAddTrigger}
          disabled={AUTOMATION_TRIGGER?.length === 0}
          className="bg-gradient-to-br from-[#3352CC] font-medium text-white to-[#1C2D70]"
        >
          <Loader state={isLoading}>Create Trigger</Loader>
        </Button>
      </div>
    </TriggerButton>
  );
};

export default Trigger;
