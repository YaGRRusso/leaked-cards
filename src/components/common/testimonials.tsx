import { CommonTitle } from "./title"

import { UsersIcon } from "@phosphor-icons/react"

import type { FC, HTMLAttributes } from "react"

import { cn } from "@/utils/cn"
import { useTranslation } from "@/utils/i18n"

export interface CommonTestimonialsProps extends HTMLAttributes<HTMLUListElement> {
  testimonials?: {
    name: string
    role: string
    image: string
    text: string
  }[]
}

export const CommonTestimonials: FC<CommonTestimonialsProps> = ({ testimonials, className, ...rest }) => {
  const { t } = useTranslation()

  return (
    <ul className={cn("flex w-full flex-col gap-4", className)} {...rest}>
      <CommonTitle to="/" hash="testimonials" icon={<UsersIcon />} title={t("components.testimonials")} />
      {testimonials?.map((testimonial, index) => (
        <li
          key={index}
          className="flex flex-col gap-2 rounded bg-base-200/60 p-4 text-start"
          dir={index % 2 === 0 ? "ltr" : "rtl"}
        >
          <div className="flex gap-4">
            <div className="avatar">
              <div className="w-10 rounded-xl">
                <img src={testimonial.image} />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium">{testimonial.name}</h3>
              <span className="text-xs font-light">{testimonial.role}</span>
            </div>
          </div>
          <p className="max-w-3xl text-sm text-muted">{testimonial.text}</p>
        </li>
      ))}
    </ul>
  )
}

CommonTestimonials.displayName = "CommonTestimonials"
