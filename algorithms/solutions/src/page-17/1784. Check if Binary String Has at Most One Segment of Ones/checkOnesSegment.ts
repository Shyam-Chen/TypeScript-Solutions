type CheckOnesSegment = (s: string) => boolean;

/**
 * Accepted
 */
export const checkOnesSegment: CheckOnesSegment = (s) => {
  return !s.includes('01');
};

/**
 * Accepted
 */
export const checkOnesSegment2: CheckOnesSegment = (s) => {
  let foundZero = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      foundZero = true;
    } else if (s[i] === '1' && foundZero) {
      return false;
    }
  }

  return true;
};
