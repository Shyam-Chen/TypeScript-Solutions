import { OrderedStream } from './ordered-stream';

describe('1656. Design an Ordered Stream', () => {
  it('OrderedStream', () => {
    const os = new OrderedStream(5);

    expect(os.insert(3, 'ccccc')).toEqual([]);
    expect(os.insert(1, 'aaaaa')).toEqual(['aaaaa']);
    expect(os.insert(2, 'bbbbb')).toEqual(['bbbbb', 'ccccc']);
    expect(os.insert(5, 'eeeee')).toEqual([]);
    expect(os.insert(4, 'ddddd')).toEqual(['ddddd', 'eeeee']);

    expect(os.list).toEqual(['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee']);
  });
});
