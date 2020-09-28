export const numPrimeArrangements = (n: number): number => {
  const kMod = 1e9 + 7;

  const isPrime = (val: number): boolean => {
    if (val < 2) return false;
    if (val === 2) return true;

    for (let i = 2; i <= Math.sqrt(val); i += 1) {
      if (val % i === 0) return false;
    }

    return true;
  };

  let primeCount = 0;

  for (let i = 1; i <= n; i += 1) {
    if (isPrime(i)) primeCount += 1;
  }

  let result = 1;

  for (let i = 1; i <= primeCount; i += 1) {
    result = (result * i) % kMod;
  }

  for (let i = 1; i <= n - primeCount; i += 1) {
    result = (result * i) % kMod;
  }

  return result;
};
