import { CURRENT_STORY_SUCCESS } from "../Actions/CurrentStoryActions";

const initialState = {
    "_id": null,
    "name": "No story selected",
    "description": "No story selected"
};

export default function CurrentStoryReducer(state = initialState, action) {
    if (action.type === CURRENT_STORY_SUCCESS ) {
        return action.payload.currentStory !== null ? action.payload.currentStory : initialState;
    } else {
        return state;
    }
}
