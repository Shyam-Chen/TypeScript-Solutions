type SquareIsWhite = (coordinates: string) => boolean;

/**
 * Accepted
 */
export const squareIsWhite: SquareIsWhite = (coordinates) => {
  const [column, row] = [coordinates[0], coordinates[1]];

  // Calculate column index (0 for 'a', 1 for 'b', ..., 7 for 'h')
  const columnIndex = column.charCodeAt(0) - 'a'.charCodeAt(0);

  // Calculate row index (0 for '1', 1 for '2', ..., 7 for '8')
  const rowIndex = Number.parseInt(row) - 1;

  // Determine if the square is white or black
  return (columnIndex + rowIndex) % 2 !== 0;
};
