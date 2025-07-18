import type { AnchorHTMLAttributes, FC, ReactNode } from 'react';

import { cn } from '@/utils/cn';

export interface CommonTitleProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
  title?: string;
}

export const CommonTitle: FC<CommonTitleProps> = ({
  icon,
  title,
  className,
  ...rest
}) => {
  return (
    <a
      className={cn(
        'link link-hover mb-4 flex items-center gap-2 border-base-content/20 border-b py-4 font-medium text-xl tracking-wider',
        className
      )}
      {...rest}
    >
      {icon}
      <h2 className="flex-1">{title}</h2>
    </a>
  );
};

CommonTitle.displayName = 'CommonTitle';
