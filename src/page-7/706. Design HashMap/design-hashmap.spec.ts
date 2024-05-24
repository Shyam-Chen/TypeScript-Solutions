import { HashMap } from './design-hashmap';

describe('706. Design HashMap', () => {
  it('HashMap', () => {
    const hashMap = new HashMap();

    hashMap.put(1, 1);
    hashMap.put(2, 2);
    expect(hashMap.get(1)).toEqual(1);
    expect(hashMap.get(3)).toEqual(-1);
    hashMap.put(2, 1);
    expect(hashMap.get(2)).toEqual(1);
    hashMap.remove(2);
    expect(hashMap.get(2)).toEqual(-1);
  });
});
