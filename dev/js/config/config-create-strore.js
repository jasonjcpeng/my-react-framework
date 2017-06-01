import {createStore,applyMiddleware,compose,preloadedState} from 'redux';
import thunk from 'redux-thunk';
export default function (reducer) {
    const store = createStore(reducer,undefined,
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    return store;
}

