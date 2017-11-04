import React from 'react'
import bodymovin from 'bodymovin'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from './action'
import PropTypes from 'prop-types'

class About extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        bodymovin.loadAnimation({
            container: this.refs.bodymovin, 
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../../../json/data.json'
        })
    }

    render() {
        return <div style={{ textAlign: 'center' }}  ><h1>About</h1>
            <p>{this.props.match.params.name}</p>
            <ul>
                <li><Link to="/">To Home</Link></li>
            </ul>
            <div ref="bodymovin" style={{ height: '300px', width: '300px' }}></div>
        </div>
    }
}
About.propTypes = {
}


function store(store) {
    return ({
    })
}

function action(dispatch) {
    return bindActionCreators({}, dispatch)
}

export default connect(store, action)(About)