import { Host } from './Host';
import { noop } from 'lodash';

it('Host renders correctly', () => {
  expect(Host({ addStory: noop, estimate: noop })).toMatchSnapshot();
});
