import { XIcon } from "@phosphor-icons/react"
import { ReactNode } from "@tanstack/react-router"

import type { DialogHTMLAttributes, FC, RefObject } from "react"

import { cn } from "@/utils/cn"

export interface CommonDialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  ref?: RefObject<HTMLDialogElement | null>
  icon?: ReactNode
  title?: string
  description?: string
}

export const CommonDialog: FC<CommonDialogProps> = ({ title, description, icon, children, className, ...rest }) => {
  return (
    <dialog className={cn("modal", className)} {...rest}>
      <div className="modal-box">
        <form method="dialog">
          <button className="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm">
            <XIcon />
          </button>
        </form>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            {icon}
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
          <span className="text-sm text-muted">{description}</span>
        </div>
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button />
      </form>
    </dialog>
  )
}

CommonDialog.displayName = "CommonDialog"
