import { setupBenchmark } from '../src/utils'
import { isAfter } from 'date-fns'

const date1 = new Date('2014-06-25T02:03:04.000Z')
const date2 = new Date('2016-06-25T02:03:04.000Z')

function useDateFns(date1: Date, date2: Date) {
  return isAfter(date1, date2)
}

function useGetTime(date1: Date, date2: Date) {
  return date1.getTime() > date2.getTime()
}

function useOperator(date1: Date, date2: Date) {
  return date1 > date2
}

function useDiff(date1: Date, date2: Date) {
  return (date1 as any) - (date2 as any) > 0
}

export const suite = setupBenchmark([
  { name: 'date-fns', fn: () => useDateFns(date1, date2) },
  { name: 'getTime', fn: () => useGetTime(date1, date2) },
  { name: 'operator', fn: () => useOperator(date1, date2) },
  { name: 'diff', fn: () => useDiff(date1, date2) },
])
