import CreateUser from "./CreateUser";

it('CreateUser renders correctly', () => {
    expect(new CreateUser().render()).toMatchSnapshot(); 
});