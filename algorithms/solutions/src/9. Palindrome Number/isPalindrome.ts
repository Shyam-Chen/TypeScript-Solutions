type IsPalindrome = (x: number) => boolean;

/**
 * Accepted
 */
export const isPalindrome: IsPalindrome = (x) => {
  // Negative numbers and numbers ending in zero (except 0 itself) are not palindromes
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let [a, b] = [x, 0];

  // Loop until the first half of the number is greater than or equal to the second half
  while (a > b) {
    // Move the last digit of 'a' to 'b'
    b = b * 10 + (a % 10);

    // Remove the last digit from 'a'
    a = Math.floor(a / 10);
  }

  // Check if the number is a palindrome
  // Either the reversed number (b) matches the remaining part (a)
  // or the reversed number without its last digit (b / 10) matches the remaining part (a)
  return a === b || Math.floor(b / 10) === a;
};

/**
 * Accepted
 */
export const isPalindrome2: IsPalindrome = (x) => {
  // Negative numbers are not palindromes
  if (x < 0) return false;

  // Convert the number to a string
  const str = x.toString();

  // Initialize two pointers for the start and end of the string
  let [left, right] = [0, str.length - 1];

  // Compare characters from the start and end moving towards the center
  while (left < right) {
    if (str[left] !== str[right]) return false;

    left += 1;
    right -= 1;
  }

  // If all characters matched, it is a palindrome
  return true;
};
