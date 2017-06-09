import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ActionCreators from '../action/app';
import PropTypes from 'prop-types';
import {List,Map} from 'immutable';

class Student{
    static varStatic = 21;
    _name;
    constructor(name){
        this.name = name;
    }

    set name(name){
        this._name = name;
    }

    sayName(){
        console.log(this._name);
    }
    static sayStatic(){
        return  this.varStatic;
    }
}

class Teammate extends Student{
    constructor(num){
        super();
        this.num = num;
    }
    sayHello(){
        
    }
}

class Node{
    data;next;
    constructor(data){
        if(data){
            this.data = data;
            this.next = null;
        }else{
            this.next=null;
        }
    }
}

class NodeList{
    head;
    constructor(){
        this.head = new Node(null);
    }

    add(data){
        let current = this.head;
        let newNode = new Node(data);
        while(current.next!==null){
            current = current.next;
        }
        current.next = newNode;
    }

    query(data){
        let current = this.head;
        while(current.next!==null){
            if(current.data===data){
                return current;
            }
            current = current.next;
        }
    }

    makeLoop(target){
        let loopTarget = this.query(target);
        let current = this.head;
        while(current.next!==null){
            current = current.next;
        }
        current.next = loopTarget;
    }

    reserve(){
        let current = this.head.next;
        let p;
        if(current===null){
            return this.head;
        }
        while (current.next!==null){
            p = current.next;
            current.next = p.next;
            p.next = this.head.next;
            this.head.next = p;
        }
        return this.head;
    }

    hasLoop(){
        let first = this.head;
        let second = this.head;
        while(first.next!==null&&second.next.next!==null){
            first = first.next;
            second = second.next.next;
            if(first.next === second.next.next){
                return first;
            }
        }
        return false;
    }

    loopLength(){
        let point = this.hasLoop();
        let length = 2;
        let current = this.hasLoop();
        while(current.next!==point){
            current = current.next;
            length++;
        }
        return length;
    }

}

class App extends React.Component {
    
    render() {
        let {actionClick,click} =this.props;
        let list = new NodeList();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(6);
        list.add(7);
        list.makeLoop(3);
        console.log(list);
        console.log(list.hasLoop());
        console.log(list.loopLength());
        return <div className="app">
            <h1>{click.get(0)}</h1>
            <button onClick={
                e=>{
                    actionClick(1000);
                }
            } style={{height:100,width:100}}>点击</button>
        </div>;
    }
}
App.propTypes = {
    click:PropTypes.object.isRequired
}


function state(state) {
    return ({
        click:state.common.get('onClick'),
    });
}

function action(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(state, action)(App);