/**
 * If the current number is the same as the previous number,
 * then `curl` is incremented by 1,
 * otherwise `pre` is assigned to `cur`,
 * and `cur` is reset to 1.
 *
 * input: 00110011
 * '0'0110011  prev = 0  cur = 1
 * 0'0'110011  prev = 0  cur = 2
 * 00'1'10011  prev = 2  cur = 1  0011
 * 001'1'0011  prev = 2  cur = 2  01
 * 0011'0'011  prev = 2  cur = 1  1100
 * 00110'0'11  prev = 2  cur = 2  10
 * 001100'1'1  prev = 2  cur = 1  0011
 * 0011001'1'  prev = 2  cur = 2  01
 *
 * input: 10101
 * '1'0101  prev = 0  cur = 1
 * 1'0'101  prev = 1  cur = 1  10
 * 10'1'01  prev = 1  cur = 1  01
 * 101'0'1  prev = 1  cur = 1  10
 * 1010'1'  prev = 1  cur = 1  01
 */
export const countBinarySubstrings = (str: string): number => {
  let result = 0;
  let [prev, cur] = [0, 1];

  for (let i = 1; i < str.length; i += 1) {
    if (str[i] === str[i - 1]) {
      cur += 1;
    } else {
      prev = cur;
      cur = 1;
    }

    if (prev >= cur) result += 1;
  }

  return result;
};
