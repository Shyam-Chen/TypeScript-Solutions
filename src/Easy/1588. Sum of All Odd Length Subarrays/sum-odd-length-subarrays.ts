interface SumOddLengthSubarrays {
  (arr: number[]): number;
}

export const sumOddLengthSubarrays: SumOddLengthSubarrays = arr => {
  let result = 0;

  for (let i = 0, s = 0; i < arr.length; i += 1, s = 0) {
    for (let j = i; j < arr.length; j += 1) {
      s += arr[j];
      result += s * ((j - i + 1) % 2);
    }
  }

  return result;
};
