import { suggestedProducts } from './suggestedProducts';

describe('1268. Search Suggestions System', () => {
  test('suggestedProducts', () => {
    expect(
      suggestedProducts(['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'], 'mouse'),
    ).toStrictEqual([
      ['mobile', 'moneypot', 'monitor'],
      ['mobile', 'moneypot', 'monitor'],
      ['mouse', 'mousepad'],
      ['mouse', 'mousepad'],
      ['mouse', 'mousepad'],
    ]);

    expect(suggestedProducts(['havana'], 'havana')).toStrictEqual([
      ['havana'],
      ['havana'],
      ['havana'],
      ['havana'],
      ['havana'],
      ['havana'],
    ]);
  });
});
