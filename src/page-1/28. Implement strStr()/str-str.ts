type StrStr = (haystack: string, needle: string) => number;

/**
 * Accepted
 */
export const strStr: StrStr = (haystack, needle) => {
  return haystack.indexOf(needle);
};
