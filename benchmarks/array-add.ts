import { setupBenchmark } from '../src/utils'

const size = 100

function usePush() {
  const arr: Array<number> = []
  for (let i = 0; i < size; i++) {
    arr.push(i)
  }

  return arr
}

function useIndex() {
  const arr: Array<number> = []
  for (let i = 0; i < size; i++) {
    arr[i] = i + 1
  }

  return arr
}

function useConcat() {
  let arr: Array<number> = []
  for (let i = 0; i < size; i++) {
    arr = arr.concat(i)
  }

  return arr
}

function useSpread() {
  let arr: Array<number> = []
  for (let i = 0; i < size; i++) {
    arr = [...arr, i]
  }

  return arr
}

export const suite = setupBenchmark([
  { name: 'Array.prototype.push()', fn: usePush },
  { name: 'Array[index] = value', fn: useIndex },
  { name: 'Array.prototype.concat()', fn: useConcat },
  { name: 'Spread operator', fn: useSpread },
])
