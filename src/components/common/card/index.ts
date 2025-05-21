import { CardBack } from "./back"
import { CardFront } from "./front"

export type * from "./back"
export type * from "./front"

export const CommonCard = {
  Front: CardFront,
  Back: CardBack,
}
