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

    it('should keep state on other messages', () =>{
        const inititalState = [];
        const stories = [{
            name: 'Test Story',
            id: '12345'
        }];
        const action = {
            type: 'FOO_STORIES',
            payload: {
                stories: stories
            }
        };

        const actualNextState = storyEstimateReducer(inititalState, action);
        expect(actualNextState).toBe(inititalState);
    });
});