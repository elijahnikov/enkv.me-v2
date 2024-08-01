"use client";

import { motion } from "framer-motion";
import Header from "@/components/common/header";
import LinksDock from "@/components/common/dock";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveDown } from "lucide-react";

export default function Home() {
  const transitionValues = {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut",
  };
  return (
    <main className="flex min-h-screen flex-col items-center pb-32 justify-between">
      <div className="min-h-screen w-[70vw]">
        <Header />
      </div>

      <LinksDock />

      {/* <div className="h-[800px] w-[400px] bg-red-400">1</div> */}
    </main>
  );
}
