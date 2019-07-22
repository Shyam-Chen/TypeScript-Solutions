export const lengthOfLastWord = (str: string): number =>
  str.split(/\s/g).pop().length;
