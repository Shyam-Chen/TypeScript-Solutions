type Compress = (chars: string[]) => number;

/**
 * Accepted
 */
export const compress: Compress = (chars) => {
  // To keep track of the position to insert characters in the array
  let index = 0;

  // To traverse the input array
  let i = 0;

  while (i < chars.length) {
    const char = chars[i];
    let count = 0;

    // Count the number of occurrences of the current character
    while (i < chars.length && chars[i] === char) {
      i += 1;
      count += 1;
    }

    // Write the character to the index position
    chars[index] = char;
    index += 1;

    // If count is more than 1, write the count to the array
    if (count > 1) {
      for (const digit of String(count)) {
        chars[index] = digit;
        index += 1;
      }
    }
  }

  return index;
};
