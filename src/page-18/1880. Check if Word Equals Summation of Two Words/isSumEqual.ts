type IsSumEqual = (firstWord: string, secondWord: string, targetWord: string) => boolean;

/**
 * Accepted
 */
export const isSumEqual: IsSumEqual = (firstWord, secondWord, targetWord) => {
  // Helper function to convert a word to its numerical value
  function getNumericalValue(word: string): number {
    let numericalString = '';

    for (const char of word) {
      // Convert char to its letter value by subtracting 'a' char code
      numericalString += (char.charCodeAt(0) - 'a'.charCodeAt(0)).toString();
    }

    // Convert the concatenated string to a number
    return Number.parseInt(numericalString, 10);
  }

  // Calculate numerical values for each word
  const numFirstWord = getNumericalValue(firstWord);
  const numSecondWord = getNumericalValue(secondWord);
  const numTargetWord = getNumericalValue(targetWord);

  // Check if the sum of numFirstWord and numSecondWord equals numTargetWord
  return numFirstWord + numSecondWord === numTargetWord;
};
