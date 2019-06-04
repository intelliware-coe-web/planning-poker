import { STORIES_SUCCESS } from "../Actions/StoriesActions";

export default function StoriesReducer(state = [], action) {
    if (action.type === STORIES_SUCCESS) {
        return action.payload.stories;
    } else {
        return state;
    }
}
