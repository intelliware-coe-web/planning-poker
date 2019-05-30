import storyReducer, {ESTIMATE_STORY} from "./estimate.flux";

describe('Story Reducer', () => {

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
        const actualNextState = storyReducer(initialState, action);
        expect(expectedNextState).toEqual(actualNextState);
    });
});