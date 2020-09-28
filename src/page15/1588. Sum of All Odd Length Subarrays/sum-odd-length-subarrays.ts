interface SumOddLengthSubarrays {
  (arr: number[]): number;
}

// 1 4 2 5 3 - 1 5 7 12 15 - 1 7 15
// 4 2 5 3   - 4 6 11 14   - 4 11
// 2 5 3     - 2 7 10      - 2 10
// 5 3       - 5 8         - 5
// 3         - 3           - 3
export const sumOddLengthSubarrays: SumOddLengthSubarrays = (arr) => {
  let result = 0;

  for (let i = 0, sum = 0; i < arr.length; i += 1, sum = 0) {
    for (let j = i; j < arr.length; j += 1) {
      // accumulator
      sum += arr[j];

      // odd length
      if ((j - i + 1) % 2 === 1) {
        result += sum;
      }
    }
  }

  return result;
};
