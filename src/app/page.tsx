"use client";

import Header from "@/components/common/header";
import LinksDock from "@/components/common/dock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="min-h-screen w-[70vw]">
        <Header />
      </div>
      <LinksDock />
    </main>
  );
}
