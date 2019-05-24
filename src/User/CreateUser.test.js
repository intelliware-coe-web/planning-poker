import CreateUser from "./CreateUser";

it('CreateUser renders correctly', () => {
    expect(CreateUser()).toMatchSnapshot(); 
});