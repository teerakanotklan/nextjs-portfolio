"use client";

import { ThemeProvider as NexThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return <NexThemesProvider {...props}>{children}</NexThemesProvider>;
}
