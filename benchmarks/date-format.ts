import { setupBenchmark } from './utils'
import { format } from 'date-fns'
import dayjs from 'dayjs'
import { DateTime } from 'luxon'

const date = new Date('2014-06-25T02:03:04.000Z')

function useDateFns() {
  return format(date, 'yyyy/MM/dd HH:mm:ss')
}

function useDayjs() {
  return dayjs(date).format('YYYY/MM/DD HH:mm:ss')
}

function useLuxon() {
  return DateTime.fromJSDate(date).toFormat('yyyy/MM/dd HH:mm:ss')
}

const formatter = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

function useIntlDateTimeFormat() {
  return formatter.format(date)
}

function useStringInterpolation() {
  return `${date.getFullYear()}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')} ${date
    .getHours()
    .toString()
    .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date
    .getSeconds()
    .toString()
    .padStart(2, '0')}`
}

// console.log(useDateFns())
// console.log(useDayjs())
// console.log(useLuxon())
// console.log(useIntlDateTimeFormat())
// console.log(useStringInterpolation())

setupBenchmark([
  { name: 'date-fns', fn: useDateFns },
  { name: 'dayjs', fn: useDayjs },
  { name: 'luxon', fn: useLuxon },
  { name: 'Intl.DateTimeFormat', fn: useIntlDateTimeFormat },
  { name: 'String interpolation', fn: useStringInterpolation },
]).run()
