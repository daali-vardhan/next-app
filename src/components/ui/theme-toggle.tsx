"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

export default function ModeToggle({
  className,
  variant = "outline",
  children,
}: {
  className?: string;
  variant?: "outline" | "default";
  children?: React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();

  const handleTheme = (): void => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Button
      className={cn(
        "rounded-full hover:bg-primary active:bg-primary transition-colors",
        className,
      )}
      variant={variant}
      size="icon"
      onClick={handleTheme}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute  h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
      {children}
    </Button>
  );
}
