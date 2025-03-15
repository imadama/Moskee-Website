/**
 * Returns a translation key for a greeting based on the current time of day
 * @returns {string} Translation key for the appropriate greeting
 */
export function getTimeBasedGreeting(): string {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return 'greetings.morning';
  } else if (hour >= 12 && hour < 17) {
    return 'greetings.afternoon';
  } else if (hour >= 17 && hour < 22) {
    return 'greetings.evening';
  } else {
    return 'greetings.night';
  }
}
