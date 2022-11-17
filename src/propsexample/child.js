import React from "react";

class Child extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: null
        }
    }

    updateParentName = () =>{
        let newValue = "jack"
        this.setState({name: newValue});
        this.props.updatefunc(newValue)
    }

    render(){
        return(
            <div>
                <h2>{this.props.parentname}</h2>
                <h2>{this.state.name}</h2>
                <button onClick={this.updateParentName}>Update</button>
            </div>
        )

    }
}

export default Child