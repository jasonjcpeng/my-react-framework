import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ActionCreators from '../action/app';
import {List,Map} from 'immutable';

class App extends React.Component {
    render() {
        return <div className="app">

        </div>;
    }
}

function state(state) {
    return ({});
}

function action(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(state, action)(App);