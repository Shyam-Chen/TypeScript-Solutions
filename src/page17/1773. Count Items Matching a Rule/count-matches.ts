interface CountMatches {
  (items: string[][], ruleKey: string, ruleValue: string): number;
}

export const countMatches: CountMatches = (items, ruleKey, ruleValue) => {
  const itemRule = ['type', 'color', 'name'];
  const keyIndex = itemRule.indexOf(ruleKey);

  return items.filter((item) => item[keyIndex] === ruleValue).length;
};
