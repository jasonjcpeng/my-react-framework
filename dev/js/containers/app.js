import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ActionCreators from '../action/app';
import {List,Map} from 'immutable';

class App extends React.Component {
    render() {
        let {actionClick,click} =this.props;
        return <div className="app">
            <h1>{click.get(0)}</h1>
            <button onClick={
                e=>{
                    actionClick(1000);
                }
            } style={{height:100,width:100}}>点击</button>
        </div>;
    }
}

function state(state) {
    return ({
        click:state.common.get('onClick')
    });
}

function action(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(state, action)(App);