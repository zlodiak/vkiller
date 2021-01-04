export function prepareGenderForCard(gender: number): string {
  return gender === 1 ? 'Male' : 'Female'
}

export function prepareCompletedForCard(isCompleted: number): string {
  return isCompleted === 1 ? 'Yes' : 'No'
}