type DecodeMessage = (key: string, message: string) => string;

/**
 * Accepted
 */
export const decodeMessage: DecodeMessage = (key, message) => {
  // Create a Map to store the substitution table
  const substitutionMap = new Map<string, string>();

  // Define the regular English alphabet
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // Variable to keep track of the current index in the alphabet
  let substitutionIndex = 0;

  // Loop through each character in the key string
  for (const char of key) {
    // Check if the character is a lowercase English letter and is not already in the map
    if (char >= 'a' && char <= 'z' && !substitutionMap.has(char)) {
      // Add the character to the map with its corresponding letter in the alphabet
      substitutionMap.set(char, alphabet[substitutionIndex]);

      // Move to the next letter in the alphabet
      substitutionIndex += 1;
    }
  }

  // Variable to store the decoded message
  let decodedMessage = '';

  // Loop through each character in the message string
  for (const char of message) {
    // If the character is a space, add a space to the decoded message
    if (char === ' ') {
      decodedMessage += ' ';
    } else {
      // Otherwise, substitute the character using the map and add it to the decoded message
      decodedMessage += substitutionMap.get(char) || char;
    }
  }

  // Return the decoded message
  return decodedMessage;
};
