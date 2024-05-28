type CommonChars = (words: string[]) => string[];

export const commonChars: CommonChars = (words) => {
  if (words.length === 0) return [];

  // Initialize the count array for the first string
  const count = Array.from({ length: 26 }, () => Number.POSITIVE_INFINITY);

  // Iterate through each string in the array
  for (const word of words) {
    const tempCount = Array.from({ length: 26 }, () => 0);

    // Count the occurrences of each character in the current word
    for (const char of word) {
      tempCount[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }

    // Update the global count to hold the minimum occurrences
    for (let i = 0; i < 26; i++) {
      count[i] = Math.min(count[i], tempCount[i]);
    }
  }

  // Construct the result array based on the final counts
  const result: string[] = [];

  for (let i = 0; i < 26; i++) {
    while (count[i]-- > 0) {
      result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
    }
  }

  return result;
};

export const commonChars2: CommonChars = (A) => {
  let result = [...A[0]];
  const arr = [...A];

  for (let i = 1; i < arr.length; i += 1) {
    result = result.filter((c) => {
      const len = arr[i].length;
      arr[i] = arr[i].replace(c, '');
      return len > arr[i].length;
    });
  }

  return result;
};
