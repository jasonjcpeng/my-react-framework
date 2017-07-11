/**
 *
 * Created by pengjingcheng on 2017/7/10.
 */
class ActionReducerCreator {
    static CreateReducer(initState,handlers){
        return (state = initState,action)=>{
            if(handlers.hasOwnProperty(action.type)){
                return handlers[action.type](state,action)
            }else{
                return state
            }
        }
    }

    static CreateAction(type, payload) {
        return (() => {
            return ({
                type: type,
                payload: payload
            })
        })
    }

    static CreateAsyncAction(type, promise, args) {
        return () => {
            return dispatch => {
                (async () => {
                    try{
                        let payload = await promise(args)
                        return dispatch({
                            type: type,
                            payload: payload
                        })
                    }catch(e){
                        return dispatch({
                            type: 'ERROR',
                            payload: e
                        })
                    }
                })()
            }
        }
    }
}

export default ActionReducerCreator