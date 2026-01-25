"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
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

  if (useSwitcherView) {
    return (
      <div className="flex items-center gap-3">
        <Switch
          id="theme-toggle"
          checked={isDarkMode}
          onCheckedChange={handleToggle}
        />
        {isDarkMode ? (
          <Moon className="size-4 text-muted-foreground" />
        ) : (
          <Sun className="size-4 text-muted-foreground" />
        )}
      </div>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
      aria-label="Toggle theme"
    >
      <Sun className="size-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
    </button>
  );
}
