const millisecondsInMinute = 60 * 1000
const millisecondsInDay = 24 * 60 * millisecondsInMinute

export function isAfter(date: Date, dateToCompare: Date): boolean {
  return date.getTime() > dateToCompare.getTime()
}

export function isBefore(date: Date, dateToCompare: Date): boolean {
  return date.getTime() < dateToCompare.getTime()
}

export function isAfterOrSame(date: Date, dateToCompare: Date): boolean {
  return date.getTime() >= dateToCompare.getTime()
}

export function isBeforeOrSame(date: Date, dateToCompare: Date): boolean {
  return date.getTime() <= dateToCompare.getTime()
}

export function differenceInMilliseconds(
  dateLeft: Date,
  dateRight: Date
): number {
  return dateLeft.getTime() - dateRight.getTime()
}

export function differenceInMinutes(dateLeft: Date, dateRight: Date): number {
  const diff =
    differenceInMilliseconds(dateLeft, dateRight) / millisecondsInMinute
  return Math.trunc(diff)
}

export function clamp(
  date: Date,
  { start, end }: { start: Date; end: Date }
): Date {
  if (isBefore(date, start)) return start
  if (isAfter(date, end)) return end
  return date
}

export function min(dates: Date[]): Date {
  return dates.reduce(
    (earliest, date) => (isBefore(date, earliest) ? date : earliest),
    dates[0]
  )
}

export function max(dates: Date[]): Date {
  return dates.reduce(
    (latest, date) => (isAfter(date, latest) ? date : latest),
    dates[0]
  )
}

export function addMilliseconds(date: Date, amount: number): Date {
  return new Date(date.getTime() + amount)
}

export function addMinutes(date: Date, amount: number): Date {
  return addMilliseconds(date, amount * millisecondsInMinute)
}

export function addDays(date: Date, amount: number): Date {
  return addMilliseconds(date, amount * millisecondsInDay)
}

export function compareAsc(dateLeft: Date, dateRight: Date): number {
  const diff = dateLeft.getTime() - dateRight.getTime()

  if (diff < 0) {
    return -1
  } else if (diff > 0) {
    return 1
  } else {
    return diff
  }
}

export function compareDesc(dateLeft: Date, dateRight: Date): number {
  const diff = dateLeft.getTime() - dateRight.getTime()

  if (diff > 0) {
    return -1
  } else if (diff < 0) {
    return 1
  } else {
    return diff
  }
}
