import React from 'react'
import Child from './child';

class Parent extends React.Component{
    constructor(){
        super();
        this.state = {
            parentname: "hello, I am the parent"
        }
    }

    update = (child) =>{
        this.setState({parentname: child})
    }

    render(){
        return(
        <div>
            <Child parentname={this.state.parentname} updatefunc={this.update}></Child>
        </div>
        )
    }
}

export default Parent;