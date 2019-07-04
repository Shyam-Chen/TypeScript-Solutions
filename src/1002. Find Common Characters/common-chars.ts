export const commonChars = (A: string[]): string[] => {
  const result = [];
  const charsArr = [];

  A.forEach(item => {
    charsArr.push([...new Set(Array.from(item))]);
  });

  const flattened = charsArr.reduce((acc, cur) => [...acc, ...cur], []);

  const counted = flattened.reduce((acc: object, str: string) => {
    if (str in acc) {
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
  result.forEach(alphabet => {
    const same = new Set();

    A.forEach(item => {
      // number of duplicate alphabets
      const num = Array.from(item).filter(letter => letter === alphabet).length;
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
