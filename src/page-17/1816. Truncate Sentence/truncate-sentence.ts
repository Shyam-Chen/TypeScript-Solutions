interface TruncateSentence {
  (s: string, k: number): string;
}

export const truncateSentence: TruncateSentence = (s, k) => {
  return s.split(' ').slice(0, k).join(' ');
};

export const truncateSentence2: TruncateSentence = (s, k) => {
  let spaceCount = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === ' ') {
      spaceCount += 1;

      if (spaceCount === k) {
        return s.slice(0, i);
      }
    }

    // one line (eslint: no-plusplus)
    // if (s[i] === ' ' && ++spaceCount === k) return s.slice(0, i);

    // one line without spaceCount (eslint: no-plusplus, no-param-reassign)
    // if (s[i] === ' ' && --k === 0) return s.slice(0, i);
  }

  return s;
};
