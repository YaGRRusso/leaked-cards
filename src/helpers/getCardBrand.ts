export enum CardBrand {
  Visa = "Visa",
  Mastercard = "Mastercard",
  AmericanExpress = "American Express",
  DinersClub = "Diners Club",
  JCB = "JCB",
  Unknown = "Unknown",
}

export function getCardBrand(cardNumber?: string): CardBrand {
  if (!cardNumber) return CardBrand.Unknown
  const cleanedNumber = cardNumber.replace(/\D/g, "")

  if (/^5[1-5]/.test(cleanedNumber) || /^2(2[2-9]|[3-7][0-9])/.test(cleanedNumber)) return CardBrand.Mastercard
  if (/^3[47]/.test(cleanedNumber)) return CardBrand.AmericanExpress
  if (/^3(0[0-5]|[68])/.test(cleanedNumber)) return CardBrand.DinersClub
  if (/^35(2[89]|[3-8][0-9])/.test(cleanedNumber)) return CardBrand.JCB
  if (/^4/.test(cleanedNumber)) return CardBrand.Visa

  return CardBrand.Unknown
}
