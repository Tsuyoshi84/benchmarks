import { setupBenchmark } from '../src/utils'

const obj = {
  id: 1,
  name: 'John Doe',
  hasLicense: true,
  data: null,
}

function useSpread() {
  return { ...obj }
}

function useObjectAssign() {
  return Object.assign({}, obj)
}

function useJSONParseStringify() {
  return JSON.parse(JSON.stringify(obj))
}

export const suite = setupBenchmark([
  { name: 'Spread operator', fn: useSpread },
  { name: 'Object.assign()', fn: useObjectAssign },
  { name: 'JSON.parse(JSON.stringify())', fn: useJSONParseStringify },
])
