import { checkOnesSegment, checkOnesSegment2 } from './checkOnesSegment';

describe('1784. Check if Binary String Has at Most One Segment of Ones', () => {
  test('checkOnesSegment', () => {
    expect(checkOnesSegment('1001')).toBe(false);
    expect(checkOnesSegment('110')).toBe(true);
  });

  test('checkOnesSegment2', () => {
    expect(checkOnesSegment2('1001')).toBe(false);
    expect(checkOnesSegment2('110')).toBe(true);
  });
});
