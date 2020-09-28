import { convertToBase7 } from './base7';

describe('504. Base 7', () => {
  it('convertToBase7', () => {
    expect(convertToBase7(100)).toEqual('202');
    expect(convertToBase7(-7)).toEqual('-10');
  });
});
