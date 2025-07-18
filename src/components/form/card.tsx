import { zodResolver } from '@hookform/resolvers/zod';
import { type FC, type FormHTMLAttributes, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { mask } from '@/helpers/mask';
import { cn } from '@/utils/cn';
import { useTranslation } from '@/utils/i18n';

const cardholderNameMask = /^[a-zA-Z\s]+$/;
const cardNumberMask = '0000 0000 0000 0000';
const cardCvvMask = '000';
const cardExpiryMonthMask = '00';
const cardExpiryYearMask = '00';

const formSchema = z.object({
  cardholderName: z
    .string()
    .min(1, 'required')
    .min(3, 'min')
    .regex(cardholderNameMask, 'invalid'),
  cardNumber: z.string().min(1, 'required').length(16, 'length'),
  cardCvv: z.string().min(1, 'required').length(3, 'length'),
  cardExpiryMonth: z
    .string()
    .min(1, 'required')
    .length(2, 'length')
    .refine((val) => {
      const month = Number.parseInt(val, 10);
      return month >= 1 && month <= 12;
    }, 'invalid'),
  cardExpiryYear: z
    .string()
    .min(1, 'required')
    .length(2, 'length')
    .refine((val) => {
      const year = Number.parseInt(val, 10);
      const currentYear = new Date().getFullYear() % 100;
      return year >= currentYear && year <= currentYear + 20;
    }, 'invalid'),
});

export type FormsCardSchemaProps = z.infer<typeof formSchema>;

export interface FormsCardProps extends FormHTMLAttributes<HTMLFormElement> {
  onFormSubmit?: (data?: FormsCardSchemaProps) => void;
  onFormChange?: (data?: FormsCardSchemaProps) => void;
  onShouldFlip?: (shouldFlip: boolean) => void;
}

export const FormsCard: FC<FormsCardProps> = ({
  className,
  onShouldFlip,
  onFormChange,
  onFormSubmit,
  ...rest
}) => {
  const { t } = useTranslation();

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormsCardSchemaProps>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardholderName: '',
      cardNumber: '',
      cardCvv: '',
      cardExpiryMonth: '',
      cardExpiryYear: '',
    },
  });

  const cardholderName = watch('cardholderName');
  const cardNumber = watch('cardNumber');
  const cardCvv = watch('cardCvv');
  const cardExpiryMonth = watch('cardExpiryMonth');
  const cardExpiryYear = watch('cardExpiryYear');

  useEffect(() => {
    onFormChange?.({
      cardholderName,
      cardNumber,
      cardCvv,
      cardExpiryMonth,
      cardExpiryYear,
    });
  }, [
    onFormChange,
    cardholderName,
    cardNumber,
    cardCvv,
    cardExpiryMonth,
    cardExpiryYear,
  ]);

  return (
    <form
      className={cn('w-full', className)}
      onSubmit={handleSubmit((ev) => onFormSubmit?.(ev))}
      {...rest}
    >
      <fieldset className="fieldset">
        <legend className="fieldset-legend">
          {t('forms.card.cardholderName')}
        </legend>
        <input
          className="input w-full"
          onChange={(ev) =>
            setValue(
              'cardholderName',
              mask(cardholderNameMask, ev.target.value).unmaskedValue,
              {
                shouldValidate: true,
              }
            )
          }
          placeholder={t('forms.card.cardholderName')}
          type="text"
          value={mask(cardholderNameMask, watch('cardholderName')).value}
        />
        {errors.cardholderName?.message && (
          <p className="fieldset-label text-error">
            {t(errors.cardholderName.message)}
          </p>
        )}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">
          {t('forms.card.cardNumber')}
        </legend>
        <input
          className="input w-full"
          onChange={(ev) =>
            setValue(
              'cardNumber',
              mask(cardNumberMask, ev.target.value).unmaskedValue,
              { shouldValidate: true }
            )
          }
          placeholder={t('forms.card.cardNumber')}
          type="text"
          value={mask(cardNumberMask, watch('cardNumber')).value}
        />
        {errors.cardNumber?.message && (
          <p className="fieldset-label text-error">
            {t(errors.cardNumber.message)}
          </p>
        )}
      </fieldset>

      <div className="flex gap-4">
        <fieldset className="fieldset flex-1">
          <legend className="fieldset-legend">
            {t('forms.card.cardExpiryMonth')}
          </legend>
          <input
            className="input w-full"
            onChange={(ev) =>
              setValue(
                'cardExpiryMonth',
                mask(cardExpiryMonthMask, ev.target.value).unmaskedValue,
                {
                  shouldValidate: true,
                }
              )
            }
            placeholder={t('forms.card.cardExpiryMonthPlaceholder')}
            type="text"
            value={mask(cardExpiryMonthMask, watch('cardExpiryMonth')).value}
          />
          {errors.cardExpiryMonth?.message && (
            <p className="fieldset-label text-error">
              {t(errors.cardExpiryMonth.message)}
            </p>
          )}
        </fieldset>

        <fieldset className="fieldset flex-1">
          <legend className="fieldset-legend">
            {t('forms.card.cardExpiryYear')}
          </legend>
          <input
            className="input w-full"
            onChange={(ev) =>
              setValue(
                'cardExpiryYear',
                mask(cardExpiryYearMask, ev.target.value).unmaskedValue,
                {
                  shouldValidate: true,
                }
              )
            }
            placeholder={t('forms.card.cardExpiryYearPlaceholder')}
            type="text"
            value={mask(cardExpiryYearMask, watch('cardExpiryYear')).value}
          />
          {errors.cardExpiryYear?.message && (
            <p className="fieldset-label text-error">
              {t(errors.cardExpiryYear.message)}
            </p>
          )}
        </fieldset>
      </div>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">{t('forms.card.cardCvv')}</legend>
        <input
          className="input w-full"
          onBlur={() => onShouldFlip?.(false)}
          onChange={(ev) =>
            setValue(
              'cardCvv',
              mask(cardCvvMask, ev.target.value).unmaskedValue,
              { shouldValidate: true }
            )
          }
          onFocus={() => onShouldFlip?.(true)}
          placeholder={t('forms.card.cardCvvPlaceholder')}
          type="text"
          value={mask(cardCvvMask, watch('cardCvv')).value}
        />
        {errors.cardCvv?.message && (
          <p className="fieldset-label text-error">
            {t(errors.cardCvv.message)}
          </p>
        )}
      </fieldset>

      <button
        className="btn btn-success mt-4 w-full"
        disabled={!isValid}
        type="submit"
      >
        {t('forms.card.submit')}
      </button>
    </form>
  );
};

FormsCard.displayName = 'FormsCard';
