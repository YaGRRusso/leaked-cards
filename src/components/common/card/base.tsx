import type { FC, HTMLAttributes } from "react"

import { cn } from "@/utils/cn"

export interface CardBaseProps extends HTMLAttributes<HTMLDivElement> {}

export const CardBase: FC<CardBaseProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={cn("flex h-full w-full flex-col gap-4 rounded bg-base-300 font-mono text-base-content", className)}
      {...rest}
    >
      {children}
    </div>
  )
}

CardBase.displayName = "CardBase"
