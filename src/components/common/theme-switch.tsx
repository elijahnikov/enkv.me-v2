import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useState } from "react";
import { buttonVariants } from "../ui/button";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  if (resolvedTheme === "dark") {
    return (
      <div
        onClick={() => setTheme("light")}
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "size-10 rounded-full",
        )}
      >
        <Sun className="size-4" />
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div
        onClick={() => setTheme("dark")}
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "size-10 rounded-full",
        )}
      >
        <Moon className="size-4" />
      </div>
    );
  }
}
