import { INTEGRATIONS } from "@/constant/page";
import React from "react";
import IntegrationCard from "./_components/integration-card/page";

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full lg:w-8/12 gap-y-5">
        {INTEGRATIONS.map((card, i) => (
          <IntegrationCard key={i} {...card} />
        ))}
      </div>
    </div>
  );
};

export default page;
