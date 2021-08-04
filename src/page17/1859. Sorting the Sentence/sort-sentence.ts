interface SortSentence {
  (s: string): string;
}

export const sortSentence: SortSentence = (s) => {
  return s
    .split(' ')
    .sort((a, b) => Number(a.charAt(a.length - 1)) - Number(b.charAt(b.length - 1)))
    .map((word) => word.slice(0, word.length - 1))
    .join(' ');
};
