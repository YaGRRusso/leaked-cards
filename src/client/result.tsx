import {
  CopyIcon,
  InfoIcon,
  MagnifyingGlassIcon,
  QuestionIcon,
  ShareIcon,
  TelegramLogoIcon,
  TwitterLogoIcon,
  WhatsappLogoIcon,
} from '@phosphor-icons/react';
import type { HTMLAttributes } from 'react';
import gov from '@/assets/gov.png';
import { CommonCheckList } from '@/components/common/check-list';
import { CommonHero } from '@/components/common/hero';
import { CommonQuotes } from '@/components/common/quotes';
import { CommonTitle } from '@/components/common/title';
import { cn } from '@/utils/cn';
import { useTranslation } from '@/utils/i18n';

export interface ResultProps extends HTMLAttributes<HTMLDivElement> {}

export function ResultClient({ children, className, ...props }: ResultProps) {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        'flex min-h-screen flex-col items-center justify-center gap-8 sm:gap-12',
        className
      )}
      {...props}
    >
      <CommonHero
        description={t('resultPage.heroDescription')}
        title={t('resultPage.heroTitle')}
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a className="btn btn-soft btn-xs sm:btn-sm" href="#infos">
            <QuestionIcon className="mb-1" />
            {t('resultPage.whatIsThisSite')}
          </a>
          <a className="btn btn-soft btn-xs sm:btn-sm" href="#strategies">
            <InfoIcon className="mb-1" />
            {t('resultPage.mainStrategies')}
          </a>
          <a className="btn btn-soft btn-xs sm:btn-sm" href="#share">
            <ShareIcon className="mb-1" />
            {t('resultPage.shareProject')}
          </a>
        </div>
      </CommonHero>

      <a
        className="group mockup-browser max-h-64 w-full border border-base-300 sm:max-h-96"
        href={t('resultPage.govLink')}
        target="_blank"
      >
        <div className="mockup-browser-toolbar">
          <div className="ml-2 flex w-full items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap rounded border border-input bg-base-200 px-2 py-1 text-xs transition-all group-hover:border-accent">
            <MagnifyingGlassIcon />
            {t('resultPage.govLinkDescription')}
          </div>
        </div>
        <img alt="gov" src={gov.src} />
      </a>

      <div className="flex flex-col gap-4">
        <CommonTitle
          href="#infos"
          icon={<QuestionIcon />}
          id="infos"
          title={t('resultPage.sectionTitleInfos')}
        />
        <article className="flex flex-col gap-6 text-justify font-light tracking-wider">
          <p>{t('resultPage.sectionDescriptionInfos')}</p>
          <CommonQuotes>{t('resultPage.quote')}</CommonQuotes>
        </article>
      </div>

      <div className="flex flex-col gap-4">
        <CommonTitle
          href="#strategies"
          icon={<InfoIcon />}
          id="strategies"
          title={t('resultPage.sectionTitleStrategies')}
        />
        <CommonCheckList
          list={[
            { text: t('resultPage.checklist.phishing') },
            { text: t('resultPage.checklist.socialMediaFraud') },
            { text: t('resultPage.checklist.techSupportScams') },
            { text: t('resultPage.checklist.fakePrizes') },
            { text: t('resultPage.checklist.paymentAppFraud') },
            { text: t('resultPage.checklist.professionalDesign') },
            { text: t('resultPage.checklist.urgencyAlarm') },
            { text: t('resultPage.checklist.sensitiveDataRequests') },
          ]}
        />
      </div>

      <div className="flex flex-col gap-4 max-sm:text-center">
        <CommonTitle
          href="#share"
          icon={<ShareIcon />}
          id="share"
          title={t('resultPage.shareTitle')}
        />
        <p className="text-muted text-sm">{t('resultPage.shareDescription')}</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            className="btn btn-soft btn-info flex-1"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${t('share.description')}\n${t('share.url')}`)}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterLogoIcon />
            Twitter
          </a>
          <a
            className="btn btn-soft btn-success flex-1"
            href={`https://wa.me/?text=${encodeURIComponent(`${t('share.description')}\n${t('share.url')}`)}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <WhatsappLogoIcon />
            Whatsapp
          </a>
          <a
            className="btn btn-soft btn-info flex-1"
            href={`https://t.me/share/url?url=${encodeURIComponent(t('share.url'))}&text=${encodeURIComponent(t('share.description'))}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <TelegramLogoIcon />
            Telegram
          </a>
          <button className="btn btn-soft flex-1" type="button">
            <CopyIcon />
            Copiar Link
          </button>
        </div>
      </div>
    </div>
  );
}
