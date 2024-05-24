export const buddyStrings = (A: string, B: string): boolean => {
  if (A.length !== B.length) return false;

  let cnt = 0;

  for (let i = 0; i < A.length; i += 1) {
    if (A[i] !== B[i]) cnt += 1;
    if (cnt > 2) return false;
  }

  if (cnt === 0) {
    return new Set(A).size !== A.length;
  }

  return cnt === 2;
};
