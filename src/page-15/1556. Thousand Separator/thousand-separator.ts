type ThousandSeparator = (n: number) => string;

// Positive Lookahead (?=(\d{3})+(?!\d))
//  - 1st Capturing Group (\d{3})+
//  - Negative Lookahead (?!\d)
export const thousandSeparator: ThousandSeparator = (n) =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

export const thousandSeparator2: ThousandSeparator = (n) => n.toLocaleString().replace(/,/g, '.');

export const thousandSeparator3: ThousandSeparator = (n) => {
  const arr = String(n).split('').reverse();
  const result = [];

  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    count += 1;

    if (count % 3 === 0) {
      if (count === arr.length) {
        result.push(arr[i]);
      } else {
        result.push(arr[i], '.');
      }
    } else {
      result.push(arr[i]);
    }
  }

  return result.reverse().join('');
};

export const thousandSeparator4: ThousandSeparator = (n) => {
  return String(n)
    .split('')
    .reverse()
    .reduce((acc, cur) => (acc.length % 4 === 3 ? `${cur}.${acc}` : cur + acc));
};
