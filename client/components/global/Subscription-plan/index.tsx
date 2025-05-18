import { useGetUserQuery } from "@/lib/redux/services/userApi";

type Props = {
  type: "Free" | "PRO";
  children: React.ReactNode;
};
export const SubscriptionPlan = ({ children, type }: Props) => {
  const { data: user } = useGetUserQuery();
  return user?.subscription?.plan === type && children;
};
