import StackedLinks from './StackedLinks';

describe('Component: Rooms', () => {
  test('should render', () => {
    const links =  [
      { 'href': '/room/A', 'label': 'A' },
      { 'href': '/room/B', 'label': 'B' },
      { 'href': '/room/C', 'label': 'C' },
    ];

    expect(StackedLinks({ links })).toMatchSnapshot();
  });
});

