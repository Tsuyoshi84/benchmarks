import { setupBenchmark } from './utils'
import { addDays } from 'date-fns'
import { addDays as myAddDays } from '../libs/date'

const date = new Date('2014-06-25T02:03:04.000Z')
const days = 10

function useDateFns() {
  addDays(date, days)
}

function useMyAddDays() {
  myAddDays(date, days)
}

setupBenchmark([
  { name: 'date-fns', fn: useDateFns },
  { name: 'myAddDays', fn: useMyAddDays },
]).run()
