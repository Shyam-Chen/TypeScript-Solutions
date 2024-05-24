interface AddBinary {
  (a: string, b: string): string;
}

/**
 * Accepted
 */
export const addBinary: AddBinary = (a, b) => {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};
