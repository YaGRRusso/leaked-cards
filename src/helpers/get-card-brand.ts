export const CardBrand = {
  Visa: 'Visa',
  Mastercard: 'Mastercard',
  AmericanExpress: 'American Express',
  DinersClub: 'Diners Club',
  JCB: 'JCB',
  Unknown: 'Unknown',
} as const;

export type CardBrand = (typeof CardBrand)[keyof typeof CardBrand];

const MASTERCARD_REGEX = /^5[1-5]/;
const MASTERCARD_REGEX_2 = /^2(2[2-9]|[3-7][0-9])/;
const AMERICAN_EXPRESS_REGEX = /^3[47]/;
const DINERS_CLUB_REGEX = /^3(0[0-5]|[68])/;
const JCB_REGEX = /^35(2[89]|[3-8][0-9])/;
const VISA_REGEX = /^4/;

export function getCardBrand(cardNumber?: string): CardBrand {
  if (!cardNumber) {
    return CardBrand.Unknown;
  }

  const cleanedNumber = cardNumber.replace(/\D/g, '');

  if (
    MASTERCARD_REGEX.test(cleanedNumber) ||
    MASTERCARD_REGEX_2.test(cleanedNumber)
  ) {
    return CardBrand.Mastercard;
  }
  if (AMERICAN_EXPRESS_REGEX.test(cleanedNumber)) {
    return CardBrand.AmericanExpress;
  }
  if (DINERS_CLUB_REGEX.test(cleanedNumber)) {
    return CardBrand.DinersClub;
  }
  if (JCB_REGEX.test(cleanedNumber)) {
    return CardBrand.JCB;
  }
  if (VISA_REGEX.test(cleanedNumber)) {
    return CardBrand.Visa;
  }

  return CardBrand.Unknown;
}
