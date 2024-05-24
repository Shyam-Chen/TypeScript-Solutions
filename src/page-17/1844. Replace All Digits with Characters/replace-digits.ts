interface ReplaceDigits {
  (s: string): string;
}

export const replaceDigits: ReplaceDigits = (s) => {
  const result = Array.from(s);

  // For every **odd** index `i`, you want to replace the digit `s[i]` with `shift(s[i-1], s[i])`.
  for (let i = 1; i < result.length; i += 2) {
    result[i] = String.fromCharCode(result[i - 1].charCodeAt(0) + Number(result[i]));
  }

  return result.join('');
};
