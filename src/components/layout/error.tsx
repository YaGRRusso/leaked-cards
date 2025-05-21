import { CommonHero } from "../common/hero"

import { WarningIcon } from "@phosphor-icons/react"
import { ErrorRouteComponent } from "@tanstack/react-router"

import type { HTMLAttributes } from "react"

import { useTranslation } from "@/utils/i18n"

export interface LayoutErrorProps extends HTMLAttributes<HTMLDivElement> {}

export const LayoutError: ErrorRouteComponent = ({ reset, error, ...rest }) => {
  const { t } = useTranslation()

  return (
    <main className="container flex min-h-screen flex-col items-center justify-center gap-4" {...rest}>
      <CommonHero icon={<WarningIcon className="text-error" />} title={error.name} description={error.message}>
        <button className="btn btn-soft" onClick={reset}>
          {t("components.tryAgain")}
        </button>
      </CommonHero>
    </main>
  )
}
