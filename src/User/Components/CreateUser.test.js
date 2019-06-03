import {CreateUser} from './CreateUser';

describe('Container: User', () => {
    it('should render CreateUser correctly', () => {       
        const props = {
            user: {
                name: 'Mock User'
            },
            error: null,
            goToMeetings: jest.fn()
        }
        expect(CreateUser(props)).toMatchSnapshot();
    });
});