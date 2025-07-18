import { QuotesIcon } from '@phosphor-icons/react';

import type { FC, HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export interface CommonQuotesProps extends HTMLAttributes<HTMLDivElement> {}

export const CommonQuotes: FC<CommonQuotesProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn('flex gap-2 text-center font-medium sm:gap-4', className)}
      {...rest}
    >
      <QuotesIcon
        className="-scale-x-100 mb-auto text-3xl text-accent"
        weight="fill"
      />
      <p className="flex-1 pt-2 text-accent text-lg">{children}</p>
      <QuotesIcon className="mt-auto text-3xl text-accent" weight="fill" />
    </div>
  );
};

CommonQuotes.displayName = 'CommonQuotes';
