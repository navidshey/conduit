import * as types from './../action/actionType';
import initialState from './initialState';

export default function tagReducer(state = initialState.tags, action) {
    switch (action.type) {
        case types.LOAD_TAGS_SUCCESS: {
            return action.tags;
        }
        default:
            return state;
    }
}