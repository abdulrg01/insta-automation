"use client";
import { navLinks } from "@/constant/page";
import { UsePaths } from "@/hooks/user-nav";
import Image from "next/image";
import Link from "next/link";
import { HelpCircleIcon } from "lucide-react";
import { SubscriptionPlan } from "../Subscription-plan";
import UpgradeCard from "./upgrade";

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page } = UsePaths();

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-[#09090B] border-r border-[#09090B] lg:translate-x-0 dark:bg-[#09090B] dark:border-gray-700">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-[#09090B] dark:bg-[#09090B]">
        <div className="h-full flex flex-col justify-between">
          <ul className="space-y-2 font-medium">
            {navLinks.map((link, i) => (
              <li
                className={`flex items-center justify-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-purple-100 hover:shadow-inner group ${
                  (page === link.label,
                  page === slug && link.label === "home"
                    ? "bg-purple-gradient text-[#FAFAFA]"
                    : "text-[#969697]")
                }`}
                key={i}
              >
                <Link
                  className="p-16-semibold flex size-full gap-4 p-3 !text-sm"
                  href={`/dashboard/${slug}/${
                    link.label === "home" ? "/" : link.label
                  }`}
                >
                  <Image
                    src={link.icon}
                    alt="logo"
                    width={20}
                    height={20}
                    className={`${
                      page === slug && link.label === "home" && "brightness-200"
                    }`}
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-3 font-medium p-3">
            <div className="flex gap-x-2">
              {/* <ClerkAuthState /> */}
              <p className="text-[#9B9CA0] text-sm">Profile</p>
            </div>
            <div className="flex gap-x-3">
              <HelpCircleIcon className="text-[#969697]" />
              <p className="text-[#9B9CA0] text-sm">Help</p>
            </div>
          </div>

          <SubscriptionPlan type="Free">
            <div className="flex-1 flex flex-col justify-end">
              <UpgradeCard />
            </div>
          </SubscriptionPlan>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
