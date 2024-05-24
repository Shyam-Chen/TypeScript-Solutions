import { numPrimeArrangements } from './num-prime-arrangements';

describe('1175. Prime Arrangements', () => {
  it('numPrimeArrangements', () => {
    expect(numPrimeArrangements(5)).toEqual(12);
    expect(numPrimeArrangements(100)).toEqual(682289015);
  });
});
