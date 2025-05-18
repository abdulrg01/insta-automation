"use client";
import { ChevronRight, PencilIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import ActivateAutomationButton from "../../activate-automation-button";
import {
  useEditAutomationMutation,
  useGetAutomationInfoQuery,
} from "@/lib/redux/services/automation";
import { Input } from "@/components/ui/input";

type Props = {
  id: string;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AutomationBreadcrumb = ({ id }: Props) => {
  const { data } = useGetAutomationInfoQuery(id);
  const [editAutomation, { data: updateAutomationInfo, isLoading, isSuccess }] =
    useEditAutomationMutation();
  const [name, setName] = useState(data?.name || "");
  const [edit, setEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSuccess) {
      setName(updateAutomationInfo.name);
    }
  }, [isSuccess]);

  useEffect(() => {
    setName(data?.name || "");
  }, [data?.name]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setEdit(false);
      }
    };

    if (edit) {
      document.addEventListener("mousedown", handleClickOutside);
      const editAuto = async () => {
        await editAutomation({ name, active: true });
      };
      editAuto();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [edit]);

  return (
    <div className="rounded-full w-full px-4 py-2 bg-[#18181B1A] flex items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#9B9CA0] truncate">Automations</p>
        <ChevronRight color="#9B9CA0" className="flex-shrink-0" />
        <span className="flex gap-x-3 items-center min-w-0">
          {edit ? (
            <Input
              ref={inputRef}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={isLoading ? data?.name : "Add a new name"}
              className="bg-transparent h-auto outline-none text-base border-none p-0"
              autoFocus
            />
          ) : (
            <>
              <p className="text-[#9B9CA0] truncate">{name}</p>
              <span
                onClick={() => setEdit(true)}
                className="mr-4 cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0"
              >
                <PencilIcon size={14} />
              </span>
            </>
          )}
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
        </div>
      </div>

      <ActivateAutomationButton id={id} />
    </div>
  );
};

export default AutomationBreadcrumb;
