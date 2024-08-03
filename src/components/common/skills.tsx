import { stacks } from "@/lib/data/stacks";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import _ from "lodash";
import { Badge } from "@/components/ui/badge";
import BlurFade from "../magicui/blur-fade";
import Container from "./container";

export default function Skills() {
  return (
    <Container>
      <BlurFade inView>
        <h1
          id="skillsText"
          className="font-mono mb-2 text-md dark:text-neutral-300 text-neutral-700"
        >
          Skills
        </h1>
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <div className="grid w-full grid-cols-2 gap-4 xl:gap-4">
              {Object.entries(stacks).map(([category, items]) => (
                <Card className="p-4" key={category}>
                  <div className="mb-2 flex items-center space-x-2">
                    <h2 className="text-sm font-mono font-semibold text-neutral-600 dark:text-neutral-300 ">
                      {_.startCase(_.toLower(category))}
                    </h2>
                    <Badge className="border font-mono rounded-md px-2 py-0 border-green-500 bg-green-400 text-black shadow-sm hover:bg-green-400">
                      {Object.entries(items).length}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <TooltipProvider delayDuration={400}>
                      {Object.entries(items).map(([name, src], index) => (
                        <Tooltip key={index}>
                          <TooltipTrigger>
                            <motion.div
                              whileHover={{
                                scale: 1.15,
                                rotate: index % 2 === 0 ? 2 : -2,
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                              }}
                              className="flex items-center dark:bg-neutral-200 justify-center rounded-lg border border-neutral-200 px-2 shadow-sm dark:border-neutral-800"
                            >
                              <div>
                                <svg
                                  viewBox="0 0 128 128"
                                  className="absolute z-10 h-[36px] max-h-[36px] w-[36px] max-w-[36px] overflow-visible p-2"
                                >
                                  {src}
                                </svg>
                                <svg
                                  viewBox="0 0 128 128"
                                  className="sticker h-[36px] max-h-[36px] w-[36px] max-w-[36px] overflow-visible p-2 drop-shadow-[rgba(0,_0,_0,_0.24)_0px_0.5px_1px]"
                                >
                                  {src}
                                </svg>
                              </div>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent className="text-xs">
                            {name}
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </TooltipProvider>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>
    </Container>
  );
}
