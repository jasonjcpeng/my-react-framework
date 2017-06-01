/**
 * Created by JasonPeng on 2017/5/24.
 */
import * as CONSTANTS from '../action/CONSTANTS';
import {Map,List} from 'immutable';

const initState = Map({
    sample:[{key:[0,1,2,3,4]},{key:2},{key:3}],
    onClick:List([])
});

export default (state = initState,action)=>{
    switch(action.type){
        case 'CLICK':
            return state.update('onClick',list=>{
                let newList = list.clear();
               return newList.push(action.payload);
            });
            break;
    }
    return state;
}