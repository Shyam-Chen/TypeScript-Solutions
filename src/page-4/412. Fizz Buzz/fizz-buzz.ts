interface FizzBuzz {
  (n: number): string[];
}

/**
 * Accepted
 */
export const fizzBuzz: FizzBuzz = (n) => {
  const result = [];

  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) result.push('FizzBuzz');
    else if (i % 3 === 0) result.push('Fizz');
    else if (i % 5 === 0) result.push('Buzz');
    else result.push(String(i));
  }

  return result;
};
