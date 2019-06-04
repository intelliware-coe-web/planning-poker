import {ESTIMATE_STORY_REQUESTED} from "../Actions/EstimateActions";
import estimateStoryReducer from "./EstimateStoryReducer";

describe('Estimate Story Reducer', () => {

    it('', () => {
        const initialState = {
            storyId: 'Story - ABC',
            storyDescription: 'Describes the story',
            estimate: 0
        };
        const action = {type: ESTIMATE_STORY_REQUESTED, payload: {estimate: 3}};
        const expectedNextState = {
            storyId: 'Story - ABC',
            storyDescription: 'Describes the story',
            estimate: 3
        };
        const actualNextState = estimateStoryReducer(initialState, action);
        expect(expectedNextState).toEqual(actualNextState);
    });
});