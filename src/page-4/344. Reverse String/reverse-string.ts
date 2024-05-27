type ReverseString = (s: string[]) => void;

/**
 * Accepted
 *
 * Two Pointers
 */
export const reverseString: ReverseString = (s) => {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
};

/**
 * Accepted
 *
 * String
 */
export const reverseString2: ReverseString = (s) => {
  s.reverse();
};
