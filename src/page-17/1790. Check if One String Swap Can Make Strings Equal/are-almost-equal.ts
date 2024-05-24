interface AreAlmostEqual {
  (s1: string, s2: string): boolean;
}

export const areAlmostEqual: AreAlmostEqual = (s1, s2) => {
  if (s1 === s2) return true;

  let diff = 0;

  for (let i = 0; i < s1.length / 2; i += 1) {
    const arr = [...Array.from(s1)];
    const temp = arr[i];

    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;

    if (arr.join('') !== s2) {
      diff += 1;
    }
  }

  return diff === 1;
};
