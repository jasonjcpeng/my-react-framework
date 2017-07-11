/**
 *
 * Created by pengjingcheng on 2017/7/10.
 */
import {Map,List} from 'immutable'
import ARC from '../_tools/action-and-reducer-creator'

const SelectContent = (state)=>{
    return  state.get('content').concat(state.get('asyncContent'))
}
let initState = Map({
    showMenu:false,
    asyncContent:[],
    content:['I am normal content','John','Tracy','Jason'],
    selectContent:[]
})
initState = initState.update('selectContent',v=>SelectContent(initState))
export default ARC.CreateReducer(initState,{
    'HOME/CLICK/TOGGLE/MENU':(state,action)=>{return state.update('showMenu',v=>!v)},
    'HOME/MENU/GET/CONTENT':(state,action)=>{let temp = state.update('asyncContent',v=>action.payload)
        return temp.update('selectContent',v=>SelectContent(temp))
    },
})