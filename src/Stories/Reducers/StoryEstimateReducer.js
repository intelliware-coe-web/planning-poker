import {STORY_ESTIMATE_SUCCESS} from "../Actions/StoryEstimateActions";

const initialState = 0;

export default function storyEstimateReducer(state = initialState, action) {
    if (action.type === STORY_ESTIMATE_SUCCESS) {
        return action.payload.estimate;
    } else {
        return state;
    }
}