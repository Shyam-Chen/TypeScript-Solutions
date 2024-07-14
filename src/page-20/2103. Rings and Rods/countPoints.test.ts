import { countPoints } from './countPoints';

describe('2103. Rings and Rods', () => {
  test('countPoints', () => {
    expect(countPoints('B0B6G0R6R0R6G9')).toBe(1);
    expect(countPoints('B0R0G0R9R0B0G0')).toBe(1);
    expect(countPoints('G4')).toBe(0);
  });
});
