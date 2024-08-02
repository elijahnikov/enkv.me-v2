import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { experience, ExperienceType } from "@/lib/data/experience";
import { stacks } from "@/lib/data/stacks";

import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Badge } from "../ui/badge";

export default function WorkExperience() {
  return (
    <div className="w-[50%] mt-20">
      <h1 className="font-mono text-md dark:text-neutral-300 text-neutral-700">
        Work experience
      </h1>
      <Accordion type="single" collapsible className="w-full">
        {experience.map((work, index) => (
          <ExperienceCard experience={work} key={index} />
        ))}
      </Accordion>
    </div>
  );
}

function ExperienceCard({ experience }: { experience: ExperienceType }) {
  const { company, website, roles, location, localeImage } = experience;
  const extractedObjects = Object.entries(stacks).reduce(
    (acc: Record<string, string | React.ReactNode>, [_, childObject]) => {
      Object.entries(childObject).forEach(([key, value]) => {
        acc[key] = value;
      });
      return acc;
    },
    {},
  );

  return (
    <AccordionItem className="border-none" value={company}>
      <AccordionTrigger className="transition-all [&[data-state=open]>svg]:rotate-180">
        <div className="flex w-full items-center">
          <div>
            <Image
              src={localeImage}
              alt={company}
              height={52}
              width={52}
              className="rounded-full ring-[1px] ring-input shadow-md"
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex ml-2 text-left flex-col">
              <p className="text-md leading-tight">{company}</p>
              <p className="text-sm leading-tight text-neutral-500 font-normal">
                {roles.title}
              </p>
            </div>
            <div className="flex mr-2 text-left flex-col">
              <p className="text-sm leading-tight text-neutral-500 font-normal">
                {roles.duration}
              </p>
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col space-y-4 w-[90%] justify-end self-end items-end ml-auto">
          {roles.pointers.map((pointer, index) => (
            <div className="flex" key={index}>
              <p className="text-sm font-normal text-neutral-700 dark:text-neutral-300">
                {pointer}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap mt-2 gap-2 w-[90%] ml-auto">
          {/* <TooltipProvider delayDuration={200}> */}
          {roles.stack.map((stack, index) => {
            const src = extractedObjects[stack];
            return (
              <div key={index}>
                {/* <Tooltip> */}
                {/* <TooltipTrigger> */}
                <Badge
                  variant={"secondary"}
                  className="rounded-md py-1 space-x-1 px-2 dark:bg-neutral-900 border border-input"
                >
                  <svg
                    viewBox="0 0 128 128"
                    className="z-10 h-[18px] max-h-[18px] w-[18px] max-w-[18px] overflow-visible"
                  >
                    {src}
                  </svg>
                  <p className="text-xs font-normal">{stack}</p>
                </Badge>
                {/* </TooltipTrigger>
                    <TooltipContent className="relative left-0 border-neutral-200 text-xs dark:border-neutral-800">
                      {stack}
                    </TooltipContent>
                  </Tooltip> */}
              </div>
            );
          })}
          {/* </TooltipProvider> */}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
