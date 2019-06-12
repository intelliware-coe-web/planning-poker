import { STORY_ESTIMATE_SUCCESS } from '../Actions/StoryEstimateActions';
import storyEstimateReducer from './StoryEstimateReducer';

describe('Story Estimate Reducer', () => {

    it('should update estimate on success', () => {
        const initialState = 0;
        const expectedStoryEstimate = 3;
        const action = {type: STORY_ESTIMATE_SUCCESS, payload: {estimate: expectedStoryEstimate}};
        
        const actualNextState = storyEstimateReducer(initialState, action);
        expect(actualNextState).toEqual(expectedStoryEstimate);
    });
});