export const numJewelsInStones = (J: string, S: string): number => {
  const jewels = new Set([...J]); // define a list of jewelry
  const stones = Array.from(S); // list of stones

  let num = 0;

  for (const stone of stones) {
    // if the stone contains the defined jewels
    if (jewels.has(stone)) {
      num += 1;
    }
  }

  return num;
};
