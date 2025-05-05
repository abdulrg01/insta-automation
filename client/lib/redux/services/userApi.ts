import { AuthResponse, LoginRequest, RefreshInstagramStatus, RegisterRequest, User } from "@/constant/types/auth";
import { authApi } from "./auth";
import { setCredentials, setUser } from "../slices/authSlice";

const userApi = authApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (credentials) => ({
        url: "/users/register",
        method: "POST",
        body: credentials,
      }),
    }),
    getUser: builder.query<User, string>({
      query: (id) => `/users/${id}`,
    }),
    refreshInstagram: builder.query<RefreshInstagramStatus, void>({
      query: () => `/users/refresh-instagram`,
    }),
    refresh: builder.mutation<AuthResponse, void>({
      query: () => ({
        url: "/users/refresh",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          const { token, user } = data;
          dispatch(setCredentials({ token }));
          dispatch(setUser({ user }));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    logout: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserQuery,
  useRefreshMutation,
  useLogoutMutation,
  useRefreshInstagramQuery,
} = userApi;
