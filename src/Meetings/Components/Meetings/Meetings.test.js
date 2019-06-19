import {Meetings} from "./Meetings";
import {cleanup, render} from "@testing-library/react";
import React from "react";

describe('Container: Meetings', () => {

    afterEach(cleanup);

    it('should render correctly', () => {
        const props = {
            meetings: [{_id: 'id', name: 'test'}],
            error: null,
            goToMeeting: jest.fn(),
            goToCreateMeeting: jest.fn(),
            deleteMeeting: jest.fn(),
            startPollingMeetings: jest.fn(),
            stopPollingMeetings: jest.fn()
        };
        const {container} = render(<Meetings  {...props}/>);
        expect(container).toMatchSnapshot();
    });
});
