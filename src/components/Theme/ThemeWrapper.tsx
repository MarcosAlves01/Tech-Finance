"use client"

import "@/components/Theme/Theme.css"
import { useEffect } from "react"
import { useTheme } from "./UseTheme"
import { cn } from "@/lib/utils"

export function ThemeWrapper({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [themeColor] = useTheme()
useEffect(() => {
  document.body.classList.forEach((cls) => {
    if (cls.startsWith('theme-')) document.body.classList.remove(cls);
  });
  if (themeColor) {
    document.body.classList.add(`theme-${themeColor}`);
  }
}, [themeColor]);

  return <div className={cn(themeColor && `theme-${themeColor}`)} id="cont">{children}</div>
}