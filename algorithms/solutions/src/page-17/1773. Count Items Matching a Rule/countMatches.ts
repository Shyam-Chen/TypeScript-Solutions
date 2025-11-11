type CountMatches = (items: string[][], ruleKey: string, ruleValue: string) => number;

/**
 * Accepted
 */
export const countMatches: CountMatches = (items, ruleKey, ruleValue) => {
  const keyIndex = ['type', 'color', 'name'].indexOf(ruleKey);
  return items.filter((item) => item[keyIndex] === ruleValue).length;
};

/**
 * Accepted
 */
export const countMatches2: CountMatches = (items, ruleKey, ruleValue) => {
  // Map ruleKey to the corresponding index
  const keyIndexMap = new Map([
    ['type', 0],
    ['color', 1],
    ['name', 2],
  ]);

  const index = keyIndexMap.get(ruleKey);

  let count = 0;

  // Iterate through the items and count the matches
  for (const item of items) {
    if (typeof index === 'number' && item[index] === ruleValue) {
      count += 1;
    }
  }

  return count;
};
