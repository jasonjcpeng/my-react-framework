import * as Constants from './CONSTANTS';

export const actionClick = (e)=>{
    return dispatch=>{
        return dispatch({
            type:'CLICK',
            payload:e
        });
    }
}