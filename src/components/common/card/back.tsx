import { CardBase } from "./base"

import type { FC, HTMLAttributes } from "react"

import { mask } from "@/helpers/mask"
import { cn } from "@/utils/cn"

export interface CardBackProps extends HTMLAttributes<HTMLDivElement> {
  cvv?: string
}

export const CardBack: FC<CardBackProps> = ({ className, cvv, ...rest }) => {
  return (
    <CardBase className={cn("py-4", className)} {...rest}>
      <div className="h-12 w-full bg-black" />
      <div className="flex p-4">
        <div className="flex h-12 w-2/3 items-center justify-end rounded bg-gradient-to-b from-white from-30% via-[#fff085] via-50% to-white to-70% bg-[length:100%_20%] p-4 text-xl text-black">
          <span className="tracking-[0.5rem]">
            {mask({ mask: "000", lazy: false, placeholderChar: "•" }, cvv).value}
          </span>
        </div>
      </div>
    </CardBase>
  )
}

CardBack.displayName = "CardBack"
