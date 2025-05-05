import { AutomationProps } from "@/constant/types/automation";
import { authApi } from "./auth";

const automationApi = authApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserAutomations: builder.query<AutomationProps, void>({
      query: () => `/automation`,
    }),
    createAutomations: builder.mutation<AutomationProps, void>({
      query: () => ({
        url: "/automation",
        method: "POST",
      }),
    }),
  }),
});

export const { useCreateAutomationsMutation, useGetUserAutomationsQuery } =
  automationApi;
