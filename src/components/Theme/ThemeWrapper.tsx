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
  if (themeColor) {
    document.body.className = `theme-${themeColor}`;
  }
  return () => {
    document.body.className = '';
  };
}, [themeColor]);

  return <div className={cn(themeColor && `theme-${themeColor}`)} id="cont">{children}</div>
}