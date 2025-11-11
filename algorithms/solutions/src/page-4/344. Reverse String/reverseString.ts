type ReverseString = (s: string[]) => void;

/**
 * Accepted
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
 */
export const reverseString2: ReverseString = (s) => {
  s.reverse();
};
