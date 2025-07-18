import { Slot } from '@radix-ui/react-slot';

import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { cn } from '@/utils/cn';

export interface CommonFlipperProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isFlipped?: boolean;
  isHoverable?: boolean;
  children: [ReactNode, ReactNode];
}

export const CommonFlipper: FC<CommonFlipperProps> = ({
  children,
  isFlipped,
  isHoverable,
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(
        'transform-3d relative flex h-full w-full select-none items-center justify-center text-center transition-all duration-500',
        isHoverable && 'hover:rotate-y-180',
        isFlipped && 'rotate-y-180',
        className
      )}
      {...rest}
    >
      <Slot className="backface-hidden absolute overflow-hidden">
        {children[0]}
      </Slot>
      <Slot className="backface-hidden absolute rotate-y-180 overflow-hidden">
        {children[1]}
      </Slot>
    </button>
  );
};

CommonFlipper.displayName = 'CommonFlipper';
