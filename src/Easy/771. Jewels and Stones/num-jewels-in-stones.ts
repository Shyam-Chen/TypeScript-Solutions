export const numJewelsInStones = (J: string, S: string): number => {
  const jewels = new Set([...J]);  // Define a list of jewelry
  const stones = Array.from(S);  // List of stones

  let num = 0;

  stones.forEach((stone) => {
    // If the stone contains the defined jewels
    if (jewels.has(stone)) {
      num += 1;
    }
  });

  return num;
};
