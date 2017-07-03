/**
 * Created by pengjingcheng on 2017/6/30.
 */
import React from 'react'
import PropTypes from 'prop-types'


class Button extends React.Component {
    constructor(){
        super()
        this.style = {
            button:{
                height:100,
                width:100
            }
        }
    }

    render() {
        return <div>
            <button onClick={
                e => {
                    this.props.onClick(1000)
                }
            } style={this.style.button}>点击a
            </button>
        </div>
    }
}

Button.propTypes = {
    onClick:PropTypes.func.isRequired
}

export default Button