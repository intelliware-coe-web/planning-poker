import Rooms from './Rooms';

describe('Component: Rooms', () => {
  test('should render', () => {
    expect(Rooms()).toMatchSnapshot();
  });
});
