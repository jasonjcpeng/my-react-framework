import {combineReducers} from 'redux'
import home from './container/home/reducer'
import about from './container/about/reducer'


const allReducers = combineReducers({
    about:about,
    home:home
})


export default allReducers