interface IsValid {
  (s: string): boolean;
}

/**
 * Accepted
 */
export const isValid: IsValid = (s) => {
  if (!s.length) return false;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '(') {
      stack.push(')');
    } else if (char === '{') {
      stack.push('}');
    } else if (char === '[') {
      stack.push(']');
    } else if (!stack.length || stack.pop() !== char) {
      return false;
    }
  }

  return stack.length === 0;
};
