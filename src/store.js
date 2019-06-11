import {applyMiddleware, compose, createStore} from 'redux';
import {createHashHistory} from 'history';
import createRootReducer from './RootReducer';
import {routerMiddleware} from "connected-react-router";
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {watchUserAsync} from './User/Actions/UserActions';
import {watchMeetingsAsync} from './Meetings/Actions/MeetingsActions';
import {watchCurrentMeetingAsync} from './CurrentMeeting/Actions/CurrentMeetingActions';
import {watchRouterAsync} from './Navigation/route-actions';
import {watchStoriesAsync} from './Stories/Actions/StoriesActions';
import {watchStoryEstimateAsync} from './StoryEstimate/Actions/StoryEstimateActions';
import {watchCurrentStoryAsync} from './CurrentStory/Actions/CurrentStoryActions'
import {watchStoryEstimatesAsync} from './CurrentStory/Actions/StoryEstimatesActions';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHashHistory();

function* rootSaga() {
    yield all([
        watchUserAsync(),
        watchMeetingsAsync(),
        watchCurrentMeetingAsync(),
        watchStoryEstimateAsync(),
        watchCurrentMeetingAsync(),
        watchCurrentStoryAsync(),
        watchStoryEstimatesAsync(),
        watchRouterAsync(),
        watchStoriesAsync()
    ]);
}

export default function store() {
    const store = createStore(
        createRootReducer(history),
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware
        ))
    );

    sagaMiddleware.run(rootSaga);

    return store;
};
