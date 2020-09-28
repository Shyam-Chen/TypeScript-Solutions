interface ReorderSpaces {
  (text: string): string;
}

export const reorderSpaces: ReorderSpaces = (text) => {
  if (!/\s/g.test(text)) return text;

  const wordLength = text.split(' ').filter(Boolean).length;
  const spaceLength = text.split(' ').length - 1;

  const words = text.split(' ').filter(Boolean);
  const spaces = Array.from({ length: spaceLength }, () => ' ');

  const divideLength = Math.floor(spaceLength / (wordLength - 1));

  const dividedspaces = Array.from(Array(Math.ceil(spaces.length / divideLength)), (v, i) =>
    spaces.slice(i * divideLength, i * divideLength + divideLength),
  ).map((i) => i.join(''));

  for (let j = 0; j < dividedspaces.length; j += 1) {
    words.splice(j * 2 + 1, 0, dividedspaces[j]);
  }

  return words.join('');
};
