import { CpuIcon } from '@phosphor-icons/react';
import { type FC, type HTMLAttributes, useMemo } from 'react';
import AmericanExpressIcon from '@/assets/americanexpress.svg';
import DinersClubIcon from '@/assets/dinersclub.svg';
import JcbIcon from '@/assets/jcb.svg';
import MastercardIcon from '@/assets/mastercard.svg';
import VisaIcon from '@/assets/visa.svg';
import { CardBrand, getCardBrand } from '@/helpers/get-card-brand';
import { mask } from '@/helpers/mask';
import { cn } from '@/utils/cn';
import { useTranslation } from '@/utils/i18n';
import { CardBase } from './base';

export interface CardFrontProps extends HTMLAttributes<HTMLDivElement> {
  number?: string;
  name?: string;
  expiryMonth?: string;
  expiryYear?: string;
}

export const CardFront: FC<CardFrontProps> = ({
  number,
  name,
  expiryMonth,
  expiryYear,
  className,
  ...rest
}) => {
  const { t } = useTranslation();

  const cardFlag = useMemo(() => {
    const brand = getCardBrand(number);

    switch (brand) {
      case CardBrand.AmericanExpress:
        return <img alt="American Express" src={AmericanExpressIcon.src} />;
      case CardBrand.DinersClub:
        return <img alt="Diners Club" src={DinersClubIcon.src} />;
      case CardBrand.JCB:
        return <img alt="JCB" src={JcbIcon.src} />;
      case CardBrand.Mastercard:
        return <img alt="Mastercard" src={MastercardIcon.src} />;
      case CardBrand.Visa:
        return <img alt="Visa" src={VisaIcon.src} />;
      default:
        return null;
    }
  }, [number]);

  return (
    <CardBase className={cn('justify-between p-4', className)} {...rest}>
      <div className="flex items-center justify-between">
        <div className="flex h-8 w-10 items-center justify-center overflow-hidden rounded bg-[#f0b100]">
          <CpuIcon className="h-16 w-16 opacity-40" />
        </div>
        <div className="flex h-12 w-16 items-center justify-end">
          {cardFlag ? (
            cardFlag
          ) : (
            <div className="skeleton h-full w-full bg-base-200" />
          )}
        </div>
      </div>
      <div className="text-xl sm:text-2xl sm:tracking-[0.5rem]">
        <span>
          {
            mask(
              {
                mask: '0000 0000 0000 0000',
                lazy: false,
                placeholderChar: '•',
              },
              number
            ).value
          }
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="uppercase">
          {name || t('forms.card.cardholderNamePlaceholder')}
        </span>
        <span>
          {expiryMonth || t('forms.card.cardExpiryMonthPlaceholder')}
          {'/'}
          {expiryYear || t('forms.card.cardExpiryYearPlaceholder')}
        </span>
      </div>
    </CardBase>
  );
};

CardFront.displayName = 'CardFront';
