/**
 *
 * Created by pengjingcheng on 2017/7/10.
 */
import React from 'react'
import PropTypes from 'prop-types'

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultBackgroundColor: '#fff',
            changeBackgroundColor: '#999',
            activeKey: null
        }
    }

    handleChangeBackgroundColor(k) {
        this.setState({
            activeKey: k
        })
    }

    render() {
        let changeBackgroundColor = this.state.changeBackgroundColor
        let defaultBackgroundColor = this.state.defaultBackgroundColor
        return <div>
            <ul>
                {
                    this.props.content.map((v, k) => {
                        return <li onClick={e => {
                            this.handleChangeBackgroundColor(k)
                        }}
                                   style={{backgroundColor: k === this.state.activeKey ? changeBackgroundColor : defaultBackgroundColor}}
                                   key={k}>{v}</li>
                    })
                }
            </ul>
            { /*language=CSS*/ }
            <style jsx>{`li{
                line-height: 20px;
                cursor: pointer;
            }`}
            </style>
        </div>
    }
}

Menu.PropTypes = {
    content: PropTypes.array.isRequired
}

export default Menu