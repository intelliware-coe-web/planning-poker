import { Room } from './Room';

describe('Component: Room', () => {
  test('should render', () => {
    const match = { match: { params: { roomId: 'B' } } };
    expect(Room(match)).toMatchSnapshot();
  });
});
