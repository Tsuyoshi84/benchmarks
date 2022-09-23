import { setupBenchmark } from '../src/utils'
import { utcToZonedTime } from 'date-fns-tz'
import { utcToZonedTime as myUtcToZonedTime } from '../libs/date'

const isoDate = '2014-06-25T10:00:00.000Z'
const timeZone = 'America/New_York'

function useDateFnsTz() {
  return utcToZonedTime(isoDate, timeZone)
}

function useMyUtcToZonedTime() {
  return myUtcToZonedTime(isoDate, timeZone)
}

// console.log(useDateFnsTz().toString())
// console.log(useMyUtcToZonedTime().toString())

export const suite = setupBenchmark([
  { name: 'date-fns-tz', fn: useDateFnsTz },
  { name: 'myUtcToZonedTime', fn: useMyUtcToZonedTime },
])
