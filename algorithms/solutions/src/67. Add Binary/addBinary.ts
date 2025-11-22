type AddBinary = (a: string, b: string) => string;

/**
 * Accepted
 */
export const addBinary: AddBinary = (a, b) => {
  let x = BigInt(`0b${a}`); // Convert binary string 'a' to BigInt
  let y = BigInt(`0b${b}`); // Convert binary string 'b' to BigInt

  let carry: bigint;

  while (y !== BigInt(0)) {
    // Repeat until there's no carry
    carry = x & y; // Calculate the carry
    x = x ^ y; // Sum the bits without carry
    y = carry << BigInt(1); // Move the carry to the left
  }

  return x.toString(2); // Convert the final result back to a binary string
};
