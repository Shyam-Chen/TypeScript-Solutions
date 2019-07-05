export const reverseStringS1 = (str: string): string => (
  str.split('').reverse().join('')
);

export const reverseStringS2 = (str: string): string => (
  Array.from(str).reverse().join('')
);

export const reverseStringS3 = (str: string): string => {
  const result = [];

  for (let i = 1; i <= str.length; i += 1) {
    result.push(Array.from(str)[str.length - i]);
  }

  return result.join('');
};

export const reverseStringS4 = (str: string): string => {
  let result = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }

  return result;
};

export const reverseStringS5 = (str: string): string => {
  let result = '';

  for (const char of str) {
    result = char + result;
  }

  return result;
};

export const reverseStringS6 = (str: string): string => {
  if (str === '') return '';
  return reverseStringS6(str.substr(1)) + str.charAt(0);
};
