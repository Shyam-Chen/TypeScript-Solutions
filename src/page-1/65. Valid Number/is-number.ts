interface IsNumber {
  (s: string): boolean;
}

/**
 * Accepted
 */
export const isNumber: IsNumber = (s) => {
  if (s === 'Infinity') return false;
  if (s === '-Infinity') return false;
  if (s === '+Infinity') return false;
  return !Number.isNaN(Number(s));
};
