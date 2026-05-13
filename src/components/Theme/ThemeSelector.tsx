"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Palette } from "lucide-react";
import { useTheme } from "./UseTheme";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function ThemeSelector() {
  const [themeColor, setTheme] = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Temas</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={cn("cursor-pointer", themeColor === "default" && "border-gray-600")}
          onClick={() => setTheme("default")}
        >
          <div className="flex gap-2">
            <div className="bg-gray-600 aspect-square w-5 rounded-sm" />
            <span>Padrão</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("orange")}
          className={cn("cursor-pointer", themeColor === "orange" && "border-orange-400")}
        >
          <div className="flex gap-2">
            <div className="bg-orange-400 aspect-square w-5 rounded-sm" />
            <span>Laranja</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn("cursor-pointer", themeColor === "green" && "border-green-600")}
          onClick={() => setTheme("green")}
        >
          <div className="flex gap-2">
            <div className="bg-green-600 aspect-square w-5 rounded-sm" />
            <span>Verde</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn("cursor-pointer", themeColor === "red" && "border-red-600")}
          onClick={() => setTheme("red")}
        >
          <div className="flex gap-2">
            <div className="bg-red-600 aspect-square w-5 rounded-sm" />
            <span>Vermelho</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn("cursor-pointer", themeColor === "violet" && "border-violet-600")}
          onClick={() => setTheme("violet")}
        >
          <div className="flex gap-2">
            <div className="bg-violet-600 aspect-square w-5 rounded-sm" />
            <span>Violeta</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
