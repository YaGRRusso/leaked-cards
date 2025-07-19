import type { FC, HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

import { CommonTrans } from './trans';

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
            <CommonTrans className="[&_strong]:font-extrabold [&_strong]:text-accent">
              {item.text}
            </CommonTrans>
          </span>
        </li>
      ))}
    </ul>
  );
};

CommonCheckList.displayName = 'CommonCheckList';
