import { Host } from './Host';
import { noop } from 'lodash';

it('Host renders correctly', () => {
  expect(Host({ createStory: noop, estimate: noop })).toMatchSnapshot();
});
