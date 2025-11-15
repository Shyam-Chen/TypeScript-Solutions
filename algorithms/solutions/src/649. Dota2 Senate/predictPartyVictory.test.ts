import { predictPartyVictory } from './predictPartyVictory';

describe('649. Dota2 Senate', () => {
  test('predictPartyVictory', () => {
    expect(predictPartyVictory('RD')).toBe('Radiant');
    expect(predictPartyVictory('RDD')).toBe('Dire');
  });
});
