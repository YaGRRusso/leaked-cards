import { QuestionIcon, UsersIcon } from '@phosphor-icons/react';
import { type HTMLAttributes, useCallback, useRef, useState } from 'react';
import { CommonCard } from '@/components/common/card';
import { CommonDialog } from '@/components/common/dialog';
import { CommonFaq } from '@/components/common/faq';
import { CommonFlipper } from '@/components/common/flipper';
import { CommonHero } from '@/components/common/hero';
import { CommonStats } from '@/components/common/stats';
import { CommonTestimonials } from '@/components/common/testimonials';
import { FormsCard, type FormsCardSchemaProps } from '@/components/form/card';
import { getPath } from '@/helpers/get-path';
import { getRandomNumber } from '@/helpers/get-random-number';
import { cn } from '@/utils/cn';
import { useTranslation } from '@/utils/i18n';

export interface HomeProps extends HTMLAttributes<HTMLDivElement> {}

export function HomeClient({ children, className, ...props }: HomeProps) {
  const { t } = useTranslation();

  const [isFlipped, setIsFlipped] = useState(false);
  const [values, setValues] = useState<FormsCardSchemaProps>();
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleSubmit = useCallback(() => {
    modalRef.current?.showModal();

    setTimeout(() => {
      window.location.href = getPath(window.location.pathname, '/result');
    }, 5000);
  }, []);

  return (
    <div
      className={cn(
        'flex min-h-screen flex-col items-center justify-center gap-8 sm:gap-16',
        className
      )}
      {...props}
    >
      <CommonHero
        description={t('homePage.heroDescription')}
        title={t('homePage.hero')}
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a className="btn btn-soft btn-xs sm:btn-sm" href="#faq">
            <QuestionIcon className="mb-1" />
            {t('homePage.faq')}
          </a>
          <a className="btn btn-soft btn-xs sm:btn-sm" href="#testimonials">
            <UsersIcon className="mb-1" />
            {t('homePage.testimonials')}
          </a>
        </div>
      </CommonHero>

      <CommonFlipper
        className="aspect-video w-full max-w-3xl"
        isFlipped={isFlipped}
        onClick={() => setIsFlipped((old) => !old)}
      >
        <CommonCard.Front
          expiryMonth={values?.cardExpiryMonth}
          expiryYear={values?.cardExpiryYear}
          name={values?.cardholderName}
          number={values?.cardNumber}
        />
        <CommonCard.Back cvv={values?.cardCvv} />
      </CommonFlipper>

      <FormsCard
        className="max-w-3xl"
        onFormChange={setValues}
        onFormSubmit={handleSubmit}
        onShouldFlip={setIsFlipped}
      />

      <CommonFaq
        faqs={[
          {
            question: t('homePage.faqList.faq1.question'),
            answer: t('homePage.faqList.faq1.answer'),
          },
          {
            question: t('homePage.faqList.faq2.question'),
            answer: t('homePage.faqList.faq2.answer'),
          },
          {
            question: t('homePage.faqList.faq3.question'),
            answer: t('homePage.faqList.faq3.answer'),
          },
          {
            question: t('homePage.faqList.faq4.question'),
            answer: t('homePage.faqList.faq4.answer'),
          },
          {
            question: t('homePage.faqList.faq5.question'),
            answer: t('homePage.faqList.faq5.answer'),
          },
        ]}
      />

      <CommonStats
        stats={[
          {
            title: t('homePage.statsList.checkedCards'),
            description: t('homePage.statsList.checkedCardsDescription'),
            value: getRandomNumber(50_000, 500_000).toLocaleString(),
          },
          {
            title: t('homePage.statsList.leakedCards'),
            description: t('homePage.statsList.leakedCardsDescription'),
            value: `${getRandomNumber(10, 20)}%`,
          },
        ]}
      />

      <CommonTestimonials
        testimonials={[
          {
            name: t('homePage.testimonialsList.testimonial1.name'),
            role: t('homePage.testimonialsList.testimonial1.role'),
            image: t('homePage.testimonialsList.testimonial1.image'),
            text: t('homePage.testimonialsList.testimonial1.text'),
          },
          {
            name: t('homePage.testimonialsList.testimonial2.name'),
            role: t('homePage.testimonialsList.testimonial2.role'),
            image: t('homePage.testimonialsList.testimonial2.image'),
            text: t('homePage.testimonialsList.testimonial2.text'),
          },
          {
            name: t('homePage.testimonialsList.testimonial3.name'),
            role: t('homePage.testimonialsList.testimonial3.role'),
            image: t('homePage.testimonialsList.testimonial3.image'),
            text: t('homePage.testimonialsList.testimonial3.text'),
          },
        ]}
      />

      <CommonDialog
        description={t('homePage.checkingCardDescription')}
        // open={false}
        icon={<span className="loading loading-xs loading-ring" />}
        ref={modalRef}
        title={t('homePage.checkingCard')}
      >
        <progress className="progress mt-8 w-full" />
      </CommonDialog>
    </div>
  );
}
