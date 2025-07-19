import { Slot } from '@radix-ui/react-slot';
import type { FC, HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/utils/cn';
import { CommonTrans } from './trans';

export interface CommonHeroProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  title?: string;
  description?: string;
}

export const CommonHero: FC<CommonHeroProps> = ({
  icon,
  title,
  description,
  children,
  className,
  ...rest
}) => {
  return (
    <div className={cn('hero', className)} {...rest}>
      <div className="hero-content flex-col px-0 text-center">
        {icon && <Slot className="text-7xl">{icon}</Slot>}
        <h1 className="font-bold text-4xl tracking-wider sm:text-5xl">
          <CommonTrans className="[&_strong]:font-extrabold [&_strong]:text-accent [&_strong]:uppercase">
            {title}
          </CommonTrans>
        </h1>
        {description && <p className="max-w-3xl text-muted">{description}</p>}
        {children}
      </div>
    </div>
  );
};

CommonHero.displayName = 'CommonHero';
