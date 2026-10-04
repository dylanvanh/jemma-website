"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

interface ThemeModeToggleProps {
  useSwitcherView?: boolean;
}

export function ThemeModeToggle({ useSwitcherView }: ThemeModeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDarkMode = mounted && resolvedTheme === "dark";

  const handleToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  if (useSwitcherView) {
    return (
      <div className="flex items-center gap-3">
        <Switch
          id="theme-toggle"
          checked={isDarkMode}
          disabled={!mounted}
          onCheckedChange={handleToggle}
        />
        <span className="text-muted-foreground text-sm">
          {isDarkMode ? "Dark" : "Light"}
        </span>
      </div>
    );
  }

  return (
    <button
      onClick={handleToggle}
      disabled={!mounted}
      className="border-border text-muted-foreground hover:text-foreground min-h-11 border-l pl-5 text-xs font-semibold tracking-[0.14em] uppercase transition-colors active:translate-y-px"
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
    >
      {isDarkMode ? "Light" : "Dark"}
    </button>
  );
}
