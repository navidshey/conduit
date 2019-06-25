import * as types from './actionType';

export function beginAjaxCall(){
    return {type: types.beginAjaxCall};
}

export function ajaxCallError(){
    return {type: types.AJAX_CALL_ERROR};
}