import { setupBenchmark } from './utils'

const array = new Array(10000).fill(1)

function useForLoop() {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}

function useForOfLoop() {
  let sum = 0
  for (const item of array) {
    sum += item
  }
  return sum
}

function useForEach() {
  let sum = 0
  array.forEach((item) => {
    sum += item
  })
  return sum
}

function useReduce() {
  return array.reduce((sum, item) => sum + item, 0)
}

setupBenchmark([
  { name: 'for loop', fn: useForLoop },
  { name: 'for-of loop', fn: useForOfLoop },
  { name: 'forEach()', fn: useForEach },
  { name: 'reduce()', fn: useReduce },
]).run()
