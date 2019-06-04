import { STORIES_SUCCESS } from "../Actions/StoriesActions";
import StoriesReducer from "./StoriesReducer";

describe('StoriesReducer', () =>{

    it('should set the GetStories to a stories array when it is a success', () =>{
        const inititalState = [];
        const stories = [{
            name: 'Test Story',
            id: '12345'
        }];
        const action = {
            type: STORIES_SUCCESS,
            payload: {
                stories: stories
            }
        };

        const actualNextState = StoriesReducer(inititalState, action);
        expect(actualNextState).toEqual(stories);
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

        const actualNextState = StoriesReducer(inititalState, action);
        expect(actualNextState).toBe(inititalState);
    });
});