import React from "react";

class Timer extends React.Component{
    constructor(){
        super();
        this.state = {
            counter: 0
        };
    }

    start = () =>{
        this.setState({counter: this.state.counter + 1})
    }

    handleClick =(e) =>{
        this.interval = setInterval(this.start, 1000);
    }
    render(){
        return(<React.Fragment>
                <button onClick={this.handleClick}>Start Timer</button><br></br><br></br>
                <h2>Seconds Elapsed: {this.state.counter}</h2>
        </React.Fragment>
        ) 
    }
}

export default Timer;