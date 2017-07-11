import {createStore,applyMiddleware,compose,preloadedState} from 'redux'
import thunk from 'redux-thunk'

export default function (reducer) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(reducer,preloadedState,composeEnhancers(
        applyMiddleware(thunk)
    ))
    return store
}

