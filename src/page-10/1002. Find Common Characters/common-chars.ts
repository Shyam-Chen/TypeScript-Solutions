type CommonChars = (A: string[]) => string[];

export const commonChars: CommonChars = (A) => {
  const result = [] as string[];
  const charsArr = [] as string[][];

  A.forEach((item) => {
    charsArr.push([...new Set(Array.from(item))]);
  });

  const flattened = charsArr.reduce((acc, cur) => [...acc, ...cur], []);

  const counted = flattened.reduce((acc: Record<string, number>, str: string) => {
    // if (str in acc) { // no-restricted-syntax
    // if (acc.hasOwnProperty(str)) { // no-prototype-builtins
    if (Object.prototype.hasOwnProperty.call(acc, str)) {
      acc[str] += 1;
    } else {
      acc[str] = 1;
    }

    return acc;
  }, {});

  Object.entries(counted).forEach(([key, value]) => {
    if (value === A.length) result.push(key);
  });

  // including duplicates
  result.forEach((alphabet) => {
    const same = new Set();

    A.forEach((item) => {
      // number of duplicate alphabets
      const num = Array.from(item).filter((letter) => letter === alphabet).length;
      same.add(num);
    });

    // duplicate numbers are the same
    if (same.size === 1) {
      for (let i = 1; i < same.values().next().value; i += 1) {
        result.push(alphabet);
      }
    }
  });

  return result;
};

export const commonChars2: CommonChars = (A) => {
  let result = [...A[0]];
  const arr = [...A];

  for (let i = 1; i < arr.length; i += 1) {
    result = result.filter((c) => {
      const len = arr[i].length;
      arr[i] = arr[i].replace(c, '');
      return len > arr[i].length;
    });
  }

  return result;
};
