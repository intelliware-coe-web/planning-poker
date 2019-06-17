import CurrentStoryReducer from './CurrentStoryReducer';
import { CURRENT_STORY_SUCCESS } from "../Actions/CurrentStoryActions";

describe('Current Story Reducer ', () => {
    it('should set the GetCurrentStory to currentStory when it is a success', () => {
        const initialState = [];
        const currentStory = {
            name: 'Story A',
            id: '123456789'
        };
        const action = { type: CURRENT_STORY_SUCCESS, payload: { currentStory } };

        const actualNextState = CurrentStoryReducer(initialState, action);
        expect(actualNextState).toEqual(currentStory);
    });

    it('should set the GetCurrentStory to the initial state when it is a success but response is null', () => {
        const initialState = {
            "_id": null,
            "name": "No story selected"
        };
        const currentStory = null;
        const action = { type: CURRENT_STORY_SUCCESS, payload: { currentStory } };

        const actualNextState = CurrentStoryReducer(initialState, action);
        expect(actualNextState).toEqual(initialState);
    });

    it('should keep state on other messages', () => {
        const initialState = [];
        const currentStory = [{ name: 'Story A', id: '123456789' }];
        const action = { type: 'FOO_MESSAGE', payload: { currentStory} };

        const actualNextState = CurrentStoryReducer(initialState, action);
        expect(actualNextState).toBe(initialState);
    });
});
