import { alea } from "seedrandom"

const today = new Date().setHours(0, 0, 0, 0)

export function getRandomNumber(min: number, max: number, seed?: number) {
  const token = seed ? alea(seed.toString()) : alea(today.toString())
  return Math.floor(token() * (max - min + 1)) + min
}
