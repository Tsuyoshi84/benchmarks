import { setupBenchmark } from './utils'
import { last } from 'lodash-es'

const array = new Array(10000).fill(0)

function useArrayLength() {
  return array[array.length - 1]
}

function useAt() {
  return array.at(-1)
}

function useSlice() {
  return array.slice(-1)[0]
}

function useLodashLast() {
  return last(array)
}

setupBenchmark([
  { name: 'array.length', fn: useArrayLength },
  { name: 'array.at()', fn: useAt },
  { name: 'array.slice()', fn: useSlice },
  { name: 'Lodash.last()', fn: useLodashLast },
]).run()
