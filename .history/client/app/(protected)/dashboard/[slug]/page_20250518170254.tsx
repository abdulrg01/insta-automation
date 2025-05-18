"use client";
import { useAppSelector } from "@/lib/hooks";
import { redirect } from "next/navigation";

const Page = () => {
  const { user } = useAppSelector((state) => state.auth);
  if (typeof window !== undefined) {
    if (!user) return redirect("/auth/sign-in");
    return redirect(`/dashboard/${user.name}`);
  }
};

export default Page;
