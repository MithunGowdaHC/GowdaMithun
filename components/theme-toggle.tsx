"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-10 h-10 rounded-full">
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-10 h-10 rounded-full hover:bg-gradient-to-r hover:from-orange-100 hover:to-blue-100 dark:hover:from-slate-800 dark:hover:to-slate-700 transition-all duration-300 border border-transparent hover:border-orange-200 dark:hover:border-slate-600"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-slate-700 dark:text-slate-300 transition-transform hover:rotate-12" />
      ) : (
        <Sun className="h-5 w-5 text-orange-500 dark:text-yellow-400 transition-transform hover:rotate-12" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
