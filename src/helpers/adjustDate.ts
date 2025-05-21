export enum DateUnit {
  YEARS = "y",
  MONTHS = "m",
  DAYS = "d",
  HOURS = "h",
}

export function adjustDate(value: number, unit: DateUnit, referenceDate?: Date): Date {
  const adjustedDate = referenceDate ? new Date(referenceDate) : new Date()

  switch (unit) {
    case DateUnit.YEARS:
      adjustedDate.setFullYear(adjustedDate.getFullYear() + value)
      break
    case DateUnit.MONTHS:
      adjustedDate.setMonth(adjustedDate.getMonth() + value)
      break
    case DateUnit.DAYS:
      adjustedDate.setDate(adjustedDate.getDate() + value)
      break
    case DateUnit.HOURS:
      adjustedDate.setHours(adjustedDate.getHours() + value)
      break
  }

  return adjustedDate
}

export function adjustDateEasy(input: string, referenceDate?: Date): Date {
  const adjustedDate = referenceDate ? new Date(referenceDate) : new Date()
  const regex = /^([+-]?)(\d+)([hdmy])$/
  const match = input.match(regex)

  const sign = match?.[1]
  const value = match?.[2]
  const unit = match?.[3]

  if (!sign || !value || !unit) return adjustedDate

  let newValue = parseInt(value)
  if (sign === "-") newValue = -newValue

  switch (unit) {
    case "h":
      return adjustDate(newValue, DateUnit.HOURS, adjustedDate)
    case "d":
      return adjustDate(newValue, DateUnit.DAYS, adjustedDate)
    case "m":
      return adjustDate(newValue, DateUnit.MONTHS, adjustedDate)
    case "y":
      return adjustDate(newValue, DateUnit.YEARS, adjustedDate)
    default:
      return adjustedDate
  }
}
