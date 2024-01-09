"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "./ui/switch";

interface ThemeModeToggleProps {
  useSwitcherView?: boolean;
}

export function ThemeModeToggle({ useSwitcherView }: ThemeModeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();

  const isDarkMode = resolvedTheme === "dark";

  const handleToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <>
      {!useSwitcherView && (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
      {useSwitcherView && (
        <div className="flex space-x-4">
          <Switch
            id="theme-toggle"
            checked={isDarkMode}
            onClick={handleToggle}
          />
          <div className="icon-container">
            {isDarkMode ? (
              <Moon className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            ) : (
              <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            )}
          </div>
        </div>
      )}
    </>
  );
}
