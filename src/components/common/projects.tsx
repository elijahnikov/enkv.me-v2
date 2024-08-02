import { projects, ProjectsType } from "@/lib/data/projects";
import { Card } from "../ui/card";
import Image from "next/image";
import { stacks } from "@/lib/data/stacks";
import { StackBadge } from "./work-experience";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Icons } from "./dock";
import { ArrowUpRight } from "lucide-react";
import BlurFade from "../magicui/blur-fade";

const extractedObjects = Object.entries(stacks).reduce(
  (acc: Record<string, string | React.ReactNode>, [_, childObject]) => {
    Object.entries(childObject).forEach(([key, value]) => {
      acc[key] = value;
    });
    return acc;
  },
  {},
);

export default function Projects() {
  return (
    <div className="w-[55%] mt-20">
      <BlurFade inView>
        <div>
          <h1
            id="projectsText"
            className="font-mono mb-2 text-md dark:text-neutral-300 text-neutral-700"
          >
            Projects
          </h1>
        </div>
        <div className="flex space-y-4 flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </BlurFade>
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectsType }) {
  return (
    <Card className="px-4 pt-4 pb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <h1 className="font-semibold leading-tight mb-1">{project.title}</h1>
          {project.active && (
            <span className="relative -mt-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
          )}
        </div>
        <div className="flex relative top-[100%] space-x-2 items-center">
          {project.wip && (
            <Badge variant={"secondary"} className="border border-input">
              WIP
            </Badge>
          )}
          <Link
            href={project.github_url}
            className={cn(
              buttonVariants({ size: "icon", variant: "secondary" }),
              "h-6 p-1 w-6 border border-input",
            )}
            target="_blank"
          >
            <Icons.github />
          </Link>
          <Link
            href={project.url}
            className={cn(
              buttonVariants({ size: "icon", variant: "secondary" }),
              "h-6 w-6 border border-input",
            )}
            target="_blank"
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <p className="text-xs max-w-[75%] text-neutral-500 dark:text-neutral-300 leading-tight mb-2">
        {project.description}
      </p>
      <Image
        src={project.header_image}
        alt={project.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="ring-[1px] dark:bg-black bg-white rounded-md ring-input"
      />

      <div className="flex flex-wrap mt-2 gap-1">
        {project.stack.map((stack, index) => {
          const src = extractedObjects[stack];
          return <StackBadge src={src} stack={stack} key={index} />;
        })}
      </div>
    </Card>
  );
}
