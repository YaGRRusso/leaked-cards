import { Slot } from "@radix-ui/react-slot"

import type { ButtonHTMLAttributes, FC, ReactNode } from "react"

import { cn } from "@/utils/cn"

export interface CommonFlipperProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isFlipped?: boolean
  isHoverable?: boolean
  children: [ReactNode, ReactNode]
}

export const CommonFlipper: FC<CommonFlipperProps> = ({ children, isFlipped, isHoverable, className, ...rest }) => {
  return (
    <button
      className={cn(
        "relative flex h-full w-full items-center justify-center text-center transition-all duration-500 select-none transform-3d",
        isHoverable && "hover:rotate-y-180",
        isFlipped && "rotate-y-180",
        className,
      )}
      {...rest}
    >
      <Slot className="absolute overflow-hidden backface-hidden">{children[0]}</Slot>
      <Slot className="absolute rotate-y-180 overflow-hidden backface-hidden">{children[1]}</Slot>
    </button>
  )
}

CommonFlipper.displayName = "CommonFlipper"
