"use client";

import Header from "@/components/common/header";
import LinksDock from "@/components/common/dock";
import About from "@/components/common/about";
import WorkExperience from "@/components/common/work-experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="min-h-screen mx-auto flex flex-col items-center w-[70vw]">
        <Header />
        <About />
        <WorkExperience />
        <div className="h-48" />
      </div>
      <LinksDock />
    </main>
  );
}
