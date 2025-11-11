type CountAndSay = (n: number) => string;

/**
 * Accepted
 */
export const countAndSay: CountAndSay = (n) => {
  let result = '1';

  for (let i = 2; i <= n; i++) {
    const temp = result;

    let num = result[0];
    let count = 1;

    result = '';

    for (let j = 1; j < temp.length; j++) {
      if (temp[j] === num) {
        count += 1;
      } else {
        result += count;
        result += num;
        num = temp[j];
        count = 1;
      }
    }

    result += count;
    result += num;
  }

  return result;
};
