type DecodeString = (s: string) => string;

/**
 * Accepted
 */
export const decodeString: DecodeString = (s) => {
  const countStack: number[] = []; // Stack to store repeat counts
  const stringStack: string[] = []; // Stack to store intermediate strings

  let currentNum = 0; // Current number being processed
  let currentString = ''; // Current string being processed

  for (const char of s) {
    if (!Number.isNaN(Number(char))) {
      // If the character is a digit, update currentNum
      currentNum = currentNum * 10 + Number(char);
    } else if (char === '[') {
      // If the character is '[', push currentNum and currentString to stacks
      countStack.push(currentNum);
      stringStack.push(currentString);
      currentNum = 0; // Reset currentNum
      currentString = ''; // Reset currentString
    } else if (char === ']') {
      // If the character is ']', pop from stacks and update currentString
      const repeatTimes = countStack.pop(); // Get the last count
      const lastString = stringStack.pop(); // Get the last string
      currentString = lastString + currentString.repeat(repeatTimes || 1); // Repeat currentString and append
    } else {
      // If the character is a letter, append it to currentString
      currentString += char;
    }
  }

  // Return the fully decoded string
  return currentString;
};
