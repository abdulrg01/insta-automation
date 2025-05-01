type Props = {
  type: "Free" | "Paid" | "Trial";
  children: React.ReactNode;
};
export const SubscriptionPlan = ({ children, type }: Props) => {
  return children;
};
