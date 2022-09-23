import { setupBenchmark } from '../src/utils'

const num = '1234567890'

function useParseInt() {
  return parseInt(num, 10)
}

function useNumberConstructor() {
  return Number(num)
}

function useUnaryPlus() {
  return +num
}

function usePlus() {
  return num + 0
}

export const suite = setupBenchmark([
  { name: 'parseInt()', fn: useParseInt },
  { name: 'Number() constructor', fn: useNumberConstructor },
  { name: 'Unary plus operator', fn: useUnaryPlus },
  { name: 'Plus operator', fn: usePlus },
])
