type CheckIfPangram = (sentence: string) => boolean;

/**
 * Accepted
 */
export const checkIfPangram: CheckIfPangram = (sentence) => {
  return new Set([...sentence]).size === 26;
};
