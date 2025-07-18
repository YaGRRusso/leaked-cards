import type { FC, HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export interface CommonCheckListProps extends HTMLAttributes<HTMLUListElement> {
  list?: {
    text: string;
  }[];
}

export const CommonCheckList: FC<CommonCheckListProps> = ({
  list,
  className,
  ...rest
}) => {
  return (
    <ul className={cn('flex flex-col gap-4', className)} {...rest}>
      {list?.map((item) => (
        <li className="flex gap-2" key={item.text}>
          <span>
            {/* <Trans components={{ strong: <strong className="font-extrabold text-accent" /> }}>{item.text}</Trans> */}
            <span>{item.text}</span>
          </span>
        </li>
      ))}
    </ul>
  );
};

CommonCheckList.displayName = 'CommonCheckList';
