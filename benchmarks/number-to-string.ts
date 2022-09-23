import { setupBenchmark } from '../src/utils'

const num = 1234567890

function useToString() {
  return num.toString()
}

function useStringConstructor() {
  return String(num)
}

function useStringInterpolation() {
  return `${num}`
}

export const suite = setupBenchmark([
  { name: 'Number.prototype.toString()', fn: useToString },
  { name: 'String() constructor', fn: useStringConstructor },
  { name: 'String interpolation', fn: useStringInterpolation },
])
