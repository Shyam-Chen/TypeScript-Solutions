type ToLowerCase = (s: string) => string;

/**
 * Accepted
 */
export const toLowerCase: ToLowerCase = (s) => {
  return s.toLowerCase();
};

/**
 * Accepted
 */
export const toLowerCase2: ToLowerCase = (s) => {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    const unicode = s[i].charCodeAt(0);

    if (unicode >= 'A'.charCodeAt(0) && unicode <= 'Z'.charCodeAt(0)) {
      result += String.fromCharCode(unicode + 32);
    } else {
      result += s[i];
    }
  }

  return result;
};
