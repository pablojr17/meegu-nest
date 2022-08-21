export function checkAge(date: Date) {
  const yearBirth = new Date(date).getFullYear();
  const age = new Date().getFullYear() - yearBirth;
  if (age < 18) throw new Error('User must be 18 years old to register');
  return;
}
