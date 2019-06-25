import * as types from './actionType';
import {beginAjaxCall} from './ajaxStatusActions';
import {loadArticlesApi} from './../api/articleApi';

export function loadArticleSuccess(articles){
    return {type: types.LOAD_ARTICLES_SUCCESS, articles};
}

export function loadArticles(){
    return dispatch =>{
        dispatch(beginAjaxCall());
        return loadArticlesApi()
        .then(articles =>{
            dispatch(loadArticleSuccess(articles));
        }).catch(error =>{
            throw(error);
        })
    }
}