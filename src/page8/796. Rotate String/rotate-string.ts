type RotateString = {
  (s: string, goal: string): boolean;
};

/**
 * Accepted
 *
 * 'abcde' + 'abcde' = 'abcdeabcde', s + s = goal
 * 'cdeab' in 'abcdeabcde', goal in s + s -> true
 * 'abced' in 'abcdeabcde', goal in s + s -> false
 */
export const rotateString: RotateString = (s, goal) => {
  return s.length === goal.length && (s + s).includes(goal);
};
