import { CURRENT_STORY_SUCCESS } from "../Actions/CurrentStoryActions";

const initialState = {
    "_id": null,
    "name": "No story selected",
    "description": "No story selected",
    "created_date": null,
    "__v": null
};

export default function CurrentStoryReducer(state = initialState, action) {
    if (action.type === CURRENT_STORY_SUCCESS ) {
        return action.payload.currentStory;
    } else {
        return state;
    }
}
