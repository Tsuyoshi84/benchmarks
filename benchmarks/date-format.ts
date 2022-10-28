import { setupBenchmark } from '../src/utils'
import { format } from 'date-fns'
// import dayjs from 'dayjs'
// import { DateTime } from 'luxon'
import { getDateFormatter } from '../libs/getDateFormatter'

const date = new Date('2014-06-25T02:03:04.000Z')

function useDateFns() {
  const s1 = format(date, 'yyyy/MM/dd HH:mm:ss')
  const s2 = format(date, 'yyyy/MM/dd')
}

// function useDayjs() {
//   return dayjs(date).format('YYYY/MM/DD HH:mm:ss')
// }

// function useLuxon() {
//   return DateTime.fromJSDate(date).toFormat('yyyy/MM/dd HH:mm:ss')
// }

const myFormatter1 = getDateFormatter('yyyy/MM/dd HH:mm:ss')
const myFormatter2 = getDateFormatter('yyyy/MM/dd')
function useMyFormatter() {
  const s1 = myFormatter1(date)
  const s2 = myFormatter2(date)
}

export const suite = setupBenchmark([
  { name: 'date-fns', fn: useDateFns },
  // { name: 'dayjs', fn: useDayjs },
  // { name: 'luxon', fn: useLuxon },
  { name: 'my formatter', fn: useMyFormatter },
])
