type IsSumEqual = (firstWord: string, secondWord: string, targetWord: string) => boolean;

export const isSumEqual: IsSumEqual = (firstWord, secondWord, targetWord) => {
  const sum = (str: string): number =>
    Array.from(str).reduce((acc, cur) => Number(acc) + (cur.charCodeAt(0) - 'a'.charCodeAt(0)), 0);

  const source = sum(firstWord) + sum(secondWord);
  const target = sum(targetWord);

  return source === target;
};
