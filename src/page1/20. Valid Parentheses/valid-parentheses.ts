export const isValid = (str: string): boolean => {
  if (!str.length) return false;

  const stack = [];

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];

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
