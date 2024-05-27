import { MyHashMap } from './MyHashMap';

describe('706. Design HashMap', () => {
  it('MyHashMap', () => {
    const myHashMap = new MyHashMap();
    myHashMap.put(1, 1);
    myHashMap.put(2, 2);
    expect(myHashMap.get(1)).toEqual(1);
    expect(myHashMap.get(3)).toEqual(-1);
    myHashMap.put(2, 1);
    expect(myHashMap.get(2)).toEqual(1);
    myHashMap.remove(2);
    expect(myHashMap.get(2)).toEqual(-1);
  });
});
