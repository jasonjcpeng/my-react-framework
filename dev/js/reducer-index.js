import {combineReducers} from 'redux'
import home from './container/home/store'
import about from './container/about/store'


const allReducers = combineReducers({
    about:about,
    home:home
})


export default allReducers