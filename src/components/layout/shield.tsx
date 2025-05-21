import { ShieldCheckIcon } from "@phosphor-icons/react"

import type { FC, HTMLAttributes } from "react"

import { cn } from "@/utils/cn"
import { useTranslation } from "@/utils/i18n"

export interface LayoutShieldProps extends HTMLAttributes<HTMLDivElement> {}

export const LayoutShield: FC<LayoutShieldProps> = ({ className, ...rest }) => {
  const { t } = useTranslation()

  return (
    <div className={cn("fixed right-2 bottom-2 z-10", className)} {...rest}>
      <div className="max-sm:tooltip max-sm:tooltip-left">
        <div className="tooltip-content sm:hidden">
          <div className="flex flex-col">
            <span className="font-medium">{t("components.trustedSite")}</span>
            <span className="font-light">{t("components.trustedSiteDescription")}</span>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2 rounded text-xs transition-all hover:opacity-100 max-xl:opacity-40 sm:bg-base-200 sm:p-2">
          <ShieldCheckIcon size={32} weight="fill" className="text-success" />
          <div className="hidden flex-col sm:flex">
            <span className="font-medium">{t("components.trustedSite")}</span>
            <span className="font-light text-muted">{t("components.trustedSiteDescription")}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

LayoutShield.displayName = "LayoutShield"
