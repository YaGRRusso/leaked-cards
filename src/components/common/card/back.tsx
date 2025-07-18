import type { FC, HTMLAttributes } from 'react';
import { mask } from '@/helpers/mask';
import { cn } from '@/utils/cn';
import { CardBase } from './base';

export interface CardBackProps extends HTMLAttributes<HTMLDivElement> {
  cvv?: string;
}

export const CardBack: FC<CardBackProps> = ({ className, cvv, ...rest }) => {
  return (
    <CardBase className={cn('py-4', className)} {...rest}>
      <div className="h-12 w-full bg-black" />
      <div className="flex p-4">
        <div className="flex h-12 w-2/3 items-center justify-end rounded bg-[length:100%_20%] bg-gradient-to-b from-30% from-white via-50% via-[#fff085] to-70% to-white p-4 text-black text-xl">
          <span className="tracking-[0.5rem]">
            {
              mask({ mask: '000', lazy: false, placeholderChar: '•' }, cvv)
                .value
            }
          </span>
        </div>
      </div>
    </CardBase>
  );
};

CardBack.displayName = 'CardBack';
