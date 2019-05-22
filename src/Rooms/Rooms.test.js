import Rooms from "./Rooms";

it('renders correctly', () => {
    expect(new Rooms()).toMatchSnapshot(); 
});