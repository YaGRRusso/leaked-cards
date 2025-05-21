import { type FactoryArg, createMask } from "imask"

export const mask = (mask: FactoryArg, value: string = "") => {
  const masked = createMask(mask)
  masked.resolve(value)
  return masked
}
