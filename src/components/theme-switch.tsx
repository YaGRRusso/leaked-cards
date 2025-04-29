import { useStore } from "@nanostores/react"
import { Moon, Sun } from "@phosphor-icons/react"
import { useEffect, useState, type LabelHTMLAttributes } from "react"

import { $theme } from "@/stores/theme"
import { cn } from "@/utils/cn"

export interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  currentTheme?: string
}

export function ThemeSwitch({ className, currentTheme = "light", ...props }: Props) {
  const theme = useStore($theme)

  const [checked, setChecked] = useState(currentTheme === "dark")
  useEffect(() => setChecked(theme === "dark"), [theme])

  return (
    <label className={cn("toggle text-base-content", className)} {...props}>
      <span className="hidden">Theme Switcher</span>
      <input type="checkbox" checked={checked} onChange={(ev) => $theme.set(ev.target.checked ? "dark" : "light")} />
      <Moon className="text-black" />
      <Sun className="text-white" />
    </label>
  )
}
