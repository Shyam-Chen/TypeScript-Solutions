type BuddyStrings = (s: string, goal: string) => boolean;

/**
 * Accepted
 */
export const buddyStrings: BuddyStrings = (s, goal) => {
  if (s.length !== goal.length) return false;

  if (s === goal) {
    const charSet = new Set(s);
    return charSet.size < s.length;
  }

  const mismatches: number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      mismatches.push(i);
    }
  }

  return (
    mismatches.length === 2 &&
    s[mismatches[0]] === goal[mismatches[1]] &&
    s[mismatches[1]] === goal[mismatches[0]]
  );
};
