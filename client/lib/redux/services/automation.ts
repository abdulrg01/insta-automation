import {
  AutomationProps,
  EditAutomationProps,
  SavePostsProps,
} from "@/constant/types/automation";
import { authApi } from "./auth";

const automationApi = authApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserAutomations: builder.query<AutomationProps[], void>({
      query: () => `/automation`,
    }),
    createAutomations: builder.mutation<AutomationProps, void>({
      query: () => ({
        url: "/automation",
        method: "POST",
      }),
    }),
    saveListener: builder.mutation<
      AutomationProps,
      { id: string; prompt: string; commentReply: string }
    >({
      query: ({ id, prompt, commentReply }) => ({
        url: `"/automation/${id}/add-listener"`,
        method: "POST",
        body: { prompt, commentReply },
      }),
    }),
    addTrigger: builder.mutation<
      AutomationProps,
      { id: string; trigger: string[] | string }
    >({
      query: ({ id, trigger }) => ({
        url: `/automation/${id}/add-trigger`,
        method: "PATCH",
        body: { trigger },
      }),
    }),
    addKeyword: builder.mutation<AutomationProps, { id: string; word: string }>(
      {
        query: ({ id, word }) => ({
          url: `/automation/${id}/add-keyword`,
          method: "PATCH",
          body: { word },
        }),
      }
    ),
    getAutomationInfo: builder.query<AutomationProps, string>({
      query: (id) => ({
        url: `/automation/${id}/get-automation-info`,
        method: "GET",
      }),
    }),
    editAutomation: builder.mutation<AutomationProps, EditAutomationProps>({
      query: (credentials) => ({
        url: `/automation`,
        method: "PATCH",
        body: { ...credentials },
      }),
    }),
    automationPost: builder.mutation<AutomationProps, SavePostsProps>({
      query: (credentials) => ({
        url: `/automation/save-posts`,
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useCreateAutomationsMutation,
  useGetUserAutomationsQuery,
  useGetAutomationInfoQuery,
  useEditAutomationMutation,
  useSaveListenerMutation,
  useAddTriggerMutation,
  useAddKeywordMutation,
  useAutomationPostMutation,
} = automationApi;
