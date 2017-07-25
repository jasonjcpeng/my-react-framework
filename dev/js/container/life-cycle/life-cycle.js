/**
 *
 * Created by pengjingcheng on 2017/7/17.
 */
import React from 'react'

class LifeCycle extends React.PureComponent{
    constructor(props, context, updater) {
        super()
        this.state = {
            flag:Math.random()
        }
        //alert('Constructor(props,context,updater)')
    }

    componentWillMount() {
        //alert('ComponentWillMount()')
    }

    componentDidMount() {
        //alert('componentDidMount()')
    }

    componentWillReceiveProps(nextProps, nextContext) {
        //alert('componentWillReceiveProps(nextProps,nextContext)')
    }

    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        //alert('shouldComponentUpdate(nextProps, nextState, nextContext)')
    }*/

    componentWillUpdate(nextProps, nextState, nextContext, transaction) {
        alert('componentWillUpdate(nextProps,nextState,nextContext,transaction)')
    }

    componentDidUpdate(prevProps, prevState, prevContext, rootNode) {
        //alert('componentDidUpdate(prevProps,prevState,prevContext,rootNode)')
    }

    componentWillUnmount(){
        //alert('componentWillUnmount()')
    }

    render() {
        //alert('Render()')
        return <div>
            <h1>Life Cycle Component!</h1>
            <h2>Random Number:{this.props.number.number}</h2>
            <h2>Self State:{this.state.flag}</h2>
            {/*language=CSS*/}
            <style jsx>{`
                div {
                    margin-top: 50px;
                    color: #ffffff;
                    text-align: center;
                    height: 100px;
                    background: #666666;
                }

                h1 {
                    line-height: 30px;
                }
                h2 {
                    line-height: 30px;
                }
            `}</style>
        </div>
    }
}


export default LifeCycle