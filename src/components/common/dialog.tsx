import { XIcon } from '@phosphor-icons/react';
import type { DialogHTMLAttributes, FC, ReactNode, RefObject } from 'react';

import { cn } from '@/utils/cn';

export interface CommonDialogProps
  extends DialogHTMLAttributes<HTMLDialogElement> {
  ref?: RefObject<HTMLDialogElement | null>;
  icon?: ReactNode;
  title?: string;
  description?: string;
}

export const CommonDialog: FC<CommonDialogProps> = ({
  title,
  description,
  icon,
  children,
  className,
  ...rest
}) => {
  return (
    <dialog className={cn('modal', className)} {...rest}>
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-circle btn-ghost btn-sm absolute top-2 right-2"
            type="button"
          >
            <XIcon />
          </button>
        </form>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            {icon}
            <h3 className="font-bold text-lg">{title}</h3>
          </div>
          <span className="text-muted text-sm">{description}</span>
        </div>
        {children}
      </div>
      <form className="modal-backdrop" method="dialog">
        <button type="button" />
      </form>
    </dialog>
  );
};

CommonDialog.displayName = 'CommonDialog';
