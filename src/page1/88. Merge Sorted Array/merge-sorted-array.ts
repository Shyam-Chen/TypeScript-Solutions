export const merge = <T extends number>(nums1: T[], m: T, nums2: T[], n: T): number[] => {
  const arr1 = nums1.slice(0, m);
  const arr2 = nums2.slice(0, n);

  const result = [...arr1, ...arr2].sort();

  return result;
};

export const merge2 = <T extends number>(nums1: T[], m: T, nums2: T[], n: T): number[] => {
  let [x, y]: [number, number] = [m, n];

  let i = x + y;

  x -= 1;
  y -= 1;

  while (i -= 1) {
    if (y < 0 || nums1[x] > nums2[y]) {
      nums1[i] = nums1[x--];
    } else {
      nums1[i] = nums2[y--];
    }
  }

  return nums1;
};
