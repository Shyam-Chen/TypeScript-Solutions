export const commonChars = (A: string[]): string[] => {
  const result = [];
  const charsArr = [];

  A.forEach((item) => {
    charsArr.push([...new Set(Array.from(item))]);
  });

  const flattened = charsArr.reduce((acc, cur) => [...acc, ...cur], []);

  const counted = flattened.reduce((all: Object, str: string) => {
    if (str in all) all[str] += 1;
    else all[str] = 1;

    return all;
  }, {});

  Object.entries(counted).forEach(([key, value]) => {
    if (value === A.length) result.push(key);
  });

  return result;
};
