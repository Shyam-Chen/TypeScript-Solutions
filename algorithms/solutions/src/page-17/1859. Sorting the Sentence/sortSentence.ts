type SortSentence = (s: string) => string;

/**
 * Accepted
 */
export const sortSentence: SortSentence = (s) => {
  return s
    .split(' ')
    .sort((a, b) => Number(a[a.length - 1]) - Number(b[b.length - 1]))
    .map((word) => word.slice(0, -1))
    .join(' ');
};
