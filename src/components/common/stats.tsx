import type { FC, HTMLAttributes } from "react"

import { cn } from "@/utils/cn"

export interface CommonStatsProps extends HTMLAttributes<HTMLDivElement> {
  stats?: {
    title: string
    value: string
    description?: string
  }[]
}

export const CommonStats: FC<CommonStatsProps> = ({ stats, className, ...rest }) => {
  return (
    <div className={cn("stats w-full stats-vertical lg:stats-horizontal", className)} {...rest}>
      {stats?.map((stat, index) => (
        <div key={index} className="stat place-items-center">
          <div className="stat-title">{stat.title}</div>
          <div className="stat-value text-accent">{stat.value}</div>
          <div className="stat-desc">{stat.description}</div>
        </div>
      ))}
    </div>
  )
}

CommonStats.displayName = "CommonStats"
