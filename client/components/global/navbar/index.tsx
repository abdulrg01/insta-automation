"use client";
import { navLinks, PAGE_BREAD_CRUMBS } from "@/constant/page";
import { UsePaths } from "@/hooks/user-nav";
import Link from "next/link";
import { HelpCircleIcon } from "lucide-react";
import Image from "next/image";
// import ClerkAuthState from "../clerk-auth-state";
import { SubscriptionPlan } from "../Subscription-plan";
import UpgradeCard from "../sidebar/upgrade";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CreateAutomation from "../create-automation";
import Search from "../search";
import Notifications from "../notifications";
import MainBreedCrumb from "../bread-crumbs/main-breed-crumb";

type Props = {
  slug: string;
};

export default function Navbar({ slug }: Props) {
  const { page } = UsePaths();
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug;

  return (
    currentPage && (
      <div className="flex flex-col">
        <div className="flex items-center gap-3 justify-end">
          <div className="flex items-center gap-2">
            <Search />
            <CreateAutomation />
            <Notifications />
          </div>

          {/* sheet */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Image
                  src="/assets/icons/menu.svg"
                  alt="menu"
                  width={23}
                  height={23}
                  className="cursor-pointer text-[#000]"
                />
              </SheetTrigger>
              <SheetContent className="sheet-content sm:w-60">
                <>
                  <Link
                    href="/"
                    className="px-3 py-2 flex items-center gap-2 md:py-2"
                  >
                    <Image
                      src="/window.svg"
                      width={5}
                      height={5}
                      className="w-5 h-5"
                      alt="logo"
                    />
                    <p className="font-bold text-base mt-1 text-gray-700">
                      Insta real
                    </p>
                  </Link>
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
                                page === slug &&
                                link.label === "home" &&
                                "brightness-200"
                              }`}
                            />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 text-sm space-y-3 font-medium p-3">
                      <div className="flex gap-x-2">
                        {/* <ClerkAuthState /> */}
                        <p className="text-[#9B9CA0]">Profile</p>
                      </div>
                      <div className="flex gap-x-3">
                        <HelpCircleIcon className="text-[#969697]" />
                        <p className="text-[#9B9CA0]">Help</p>
                      </div>
                    </div>

                    <SubscriptionPlan type="Free">
                      <div className="flex-1 flex flex-col justify-end">
                        <UpgradeCard />
                      </div>
                    </SubscriptionPlan>
                  </div>
                </>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div>
          <MainBreedCrumb page={page === slug ? "Home" : page} slug={slug} />
        </div>
      </div>
    )
  );
}
