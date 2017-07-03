import {combineReducers} from 'redux'
import common from './common'
const appRouter = function(state='index',action){
    switch(action.type){
        case 'APP_ROUTER':
            return action.index
    }
    return state
}

const allReducers = combineReducers({
    appRouter:appRouter,
    common:common
})

export default allReducers