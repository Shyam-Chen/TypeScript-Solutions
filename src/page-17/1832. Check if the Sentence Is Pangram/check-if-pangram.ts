type CheckIfPangram = (sentence: string) => boolean;

export const checkIfPangram: CheckIfPangram = (sentence) => {
  return new Set([...sentence]).size === 26;
};
