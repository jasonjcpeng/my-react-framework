import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as ActionCreators from '../action/app'
import PropTypes from 'prop-types'
import {List, Map} from 'immutable'
import asyncButton from 'bundle-loader?lazy&name=[name]!../components/button'

class ALC {
    static _getComponent(asyncComponent) {
        return new Promise((resolve, reject) => {
            try {
                asyncComponent(file => {
                    resolve(file.default)
                })
            } catch (e) {
                reject('React lazy load get wrong with:' + e)
            }
        })
    }
     static GetComponent(index) {
        return new Promise((resolve, reject) => {
            switch (index) {
                case 'button':
                    this._getComponent(asyncButton).then(res => {
                        resolve(res)
                    }).catch(e => console.error(e))
                    break
            }
        })
    }
}


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            reload:null
        }
    }
    
    shouldComponentUpdate(nextProps,nextState){
        if(this.props.appRouter!==nextProps.appRouter&&this.state===nextState){
           ALC.GetComponent(nextProps.appRouter).then(res=>{
               this.setState({
                   reload:res
               })
           })
            return false
        }else{
            return true
        }
    }

    renderRouter() {
        let {actionAppRouter, appRouter} = this.props
            switch(appRouter){
                case 'button':{
                    let Button = this.state.reload
                    return <div><Button onClick={e=>{alert(e)}} /></div>
                }
                default:
                    return <div><h1>Home</h1>
                    <a onClick={e => actionAppRouter('button')} href="javascript:void(0)">href to button pager</a>
                </div>
            }
    }

    render() {
        return this.renderRouter()
    }
}
App.propTypes = {
    appRouter: PropTypes.string.isRequired
}


function state(state) {
    return ({
        appRouter: state.appRouter
    })
}

function action(dispatch) {
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect(state, action)(App)