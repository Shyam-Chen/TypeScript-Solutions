type TruncateSentence = (s: string, k: number) => string;

/**
 * Accepted
 */
export const truncateSentence: TruncateSentence = (s, k) => {
  return s.split(' ').slice(0, k).join(' ');
};

/**
 * Accepted
 */
export const truncateSentence2: TruncateSentence = (s, k) => {
  let spaceCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      spaceCount += 1;
      if (spaceCount === k) return s.slice(0, i);
    }
  }

  return s;
};
