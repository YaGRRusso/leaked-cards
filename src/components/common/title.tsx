import { Link, LinkComponentProps } from "@tanstack/react-router"

import type { FC, ReactNode } from "react"

import { cn } from "@/utils/cn"

export interface CommonTitleProps extends LinkComponentProps {
  icon?: ReactNode
  title?: string
}

export const CommonTitle: FC<CommonTitleProps> = ({ icon, title, className, hash, ...rest }) => {
  return (
    <Link
      id={typeof hash === "string" ? hash : undefined}
      hash={hash}
      className={cn(
        "mb-4 flex link items-center gap-2 border-b border-base-content/20 py-4 text-xl font-medium tracking-wider link-hover",
        className,
      )}
      {...rest}
    >
      {icon}
      <h2 className="flex-1">{title}</h2>
    </Link>
  )
}

CommonTitle.displayName = "CommonTitle"
