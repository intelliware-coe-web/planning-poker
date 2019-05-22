import Rooms from "./Rooms";

it('Rooms renders correctly', () => {
    expect(Rooms()).toMatchSnapshot(); 
});