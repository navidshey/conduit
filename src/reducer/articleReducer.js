import * as types from './../action/actionType';
import initialState from './initialState';

export default function articleReducer(state = initialState.articles, action) {
    switch (action.type) {
        case types.LOAD_ARTICLES_SUCCESS: {
            return action.articles;
        }
        default:
            return state;
    }
}