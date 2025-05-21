import { CommonTitle } from "./title"

import { QuestionIcon } from "@phosphor-icons/react"

import type { FC, HTMLAttributes } from "react"

import { cn } from "@/utils/cn"
import { useTranslation } from "@/utils/i18n"

export interface CommonFaqProps extends HTMLAttributes<HTMLUListElement> {
  faqs?: {
    question: string
    answer: string
  }[]
}

export const CommonFaq: FC<CommonFaqProps> = ({ faqs, className, ...rest }) => {
  const { t } = useTranslation()

  return (
    <ul className={cn("flex w-full flex-col gap-4", className)} {...rest}>
      <CommonTitle to="/" hash="faq" icon={<QuestionIcon />} title={t("components.faq")} />
      {faqs?.map((faq, index) => (
        <li key={index} className="collapse rounded bg-base-200/60 px-4 py-2">
          <input type="radio" name="accordion" defaultChecked={index === 0} />
          <div className="collapse-title px-0 font-semibold">{faq.question}</div>
          <div className="collapse-content px-0 text-sm text-muted">{faq.answer}</div>
        </li>
      ))}
    </ul>
  )
}

CommonFaq.displayName = "CommonFaq"
