import {Meetings} from "./Meetings";
import {render} from "@testing-library/react";
import React from "react";

it('Meetings renders correctly', () => {
    const props = {
        meetings: [{_id: 'id', name: 'test'}],
        error: null,
        goToMeeting: jest.fn(),
        goToCreateMeeting: jest.fn(),
        deleteMeeting: jest.fn(),
        getMeetings: jest.fn()
    };
    const {container} = render(<Meetings  {...props}/>);
    expect(container).toMatchSnapshot();
});
