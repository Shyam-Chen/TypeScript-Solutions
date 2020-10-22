/**
 * 1 -> read: one 1 = 11
 * 11 -> read: two 1s = 21
 * 21 -> read: one 2, one 1 = 1211
 * 1211 -> read: one 1, one 2, two 1s = 111221
 */

export const countAndSay = (n: number): string => {
  let result = '1';

  for (let i = 2; i <= n; i += 1) {
    const temp = result;

    let num = result[0];
    let count = 1;

    result = '';

    for (let j = 1; j < temp.length; j += 1) {
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