import { STORY_ESTIMATES_SUCCESS } from "../Actions/StoryEstimatesActions";
import StoryEstimatesReducer from "./StoryEstimatesReducer";

describe('StoryEstimates Reducer ', () => {
    it('should set the GetStoryEstimates to estimateLists when it is a success', () => {
        const initialState = [];
        const estimateList = [
            {
                user: { _id: '123' },
                estimate: 5
            }
        ];
        const action = { type: STORY_ESTIMATES_SUCCESS, payload: { estimateList: estimateList } };

        const actualNextState = StoryEstimatesReducer(initialState, action);
        expect(actualNextState).toEqual(estimateList);
    });

    it('should keep state on other messages', () => {
        const initialState = [];
        const currentStory = [{ name: 'Story A', id: '123456789' }];
        const action = { type: 'FOO_MESSAGE', payload: { currentStory} };

        const actualNextState = StoryEstimatesReducer(initialState, action);
        expect(actualNextState).toEqual(initialState);
    });
});
