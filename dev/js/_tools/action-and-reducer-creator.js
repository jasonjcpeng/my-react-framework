/**
 * Created by pengjingcheng on 2017/7/10.
 *
 */
class ActionReducerCreator {
    /*
     * Reducer生成器，接收带有Selector的initState参数并在Reducer函数最后遍历执行Selector
     * 实现动态Selector修改。参照Vue计算属性computed思想
     * Required:immutableJS
     * initState:immutable Map
     * */
    static CreateReducer(initState, handlers) {
        const selector = []
        initState.forEach((v, k) => {
            if (k.match(/^\$/g)) {
                if (typeof v === 'function') {
                    selector.push({
                        key: k,
                        func: v
                    })
                }
            }
        })
        return (state = initState, action) => {
            let resultState
            if (handlers.hasOwnProperty(action.type)) {
                resultState = handlers[action.type](state, action)
            } else {
                resultState = state
            }
            return selector.reduce((preResult, currentValue) => {
                let key = currentValue.key
                let func = currentValue.func
                return preResult.update(key, k => func(preResult))
            }, resultState)
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

    static AsyncCreateAction(type, promise, args) {
        return () => {
            return dispatch => {
                (async () => {
                    try {
                        let payload = await promise(args)
                        return dispatch({
                            type: type,
                            payload: payload
                        })
                    } catch (e) {
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