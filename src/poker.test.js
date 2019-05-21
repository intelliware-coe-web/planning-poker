import poker from './poker';

describe('Poker', () => {
  const fixture = poker();

  test('should notify subscribers', () => {
    const mockSub = jest.fn();
    fixture.onEstimate(mockSub);
    fixture.estimate(5);
    expect(mockSub).toHaveBeenCalledWith(5);
  });
});
