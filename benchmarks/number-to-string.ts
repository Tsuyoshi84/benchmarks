import { setupBenchmark } from '../src/utils'

const num = 1234567890

function useToString(num: number) {
  return num.toString()
}

function useStringConstructor(num: number) {
  return String(num)
}

function useStringInterpolation(num: number) {
  return `${num}`
}

export const suite = setupBenchmark([
  { name: 'Number.prototype.toString()', fn: () => useToString(num) },
  { name: 'String() constructor', fn: () => useStringConstructor(num) },
  { name: 'String interpolation', fn: () => useStringInterpolation(num) },
])
