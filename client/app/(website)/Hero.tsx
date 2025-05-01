import React from "react";
import { Cover } from "@/components/ui/cover";
import LogoCloud from "./logo-cloud";
import { ImageCarousel } from "./ImageCarousel";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <main>
      <section className="text-center mt-40">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Transform your <br /> Instagram Engagement <br />
          <Cover>with Insta real</Cover>
        </h1>
        <p className="max-w-5xl mx-auto mt-4 text-xl text-neutral-400 dark:text-neutral-300">
          Access an ever-growing collection of premium, meticulously crafted
          templates and component packs. Save time and focus on what
          matters—building standout websites that captivate your audience.
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4">
          <Button className="font-semibold ">Get started</Button>
          <Button className="font-semibold" variant="outline">
            Learn more
          </Button>
        </div>
      </section>
      <div>
        <LogoCloud />
      </div>

      <section className="relative">
        <div className="absolute rounded-3xl inset-0 dark:bg-gradient-to-b from-transparent via-black/5 to-black/20 pointer-events-none" />
        <ImageCarousel />
      </section>
    </main>
  );
}
