/**
 *
 * Created by pengjingcheng on 2017/7/10.
 */
import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import ALC from './container/_tools/async-load-component'
import App from 'bundle-loader?lazy&name=app!./container/home/container'
import About from 'bundle-loader?lazy&name=about!./container/about/container'
import LifeCycleContainer from 'bundle-loader?lazy&name=lifecyclecontainer!./container/life-cycle/container'

class RouterIndex extends React.Component {
    render() {
        return <Router>
            <Switch>
                <Route exact path='/' component={ALC.GetComponent(App)}/>
                <Route path="/LifeCycle" component={ALC.GetComponent(LifeCycleContainer)}/>
                <Route path='/About&:name' component={ALC.GetComponent(About)}/>
            </Switch>
        </Router>
    }
}

export default RouterIndex