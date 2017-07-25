/**
 *
 * Created by pengjingcheng on 2017/7/10.
 */
import {Map,List} from 'immutable'
import ARC from '../_tools/action-and-reducer-creator'

const $SelectContent = (state)=>{
    return  state.get('content').concat(state.get('asyncContent'))
}
let initState = Map({
    showMenu:true,
    asyncContent:[],
    content:['I am normal content','John','Tracy','Jason'],
    $selectContent:$SelectContent
})
export default ARC.CreateReducer(initState,{
    'HOME/CLICK/TOGGLE/MENU':(state,action)=>{return state.update('showMenu',v=>!v)},
    'HOME/MENU/GET/CONTENT':(state,action)=>{return state.update('asyncContent',v=>action.payload)},
})
