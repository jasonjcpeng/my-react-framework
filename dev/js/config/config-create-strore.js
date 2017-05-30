import {createStore,applyMiddleware,compose,preloadedState} from 'redux';
import saga from 'redux-saga';
import RootSaga from '../action/ansyc';
export default function (reducer) {
    let sagaMiddleware = saga();
    let store = compose(applyMiddleware(sagaMiddleware))(createStore)(reducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    sagaMiddleware.run(RootSaga);
    return store;
}

