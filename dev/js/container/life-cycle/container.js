/**
 *
 * Created by pengjingcheng on 2017/7/17.
 */
import React from 'react'
import LifeCycle from './life-cycle'

class Container extends React.Component{
    p = {number:3}
    constructor(){
        super()
        this.state = {
            show:true,
            p:{number:3}
        }
    }

    render(){
        return <div>
            <ul>
                <li onClick={e=>{
                    this.p.number=4
                    this.setState({
                        p:{number:3}
                    })
                }}>Send props to LifeCycle component</li>
                <li onClick={e=>{
                    this.refs.lifeCycle.setState({
                        flag:Math.random()
                    })
                }}>LifeCycle component change state</li>
                <li onClick={e=>{
                    this.setState({
                        show:false
                    })
                }}>Destroy LifeCycle component</li>
            </ul>
            {(()=>{
                if(this.state.show){
                    return <LifeCycle ref="lifeCycle" number={this.state.p} changeState={this.state.changeState}/>
                }
            })()}
            {/*language=CSS*/}
            <style>{`
                ul>li{
                    cursor: pointer;
                    text-align: center;
                    color: #fff;
                    line-height: 30px;
                    height: 30px;
                    background: #666;
                    margin-bottom: 10px;
                }
            `}</style>
        </div>
    }
}


export default Container