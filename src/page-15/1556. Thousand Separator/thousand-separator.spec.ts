import {
  thousandSeparator,
  thousandSeparator2,
  thousandSeparator3,
  thousandSeparator4,
} from './thousand-separator';

describe('1556. Thousand Separator', () => {
  it('thousandSeparator', () => {
    expect(thousandSeparator(987)).toEqual('987');
    expect(thousandSeparator(1234)).toEqual('1.234');
    expect(thousandSeparator(123456789)).toEqual('123.456.789');
    expect(thousandSeparator(987)).toEqual('987');
  });

  it('thousandSeparator2', () => {
    expect(thousandSeparator2(987)).toEqual('987');
    expect(thousandSeparator2(1234)).toEqual('1.234');
    expect(thousandSeparator2(123456789)).toEqual('123.456.789');
    expect(thousandSeparator2(987)).toEqual('987');
  });

  it('thousandSeparator3', () => {
    expect(thousandSeparator3(987)).toEqual('987');
    expect(thousandSeparator3(1234)).toEqual('1.234');
    expect(thousandSeparator3(123456789)).toEqual('123.456.789');
    expect(thousandSeparator3(987)).toEqual('987');
  });

  it('thousandSeparator4', () => {
    expect(thousandSeparator4(987)).toEqual('987');
    expect(thousandSeparator4(1234)).toEqual('1.234');
    expect(thousandSeparator4(123456789)).toEqual('123.456.789');
    expect(thousandSeparator4(987)).toEqual('987');
  });
});
