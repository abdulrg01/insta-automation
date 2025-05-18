"use client";
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";
import {
  useCreateAutomationsMutation,
  useGetUserAutomationsQuery,
} from "@/lib/redux/services/automation";
import Loader from "../loader";
import { useEffect } from "react";

const CreateAutomation = () => {
  const [createAutomations, { isSuccess, isLoading }] =
    useCreateAutomationsMutation();
  const { refetch } = useGetUserAutomationsQuery();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess, refetch]);

  const handleCreate = async () => {
    try {
      await createAutomations();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Button
      onClick={handleCreate}
      className="lg:px-10 py-2 bg-gradient-to-br text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] hover:opacity-70 transition duration-100"
    >
      <Loader state={isLoading}>
        <span className="hidden md:flex text-gray-200">
          Create an Automation
        </span>
        <Activity />
      </Loader>
    </Button>
  );
};

export default CreateAutomation;
