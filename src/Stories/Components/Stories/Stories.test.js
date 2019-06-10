import { Stories } from './Stories';
import { noop } from 'lodash';

it('Stories renders correctly', () => {
  expect(Stories({ createStory: noop, estimate: noop })).toMatchSnapshot();
});
