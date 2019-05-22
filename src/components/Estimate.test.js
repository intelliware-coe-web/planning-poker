import Estimate from './Estimate';

describe('Component: Estimate', () => {
  test('should render', () => {
    expect(Estimate({estimates: ['A', 'B', 'C']})).toMatchSnapshot();
  });
});
