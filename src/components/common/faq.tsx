import { QuestionIcon } from '@phosphor-icons/react';
import type { FC, HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';
import { useTranslation } from '@/utils/i18n';
import { CommonTitle } from './title';

export interface CommonFaqProps extends HTMLAttributes<HTMLUListElement> {
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export const CommonFaq: FC<CommonFaqProps> = ({ faqs, className, ...rest }) => {
  const { t } = useTranslation();

  return (
    <ul className={cn('flex w-full flex-col gap-4', className)} {...rest}>
      <CommonTitle
        href="#faq"
        icon={<QuestionIcon />}
        id="faq"
        title={t('components.faq')}
      />
      {faqs?.map((faq, index) => (
        <li className="collapse rounded bg-base-200/60" key={faq.question}>
          <input defaultChecked={index === 0} name="accordion" type="radio" />
          <div className="collapse-title font-semibold">{faq.question}</div>
          <div className="collapse-content text-muted text-sm">
            {faq.answer}
          </div>
        </li>
      ))}
    </ul>
  );
};

CommonFaq.displayName = 'CommonFaq';
