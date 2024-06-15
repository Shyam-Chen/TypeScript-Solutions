type ThousandSeparator = (n: number) => string;

/**
 * Accepted
 */
export const thousandSeparator: ThousandSeparator = (n) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

/**
 * Accepted
 */
export const thousandSeparator2: ThousandSeparator = (n) => {
  return n.toLocaleString().replace(/,/g, '.');
};

/**
 * Accepted
 */
export const thousandSeparator3: ThousandSeparator = (n) => {
  const str = n.toString();

  let result = '';

  // Iterate backwards through the string
  for (let i = str.length - 1, count = 0; i >= 0; i--) {
    result = str[i] + result; // Build the result string from right to left
    count += 1;

    // Insert dot after every three digits, unless it's the last digit
    if (count % 3 === 0 && i !== 0) {
      result = `.${result}`; // Insert dot
    }
  }

  return result;
};

/**
 * Accepted
 */
export const thousandSeparator4: ThousandSeparator = (n) => {
  return n
    .toString()
    .split('')
    .reverse()
    .reduce((acc, cur) => (acc.length % 4 === 3 ? `${cur}.${acc}` : cur + acc));
};
