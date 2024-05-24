interface SquareIsWhite {
  (coordinates: string): boolean;
}

export const squareIsWhite: SquareIsWhite = (coordinates) => {
  // 'a'.charCodeAt(0) === 97
  // 'b'.charCodeAt(0) === 98
  // 'c'.charCodeAt(0) === 99
  const x = coordinates[0].charCodeAt(0) - 96; // Start at 1, but it can be omitted.
  const y = Number(coordinates[1]);

  return Boolean((x + y) % 2);
};
