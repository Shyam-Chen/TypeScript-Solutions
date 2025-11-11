type LetterCombinations = (digits: string) => string[];

/**
 * Accepted
 */
export const letterCombinations: LetterCombinations = (digits) => {
  if (!digits.length) return [];

  const phone: { [key: string]: string[] } = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  const result: string[] = [];

  function backtrack(combination: string, nextDigits: string) {
    if (nextDigits.length === 0) {
      result.push(combination);
    } else {
      const digit = nextDigits[0];

      for (const letter of phone[digit]) {
        backtrack(combination + letter, nextDigits.slice(1));
      }
    }
  }

  backtrack('', digits);

  return result;
};
