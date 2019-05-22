import { Login } from './Login';

describe('Component: Login', () => {
  test('should render', () => {
    expect(Login()).toMatchSnapshot();
  });
});
