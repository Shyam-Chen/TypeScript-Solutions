export const removeElement = <T extends number>(nums: T[], val: T): number =>
  nums.filter(num => num !== val).length;
