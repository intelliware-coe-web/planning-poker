import {CreateMeetingButton} from './CreateMeetingButton';

it('AddMeetingButton renders correctly', () => {
    const props = {
        goToCreateMeeting: jest.fn()
    }
    expect(CreateMeetingButton(props)).toMatchSnapshot(); 
});