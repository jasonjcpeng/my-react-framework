import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import '../js/api/mockData'
import configCreateStore from './config/config-create-strore'
import allReducers from './store'
import RouterIndex from './router'
import '../less/style.less'

const store = configCreateStore(allReducers)
/*store.subscribe(()=>{
 window.localStorage.setItem('store',JSON.stringify(store.getState()));
 });*/


if (document.getElementById('root')) {
    ReactDOM.render(<Provider store={store}>
        <RouterIndex/>
    </Provider>, document.getElementById('root'))
}


