type RotateString = (s: string, goal: string) => boolean;

/**
 * Accepted
 */
export const rotateString: RotateString = (s, goal) => {
  return s.length === goal.length && (s + s).includes(goal);
};
