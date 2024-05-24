interface LongestNiceSubstring {
  (str: string): string;
}

export const longestNiceSubstring: LongestNiceSubstring = (str) => {
  if (str.length < 2) return '';

  const charArr = Array.from(str);
  const charSet = new Set();

  for (let i = 0; i < charArr.length; i += 1) {
    charSet.add(charArr[i]);
  }

  for (let i = 0; i < charArr.length; i += 1) {
    const char = charArr[i];

    if (!charSet.has(char.toUpperCase()) || !charSet.has(char.toLowerCase())) {
      const sub1 = longestNiceSubstring(str.substring(0, i));
      const sub2 = longestNiceSubstring(str.substring(i + 1));
      return sub1.length >= sub2.length ? sub1 : sub2;
    }
  }

  return str;
};
