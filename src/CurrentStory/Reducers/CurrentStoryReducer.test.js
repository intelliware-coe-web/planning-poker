import CurrentStoryReducer from './CurrentStoryReducer';
import { CURRENT_STORY_SUCCESS } from "../Actions/CurrentStoryActions";

describe('Current Meeting Reducer ', () => {
    it('should set the GetMeeting to currentMeeting when it is a success', () => {
        const initialState = [];
        const currentStory = {
            name: 'Story A',
            id: '123456789'
        };
        const action = { type: CURRENT_STORY_SUCCESS, payload: { currentStory } };

        const actualNextState = CurrentStoryReducer(initialState, action);
        expect(actualNextState).toEqual(currentStory);
    });

    it('should keep state on other messages', () => {
        const initialState = [];
        const currentStory = [{ name: 'Story A', id: '123456789' }];
        const action = { type: 'FOO_MESSAGE', payload: { currentStory} };

        const actualNextState = CurrentStoryReducer(initialState, action);
        expect(actualNextState).toBe(initialState);
    });
});
