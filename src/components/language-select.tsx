import { getRelativeLocaleUrl } from "astro:i18n"
import { useCallback, type HTMLAttributes } from "react"

import { cn } from "@/utils/cn"
import { useTranslation, type Locale } from "@/utils/i18n"

const BASE_URL = import.meta.env.PUBLIC_BASE_URL

interface Props extends HTMLAttributes<HTMLDivElement> {
  currentPath?: string
}

const locales: { value: Locale; label: string }[] = [
  { label: "🇧🇷 Português (PT)", value: "pt" },
  { label: "🇺🇸 English (EN)", value: "en" },
]

export function LanguageSelect({ className, currentPath = "/", ...props }: Props) {
  const { locale } = useTranslation()

  const getRedirect = useCallback(
    (newLocale: string) => {
      const parsedPath = currentPath.replace(BASE_URL, "").replace(/^\/(en|pt)/, "")
      return getRelativeLocaleUrl(newLocale, parsedPath)
    },
    [currentPath],
  )

  return (
    <div className={cn("dropdown dropdown-center", className)} {...props}>
      <button tabIndex={0} role="button" className="btn">
        <span className="ellipsis">{locales.find((lang) => lang.value === locale)?.label ?? locale}</span>
      </button>
      <ul tabIndex={0} className="dropdown-content menu w-40 rounded-box bg-base-200">
        {locales.map((lang) => (
          <li key={lang.value}>
            <a href={getRedirect(lang.value)}>{lang.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
