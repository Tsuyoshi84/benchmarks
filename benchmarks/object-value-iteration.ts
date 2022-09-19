import { setupBenchmark } from './utils'

const targetObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
}

/** reduce() + spread operator */
function useReduce() {
  // prettier-ignore
  return Object
    .entries(targetObj)
    .map(([key, value]) => ({ [key]: value * 10 }))
    .reduce((acc, obj) => ({ ...acc, ...obj }), {})
}

/** reduce() + Object.assign() */
function useObjectAssign() {
  // prettier-ignore
  return Object
    .entries(targetObj)
    .map(([key, value]) => ({ [key]: value * 10 }))
    .reduce((acc, obj) => Object.assign(acc, obj), {})
}

/** fromEntries() */
function useFromEntries() {
  // prettier-ignore
  const arr = Object
    .entries(targetObj)
    .map(([key, value]) => [key, value * 10])

  return Object.fromEntries(arr)
}

setupBenchmark([
  { name: 'reduce + spread operator', fn: useReduce },
  { name: 'reduce + Object.assign', fn: useObjectAssign },
  { name: 'fromEntries', fn: useFromEntries },
]).run()
