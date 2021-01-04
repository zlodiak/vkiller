export function prepareGenderForCard(gender: number): string {
  return gender === 1 ? 'Male' : 'Female'
}

export function prepareCompletedForCard(isComplete: number): string {
  console.log(isComplete)
  return isComplete === 1 ? 'Yes' : 'No'
}