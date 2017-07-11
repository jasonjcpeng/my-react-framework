/**
 * Created by pengjingcheng on 2017/7/10.
 */
import React from 'react'
class ALC {
    static _GetComponent(asyncComponent) {
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

    static GetComponent(asyncComponent){
        class C extends React.Component{
            constructor(){
                super()
                this.state={
                    component:null
                }
            }
            componentWillMount(){
                (async ()=>{
                   this.setState({
                       component:await ALC._GetComponent(asyncComponent)
                   })
                })()
            }
            render(){
                let Component = this.state.component
                if(Component){
                    return <Component {...this.props}/>
                }else{
                    return null
                }
            }
        }
        return C
    }
}

export default ALC