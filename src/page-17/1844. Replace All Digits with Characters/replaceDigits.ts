type ReplaceDigits = (s: string) => string;

/**
 * Accepted
 */
export const replaceDigits: ReplaceDigits = (s) => {
  const result = Array.from(s);

  for (let i = 1; i < result.length; i += 2) {
    result[i] = String.fromCharCode(result[i - 1].charCodeAt(0) + Number(result[i]));
  }

  return result.join('');
};
