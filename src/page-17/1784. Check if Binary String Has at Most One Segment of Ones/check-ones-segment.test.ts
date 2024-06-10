import { checkOnesSegment } from './check-ones-segment';

describe('1784. Check if Binary String Has at Most One Segment of Ones', () => {
  test('checkOnesSegment', () => {
    expect(checkOnesSegment('1001')).toBe(false);
    expect(checkOnesSegment('110')).toBe(true);
  });
});
