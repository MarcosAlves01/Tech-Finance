"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Garante que só renderiza depois de montado no cliente
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="border inline-flex gap-2 p-1 rounded-sm">
        {theme !== "light" ? (
          <Sun size={16} className="text-gray-400" />
        ) :
          <Moon size={16} className="text-gray-400" />
        }
      </div>
    )
  }
  
  return (
      <div className="border inline-flex gap-2 p-1 rounded-sm">
        {theme !== "light" ? (
          <Sun size={16} className={`cursor-pointer ${theme == "dark" ? 'text-black hover:text-black' : 'dark:hover:text-white text-gray-400' }`} onClick={() => setTheme("light")}/>
        ) : 
          <Moon size={16} className={`cursor-pointer ${theme !== "light" ? 'text-white dark:hover:text-white' : 'text-gray-400 hover:text-black' }`} onClick={() => setTheme("dark")}/>
        }
      </div>
  )
}
