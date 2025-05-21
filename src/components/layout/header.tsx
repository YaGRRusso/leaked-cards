import { CreditCardIcon, GithubLogoIcon, MoonStarsIcon, SunIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"

import type { FC, HTMLAttributes } from "react"

import { Langs } from "@/i18n"
import useThemeStore from "@/stores/useTheme"
import { useTranslation } from "@/utils/i18n"

const langs: { label: string; value: Langs }[] = [
  {
    label: "Português (PT)",
    value: "pt",
  },
  {
    label: "English (EN)",
    value: "en",
  },
]

export interface LayoutHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const LayoutHeader: FC<LayoutHeaderProps> = ({ ...rest }) => {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useThemeStore()

  return (
    <header className="sticky top-0 z-10 bg-base-200" {...rest}>
      <div className="container flex items-center justify-between gap-x-8 gap-y-2 shadow max-sm:flex-col">
        <Link to="/" className="flex items-center gap-2">
          <CreditCardIcon />
          <h1 className="text-xl font-medium">{t("components.leakedCards")}</h1>
        </Link>

        <div className="flex items-center gap-2 max-sm:flex-1 max-sm:justify-center">
          <label className="toggle border-input text-base-content">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(ev) => setTheme(ev.target.checked ? "dark" : "light")}
            />
            <SunIcon />
            <MoonStarsIcon />
          </label>

          <select
            className="select rounded-xl select-xs"
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            value={i18n.language}
          >
            <option value="none" disabled>
              {t("components.changeLanguage")}
            </option>
            {langs.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>

          <a
            href="https://github.com/YaGRRusso/leaked-card"
            target="_blank"
            className="btn btn-circle border-input btn-outline btn-xs"
          >
            <GithubLogoIcon />
          </a>
        </div>
      </div>
    </header>
  )
}

LayoutHeader.displayName = "LayoutHeader"
