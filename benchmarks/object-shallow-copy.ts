import { setupBenchmark } from './utils'

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

setupBenchmark([
  { name: 'Spread operator', fn: useSpread },
  { name: 'Object.assign()', fn: useObjectAssign },
  { name: 'JSON.parse(JSON.stringify())', fn: useJSONParseStringify },
]).run()
