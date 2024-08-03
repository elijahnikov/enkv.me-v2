import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { experience, ExperienceType } from "@/lib/data/experience";
import { stacks } from "@/lib/data/stacks";
import { motion } from "framer-motion";

import Image from "next/image";

import { Badge } from "../ui/badge";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import BlurFade from "../magicui/blur-fade";
import { useLogSnag } from "@logsnag/next";
import Container from "./container";

export default function WorkExperience() {
  const { track } = useLogSnag();
  const trackExperienceOpen = ({ company }: { company: string }) => {
    track({
      channel: "work-experience",
      event: "Open work experience accordion",
      icon: "🎨",
      notify: true,
      tags: {
        company,
      },
    });
  };
  return (
    <Container>
      <BlurFade>
        <h1
          id="experienceText"
          className="font-mono text-md dark:text-neutral-300 text-neutral-700"
        >
          Work experience
        </h1>
        <Accordion type="single" collapsible className="w-full">
          {experience.map((work, index) => (
            <ExperienceCard
              track={trackExperienceOpen}
              experience={work}
              key={index}
            />
          ))}
        </Accordion>
      </BlurFade>
    </Container>
  );
}

function ExperienceCard({
  experience,
  track,
}: {
  experience: ExperienceType;
  track: ({ company }: { company: string }) => void;
}) {
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
      <AccordionTrigger
        onClick={() => track({ company })}
        className="transition-all [&[data-state=open]>svg]:rotate-180"
      >
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
              <Link
                href={website}
                className="w-max hover:underline"
                target="_blank"
              >
                <div className="flex items-center space-x-1">
                  <p className="text-md leading-tight">{company}</p>
                  <ArrowUpRight size={18} />
                </div>
              </Link>
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
      <AccordionContent className="pb-6">
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
          {roles.stack.map((stack, index) => {
            const src = extractedObjects[stack];
            return <StackBadge src={src} stack={stack} key={index} />;
          })}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export function StackBadge({
  stack,
  src,
}: {
  stack: string;
  src: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Badge
        variant={"secondary"}
        className="rounded-md py-1 space-x-1 px-2 dark:bg-neutral-200 text-black border border-input"
      >
        <svg
          viewBox="0 0 128 128"
          className="z-10 h-[18px] max-h-[18px] w-[18px] max-w-[18px] overflow-visible"
        >
          {src}
        </svg>
        <p className="text-xs font-normal">{stack}</p>
      </Badge>
    </motion.div>
  );
}
