export const DateUnit = {
  YEARS: 'y',
  MONTHS: 'm',
  DAYS: 'd',
  HOURS: 'h',
} as const;

export type DateUnit = (typeof DateUnit)[keyof typeof DateUnit];

export function adjustDate(
  value: number,
  unit: DateUnit,
  referenceDate?: Date
): Date {
  const adjustedDate = referenceDate ? new Date(referenceDate) : new Date();

  switch (unit) {
    case 'y':
      adjustedDate.setFullYear(adjustedDate.getFullYear() + value);
      break;
    case 'm':
      adjustedDate.setMonth(adjustedDate.getMonth() + value);
      break;
    case 'd':
      adjustedDate.setDate(adjustedDate.getDate() + value);
      break;
    case 'h':
      adjustedDate.setHours(adjustedDate.getHours() + value);
      break;
    default:
      throw new Error(`Unsupported date unit: ${unit}`);
  }

  return adjustedDate;
}

const regex = /^([+-]?)(\d+)([hdmy])$/;

export function adjustDateEasy(input: string, referenceDate?: Date): Date {
  const adjustedDate = referenceDate ? new Date(referenceDate) : new Date();
  const match = input.match(regex);

  const sign = match?.[1];
  const value = match?.[2];
  const unit = match?.[3];

  if (!(sign && value && unit)) {
    return adjustedDate;
  }

  let newValue = Number.parseInt(value, 10);
  if (sign === '-') {
    newValue = -newValue;
  }

  switch (unit) {
    case 'h':
      return adjustDate(newValue, DateUnit.HOURS, adjustedDate);
    case 'd':
      return adjustDate(newValue, DateUnit.DAYS, adjustedDate);
    case 'm':
      return adjustDate(newValue, DateUnit.MONTHS, adjustedDate);
    case 'y':
      return adjustDate(newValue, DateUnit.YEARS, adjustedDate);
    default:
      return adjustedDate;
  }
}
