"use client";

import Header from "@/components/common/header";
import LinksDock from "@/components/common/dock";
import About from "@/components/common/about";
import WorkExperience from "@/components/common/work-experience";
import Skills from "@/components/common/skills";
import Projects from "@/components/common/projects";
import Footer from "@/components/common/footer";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <DotPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] dark:opacity-25 opacity-50 fixed",
        )}
      />
      <div className="min-h-screen mx-auto flex flex-col items-center w-[90vw] xl:w-[70vw]">
        <Header />
        <About />
        <WorkExperience />
        <Skills />
        <Projects />
        <Footer />
        <div className="h-32" />
      </div>
      <LinksDock />
    </main>
  );
}
