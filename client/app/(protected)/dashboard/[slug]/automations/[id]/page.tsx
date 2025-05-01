import AutomationBreadcrumb from "@/components/global/bread-crumbs/automation-bread-crumb";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const page = ({ params }: Props) => {
  return (
    <div className="flex flex-col items-center gap-y-20">
      <AutomationBreadcrumb id={params.id} />
    </div>
  );
};

export default page;
