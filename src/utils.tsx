import { victimFieldsType } from './types'

function prepareGenderForCard(gender: number): string {
  return gender === 1 ? 'Male' : 'Female'
}

function prepareCompletedForCard(isComplete: number): string {
  return isComplete === 1 ? 'Yes' : 'No'
}

export function prepareDateForCard(date: string): string {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(date).toLocaleDateString(undefined, options)
}

export function prepareFieldsForCard(fields: victimFieldsType): victimFieldsType {
  const fieldsCopy: any =   JSON.parse(JSON.stringify(fields))
  fieldsCopy.gender =       prepareGenderForCard(fieldsCopy.gender)
  fieldsCopy.is_complete =  prepareCompletedForCard(fieldsCopy.is_complete)
  fieldsCopy.created_date = prepareDateForCard(fieldsCopy.created_date)
  fieldsCopy.birthdate =    prepareDateForCard(fieldsCopy.birthdate)
  return fieldsCopy
}