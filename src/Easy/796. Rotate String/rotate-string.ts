export const rotateString = (A: string, B: string): boolean => {
  for (let i = 0; i < A.length; i += 1) {
    if (A.substr(i, A.length - i) + A.substr(0, i) === B) {
      return true;
    }
  }

  return false;
};

/**
 * 'abcde' + 'abcde' = 'abcdeabcde, A + A
 * 'bcdea' in 'abcdeabcde', B in A + A
 */
export const rotateString2 = (A: string, B: string): boolean =>
  (A + A).includes(B);
