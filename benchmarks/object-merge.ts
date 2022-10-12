import { setupBenchmark } from '../src/utils'

interface Human {
  id: number
  name: string
  age: number
}

const human: Human = {
  id: 1,
  name: 'John',
  age: 20,
}

function useObjectSpread() {
  return { ...human, age: 21 }
}

function useObjectSpreadWithBrackets() {
  return { ...human, ...{ age: 21 } }
}

function useObjectAssign() {
  return Object.assign({}, human, { age: 21 })
}

export const suite = setupBenchmark([
  { name: 'Object spread', fn: useObjectSpread },
  { name: 'Object spread with brackets', fn: useObjectSpreadWithBrackets },
  { name: 'Object.assign', fn: useObjectAssign },
])
