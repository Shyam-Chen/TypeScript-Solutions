export const addBinary = (a: string, b: string): string => {
  const total = parseInt(a, 2) + parseInt(b, 2);
  return total.toString(2);
};
