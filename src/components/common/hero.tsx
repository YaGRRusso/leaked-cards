import { Slot } from "@radix-ui/react-slot"
import { ReactNode } from "@tanstack/react-router"
import { Trans } from "react-i18next"

import type { FC, HTMLAttributes } from "react"

import { cn } from "@/utils/cn"

export interface CommonHeroProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode
  title?: string
  description?: string
}

export const CommonHero: FC<CommonHeroProps> = ({ icon, title, description, children, className, ...rest }) => {
  return (
    <div className={cn("hero", className)} {...rest}>
      <div className="hero-content flex-col px-0 text-center">
        {icon && <Slot className="text-7xl">{icon}</Slot>}
        <h1 className="text-4xl font-bold tracking-wider sm:text-5xl">
          <Trans components={{ strong: <strong className="font-extrabold text-accent uppercase" /> }}>{title}</Trans>
        </h1>
        {description && <p className="max-w-3xl text-muted">{description}</p>}
        {children}
      </div>
    </div>
  )
}

CommonHero.displayName = "CommonHero"
