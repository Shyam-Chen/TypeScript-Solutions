type ThreeConsecutiveOdds = (arr: number[]) => boolean;

export const threeConsecutiveOdds: ThreeConsecutiveOdds = (arr) => {
  let count = 0;

  for (let index = 0; index < arr.length; index++) {
    const num = arr[index];

    if (num % 2 === 1) {
      count += 1;
      if (count === 3) return true;
    } else {
      count = 0;
    }
  }

  return false;
};
