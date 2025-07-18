import { Slot } from '@radix-ui/react-slot';
import type { FC, HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/utils/cn';

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
          {/* <Trans components={{ strong: <strong className="font-extrabold text-accent uppercase" /> }}>{title}</Trans> */}
          <span>{title}</span>
        </h1>
        {description && <p className="max-w-3xl text-muted">{description}</p>}
        {children}
      </div>
    </div>
  );
};

CommonHero.displayName = 'CommonHero';
