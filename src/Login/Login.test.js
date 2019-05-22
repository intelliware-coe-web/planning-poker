import Login from "./Login";

it('Login renders correctly', () => {
    expect(Login()).toMatchSnapshot(); 
});