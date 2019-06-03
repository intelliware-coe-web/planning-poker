import {ESTIMATE_STORY} from "../Actions/EstimateActions";
import estimateStoryReducer from "./EstimateStoryReducer";

describe('Estimate Story Reducer', () => {

    it('', () => {
        const initialState = {
            storyId: 'Story - ABC',
            storyDescription: 'Describes the story',
            estimate: 0
        };
        const action = {type: ESTIMATE_STORY, payload: {estimate: 3}};
        const expectedNextState = {
            storyId: 'Story - ABC',
            storyDescription: 'Describes the story',
            estimate: 3
        };
        const actualNextState = estimateStoryReducer(initialState, action);
        expect(expectedNextState).toEqual(actualNextState);
    });
});