interface LengthOfLastWord {
  (s: string): number;
}

/**
 * Accepted
 */
export const lengthOfLastWord: LengthOfLastWord = (s) => {
  return s.trim().split(/\s/g).pop()?.length ?? 0;
};
