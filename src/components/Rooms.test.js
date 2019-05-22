import Rooms from './Rooms';

describe('Component: Rooms', () => {
  test('should render', () => {
    expect(Rooms({ rooms: ['A', 'B', 'C'] })).toMatchSnapshot();
  });
});
