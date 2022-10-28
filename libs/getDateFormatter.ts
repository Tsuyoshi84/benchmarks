const yyyy = (date: Date): string => `${date.getFullYear()}`
const MM = (date: Date): string => `${date.getMonth() + 1}`.padStart(2, '0')
const M = (date: Date): string => `${date.getMonth() + 1}`
const dd = (date: Date): string => `${date.getDate()}`.padStart(2, '0')
const d = (date: Date): string => `${date.getDate()}`
const HH = (date: Date): string => `${date.getHours()}`.padStart(2, '0')
const mm = (date: Date): string => `${date.getMinutes()}`.padStart(2, '0')
const ss = (date: Date): string => `${date.getSeconds()}`.padStart(2, '0')

const E_MAP = {
  0: '日',
  1: '月',
  2: '火',
  3: '水',
  4: '木',
  5: '金',
  6: '土',
} as const
const E = (date: Date): string => E_MAP[date.getDay() as keyof typeof E_MAP]

type Year = 'yyyy'
type Month = 'M' | 'MM'
type Day = 'd' | 'dd'
type DayOfWeek = 'E'
type Hour = 'H' | 'HH'
type Minute = 'mm'
type Second = 'ss'
type DateSeparator = '/'

type MonthDayFormat = `${Month}${DateSeparator}${Day}`
type TimeFormat = `${Hour}:${Minute}:${Second}` | `${Hour}:${Minute}`

export type DateFormatTemplate =
  | `${Year}${DateSeparator}${MonthDayFormat} ${TimeFormat}`
  | `${Year}${DateSeparator}${MonthDayFormat}`
  | `${MonthDayFormat}`
  | `${MonthDayFormat} ${TimeFormat}`
  | `${MonthDayFormat}(${DayOfWeek})`
  | `${DayOfWeek}`
  | `${TimeFormat}`
  | `${Hour}`
  | `${Minute}`

export function getDateFormatter(
  format: DateFormatTemplate
): (date: Date) => string {
  switch (format) {
    case 'yyyy/MM/dd HH:mm:ss':
      return (_: Date) =>
        `${yyyy(_)}/${MM(_)}/${dd(_)} ${HH(_)}:${mm(_)}:${ss(_)}`
    case 'yyyy/MM/dd HH:mm':
      return (_: Date) => `${yyyy(_)}/${MM(_)}/${dd(_)} ${HH(_)}:${mm(_)}`
    case 'yyyy/MM/dd':
      return (_: Date) => `${yyyy(_)}/${MM(_)}/${dd(_)}`
    case 'MM/dd HH:mm:ss':
      return (_: Date) => `${MM(_)}/${dd(_)} ${HH(_)}:${mm(_)}:${ss(_)}`
    case 'MM/dd HH:mm':
      return (_: Date) => `${MM(_)}/${dd(_)} ${HH(_)}:${mm(_)}`
    case 'MM/dd':
      return (_: Date) => `${MM(_)}/${dd(_)}`
    case 'M/d':
      return (_: Date) => `${M(_)}/${d(_)}`
    case 'M/d(E)':
      return (_: Date) => `${M(_)}/${d(_)}(${E(_)})`
    case 'E':
      return (_: Date) => `${E(_)}`
    case 'HH:mm:ss':
      return (_: Date) => `${HH(_)}:${mm(_)}:${ss(_)}`
    case 'HH:mm':
      return (_: Date) => `${HH(_)}:${mm(_)}`
    case 'HH':
      return (_: Date) => `${HH(_)}`
    case 'mm':
      return (_: Date) => `${mm(_)}`
    default:
      return (_: Date) => `${yyyy(_)}/${MM(_)}/${dd(_)}`
  }
}
