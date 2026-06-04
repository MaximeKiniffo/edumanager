const SCHOOL_YEAR_PATTERN = /^(\d{4})-(\d{4})$/
const MIN_SCHOOL_YEAR = 1900

export function isConsecutiveSchoolYear(value: string): boolean {
  const match = SCHOOL_YEAR_PATTERN.exec(value)
  if (!match) return false

  const startYear = Number(match[1])
  const endYear = Number(match[2])

  return startYear >= MIN_SCHOOL_YEAR && endYear === startYear + 1
}
