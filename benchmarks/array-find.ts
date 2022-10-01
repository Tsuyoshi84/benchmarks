import { setupBenchmark } from '../src/utils'

const data = [...Array(10000).keys()].map((v) => ({ id: v, name: `name${v}` }))

function useFind(id: number) {
  return data.find((item) => item.id === id)
}

function useFindIndex(id: number) {
  const index = data.findIndex((item) => item.id === id)
  return data[index]
}

function useForLoop(id: number) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      return data[i]
    }
  }
}

function useForOfLoop(id: number) {
  for (const item of data) {
    if (item.id === id) {
      return item
    }
  }
}

const id = 5000
export const suite = setupBenchmark([
  { name: 'find()', fn: () => useFind(id) },
  { name: 'findIndex()', fn: () => useFindIndex(id) },
  { name: 'for loop', fn: () => useForLoop(id) },
  { name: 'for-of loop', fn: () => useForOfLoop(id) },
])
