type Convert = (s: string, numRows: number) => string;

/**
 * Accepted
 */
export const convert: Convert = (s, numRows) => {
  // No zigzag pattern if numRows is 1
  if (numRows === 1) return s;

  const rows: string[] = [];

  for (let i = 0; i < Math.min(numRows, s.length); i++) {
    rows[i] = '';
  }

  let currentRow = 0;
  let direction = 1; // 1 means downward, -1 means upward

  for (const char of s) {
    rows[currentRow] += char;

    if (currentRow === 0) {
      direction = 1; // Change direction to downward when at the top row
    } else if (currentRow === numRows - 1) {
      direction = -1; // Change direction to upward when at the bottom row
    }

    currentRow += direction; // Move to the next row
  }

  let result = '';

  for (const row of rows) {
    result += row;
  }

  return result;
};
