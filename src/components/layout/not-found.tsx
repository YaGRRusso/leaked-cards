import { CommonHero } from "../common/hero"

import { QuestionIcon } from "@phosphor-icons/react"
import { Link, NotFoundRouteComponent } from "@tanstack/react-router"

import type { HTMLAttributes } from "react"

import { useTranslation } from "@/utils/i18n"

export interface LayoutNotFoundProps extends HTMLAttributes<HTMLDivElement> {}

export const LayoutNotFound: NotFoundRouteComponent = ({ ...rest }) => {
  const { t } = useTranslation()

  return (
    <main className="container flex min-h-screen flex-col items-center justify-center gap-4" {...rest}>
      <CommonHero
        icon={<QuestionIcon className="text-warning" />}
        title={t("components.nothingFound")}
        description={t("components.nothingFoundDescription")}
      >
        <Link className="btn btn-soft" to="/">
          {t("components.backToStart")}
        </Link>
      </CommonHero>
    </main>
  )
}
