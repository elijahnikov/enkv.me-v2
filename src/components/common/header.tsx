import { MapPin, MousePointer2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import NumberTicker from "@/components/magicui/number-ticker";

export default function Header() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/London",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  const currentTimeInLondon = formatter.format(now);

  return (
    <div className="flex flex-col -space-y-5 justify-center mt-[24vh] mx-auto items-center text-center">
      <div className="flex items-center text-center space-x-4">
        <p className="tracking-tight text-[54px] dark:text-gray-600 text-neutral-400 font-medium">
          Hello 👋🏻, {`I'm`}
        </p>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image
            src={
              "https://utfs.io/f/248fc5d3-0da0-4d86-85a1-a44e48020e27-h2az4q.jpg"
            }
            className="rounded-full ring-[1px] shadow-xl dark:shadow-neutral-800 border-[4px] dark:border-neutral-700 border-white dark:ring-neutral-500 ring-neutral-100"
            alt="headshot"
            sizes="100vw"
            width={120}
            height={120}
          />
        </motion.div>
        <p className="text-[54px] tracking-tight font-medium">Elijah</p>
      </div>
      <div className="flex items-center space-x-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="ring-[4px] min-w-max dark:border-neutral-700 p-1 dark:shadow-neutral-800 shadow-xl min-h-max relative border-[4px] border-white dark:ring-neutral-500 ring-neutral-100 rounded-lg">
            <div>
              <MousePointer2
                size={28}
                className="fill-green-400 top-4 left-8 absolute stroke-neutral-100 text-shadow-md"
              />
              <MousePointer2
                size={28}
                className="fill-red-400 top-8 rotate-90 left-14 absolute stroke-neutral-100 text-shadow-md"
              />
            </div>
            <div className="flex justify-between space-x-1">
              <div className="flex space-x-1">
                <div className="w-4 h-2 dark:bg-neutral-700 bg-neutral-200 rounded-[2px]" />
                <div className="w-4 h-2 dark:bg-neutral-700 bg-neutral-200 rounded-[2px]" />
                <div className="w-4 h-2 dark:bg-neutral-700 bg-neutral-200 rounded-[2px]" />
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 dark:bg-neutral-700 bg-neutral-200 rounded-[2px]" />
                <div className="w-2 h-2 dark:bg-neutral-700 bg-neutral-200 rounded-[2px]" />
                <div className="w-2 h-2 dark:bg-neutral-700 bg-neutral-200 rounded-[2px]" />
              </div>
            </div>
            <div className="flex mt-1 space-x-2">
              <div className="flex space-x-1">
                <div className="w-6 h-10 dark:bg-neutral-700 bg-neutral-200 rounded-sm" />
                <div className="w-16 h-16 dark:bg-neutral-700 bg-neutral-200 rounded-sm" />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="w-8 h-6 dark:bg-neutral-700 bg-neutral-200 rounded-sm" />
                <div className="w-8 h-6 dark:bg-neutral-700 bg-neutral-200 rounded-sm" />
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col leading-tight -space-y-4">
          <p className="text-[32px] tracking-tight font-mono2 font-medium">
            software
          </p>
          <p className="text-[54px] tracking-tight font-medium">developer</p>
        </div>
        <p className="text-[54px] mt-6 tracking-tight dark:text-gray-600 text-neutral-400 font-medium">
          and
        </p>
        <p className="text-[54px] mt-6 tracking-tight font-medium">
          UI designer
        </p>
      </div>
      <div className="flex items-center relative space-x-4">
        <p className="tracking-tight text-[54px] dark:text-gray-600 text-neutral-400 font-medium">
          Based in
        </p>
        <p className="text-[54px] tracking-tight font-medium">London,</p>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div>
            <MapPin
              size={28}
              className="fill-blue-400 top-14 left-14 z-50 relative stroke-neutral-100 text-shadow-md"
            />
            <Image
              src={
                "https://utfs.io/f/603f539f-ae01-4b97-b635-fea7d1861877-cdx17m.29.57.png"
              }
              className="ring-[1px] dark:border-neutral-700 dark:shadow-neutral-800 object-cover h-24 w-36 rounded-lg relative shadow-xl dark:ring-neutral-500 border-[4px] border-white ring-neutral-100"
              alt="headshot"
              width={140}
              height={100}
            />
            <p className="mt-2 space-x-2 text-sm font-semibold">
              <span className="text-neutral-400 font-medium">
                {currentTimeInLondon}
              </span>
              <span className="font-medium text-neutral-600">LDN</span>
            </p>
          </div>
        </motion.div>
        <p className="text-[54px] tracking-tight font-medium">UK</p>
      </div>
    </div>
  );
}
