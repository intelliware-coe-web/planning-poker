import { STORY_ESTIMATES_SUCCESS } from "../Actions/StoryEstimatesActions";

const initialState = [];

export default function StoryEstimatesReducer(state = initialState, action) {
    if (action.type === STORY_ESTIMATES_SUCCESS ) {
        return action.payload.estimateList;
    } else {
        return state;
    }
}
