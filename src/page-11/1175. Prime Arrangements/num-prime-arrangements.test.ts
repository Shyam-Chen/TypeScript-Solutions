import { numPrimeArrangements } from './num-prime-arrangements';

describe('1175. Prime Arrangements', () => {
  test('numPrimeArrangements', () => {
    expect(numPrimeArrangements(5)).toBe(12);
    expect(numPrimeArrangements(100)).toBe(682289015);
  });
});
