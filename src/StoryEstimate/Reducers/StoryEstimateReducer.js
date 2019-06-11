import {STORY_ESTIMATE_SUCCESS} from "../Actions/StoryEstimateActions";

const initialState = {
    storyEstimate: 0
};

export default function storyEstimateReducer(state = initialState, action) {
    if (action.type === STORY_ESTIMATE_SUCCESS) {
        return action.payload.storyEstimate;
    } else {
        return state;
    }
}