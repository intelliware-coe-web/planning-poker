import { STORY_ESTIMATES_SUCCESS } from "../Actions/StoryEstimatesActions";
import StoryEstimatesReducer from "./StoryEstimatesReducer";

describe('StoryEstimates Reducer ', () => {
    it('should set the GetStoryEstimates to storyEstimatess when it is a success', () => {
        const initialState = [];
        const storyEstimates = [
            {
                user: { _id: '123' },
                estimate: 5
            }
        ];
        const action = { type: STORY_ESTIMATES_SUCCESS, payload: { storyEstimates: storyEstimates } };

        const actualNextState = StoryEstimatesReducer(initialState, action);
        expect(actualNextState).toEqual(storyEstimates);
    });

    it('should keep state on other messages', () => {
        const initialState = [];
        const currentStory = [{ name: 'Story A', id: '123456789' }];
        const action = { type: 'FOO_MESSAGE', payload: { currentStory} };

        const actualNextState = StoryEstimatesReducer(initialState, action);
        expect(actualNextState).toEqual(initialState);
    });
});
