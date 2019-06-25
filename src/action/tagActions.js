import * as types from './actionType';
import {beginAjaxCall} from './ajaxStatusActions';
import {loadTagsApi} from './../api/tagApi';

export function loadTagsSuccess(tags){
    return {type: types.LOAD_TAGS_SUCCESS, tags};
}

export function loadTags(){
    return dispatch =>{
        dispatch(beginAjaxCall());
        return loadTagsApi()
        .then(tags =>{
            dispatch(loadTagsSuccess(tags));
        }).catch(error =>{
            throw(error);
        })
    }
}