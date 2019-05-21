import estimate from './poker';

describe('Poker', () => {
  test('should create an immutable estimate object', () => {
    expect(() => {
      const actual = estimate(5);
      actual.size = 10;
    }).toThrow();
  });
});
