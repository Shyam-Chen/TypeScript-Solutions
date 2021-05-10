interface MinOperations {
  (s: string): number;
}

export const minOperations: MinOperations = (s) => {
  const final = Array.from({ length: s.length / 2 })
    .fill(s.startsWith('0') ? '01' : '10')
    .join('');

  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== final[i]) count += 1;
  }

  return count;
};

export const minOperations2: MinOperations = (s) => {
  const chars = ['1', '0'];

  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (chars[i % 2] === s[i]) count += 1;
  }

  return Math.min(count, s.length - count);
};
