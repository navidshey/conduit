import {combineReducers} from 'redux';
import articles from './articleReducer';
import tags from './tagReducer';
import ajaxCallInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    articles,
    tags,
    ajaxCallInProgress
});

export default rootReducer;