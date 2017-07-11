import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as ActionCreators from './action'
import HOC from '../_tools/high-order-components'
import PropTypes from 'prop-types'


import Menu from '../../components/menu'

class App extends React.Component {
    constructor() {
        super()
    }

    componentWillMount(){
        this.props.actionGetMenuContent()
    }

    createNewMenu(){
        if(this.props.showMenu){
            let NewMenu = HOC({
                handleChangeBackgroundColor:function(k){
                    this.setState({
                        activeKey:k,
                        changeBackgroundColor:'#fff',

                    })
                },componentWillMount:function(){
                    this.setState({
                        defaultBackgroundColor:'#999',
                    })
                }
            })(Menu)
            return <div><NewMenu content={this.props.selectContent}/></div>
        }
    }

    render(){
        return <div style={{textAlign:'center'}} ><h1>Home</h1>
            <ul>
                <li><Link to="/About&It_is_a_message_from_home_page">To About</Link></li>
            </ul>
            <Menu content={this.props.asyncContent}/>
            <a style={{cursor:'pointer',color:'blue'}} onClick={e=>{this.props.actionShowMenu()}}>click to toggle menu</a>
            {this.createNewMenu()}
        </div>
    }
}
App.propTypes = {
    showMenu:PropTypes.bool.isRequired,
    content:PropTypes.array.isRequired,
    asyncContent:PropTypes.array.isRequired,
    selectContent:PropTypes.array.isRequired
}


function state(state) {
    return ({
        showMenu:state.home.get('showMenu'),
        content:state.home.get('content'),
        asyncContent:state.home.get('asyncContent'),
        selectContent:state.home.get('selectContent')
    })
}

function action(dispatch) {
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect(state, action)(App)