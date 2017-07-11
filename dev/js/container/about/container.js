import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as ActionCreators from './action'
import PropTypes from 'prop-types'

class About extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div style={{textAlign:'center'}}  ><h1>About</h1>
            <p>{this.props.match.params.name}</p>
            <ul>
                <li><Link to="/">To Home</Link></li>
            </ul>
        </div>
    }
}
About.propTypes = {
}


function state(state) {
    return ({
    })
}

function action(dispatch) {
    return bindActionCreators({}, dispatch)
}

export default connect(state, action)(About)