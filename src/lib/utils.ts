import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ScreenSize } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getIsScreenMobile(screenWidth: number) {
  return screenWidth <= (ScreenSize.md as number) ? true : false;
}
