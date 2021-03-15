import { checkOnesSegment } from './check-ones-segment';

describe('1784. Check if Binary String Has at Most One Segment of Ones', () => {
  it('checkOnesSegment', () => {
    expect(checkOnesSegment('1001')).toEqual(false);
    expect(checkOnesSegment('110')).toEqual(true);
  });
});
