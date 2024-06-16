type LongestPalindrome = (s: string) => string;

/**
 * Accepted
 */
export const longestPalindrome: LongestPalindrome = (s) => {
  const n = s.length;

  // If the string is empty or has only one character, it's itself a palindrome
  if (n < 2) return s;

  let start = 0; // Starting index of the longest palindromic substring
  let maxLength = 1; // Length of the longest palindromic substring

  // Initialize a 2D DP array
  const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false));

  // All substrings of length 1 are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // Check for substrings of length 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  // Check for substrings of length greater than 2
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      // Ending index of substring
      const j = i + len - 1;

      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        start = i;
        maxLength = len;
      }
    }
  }

  // Extract the longest palindromic substring from start index and maxLength
  return s.substring(start, start + maxLength);
};
