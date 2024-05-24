import { convertToBase7, convertToBase72 } from './convert-to-base7';

describe('504. Base 7', () => {
  it('convertToBase7', () => {
    expect(convertToBase7(100)).toEqual('202');
    expect(convertToBase7(-7)).toEqual('-10');
  });

  it('convertToBase72', () => {
    expect(convertToBase72(100)).toEqual('202');
    expect(convertToBase72(-7)).toEqual('-10');
  });
});
