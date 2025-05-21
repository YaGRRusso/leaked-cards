import type { FC, HTMLAttributes } from "react"

import { useTranslation } from "@/utils/i18n"

export interface LayoutFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const LayoutFooter: FC<LayoutFooterProps> = ({ ...rest }) => {
  const { t } = useTranslation()

  return (
    <footer className="bg-base-200" {...rest}>
      <div className="container flex items-center justify-center">
        <span className="text-center text-sm">
          {t("components.createdBy")}{" "}
          <a className="link link-accent link-hover" href="https://github.com/YaGRRusso" target="_blank">
            Yago Russo
          </a>
        </span>
      </div>
    </footer>
  )
}

LayoutFooter.displayName = "LayoutFooter"
